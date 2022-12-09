//
//  MainScreenVM.swift
//  Hydra2.0
//
//  Created by Simon Desrochers on 2020-11-28.
//

import Combine
import SwiftUI
import UIKit

class MainScreenVM: ObservableObject {
    @Published var ambient: Ambient = Ambient()
    @Published var calvettesConfig: CalvetteConfig = CalvetteConfig()
    @Published var calvettesThresholds: CalvetteThresholds = CalvetteThresholds()
    @Published var timer = Timer()
    
    init() {
        timer = Timer.scheduledTimer(
            timeInterval: 5, target: self, selector: #selector(update), userInfo: nil, repeats: true)
        timer.fire()
    }
    
    @objc func update() {
        callOpenWeatherApi()
        callHydraConfigApi()
        callHydraThresholdsApi()
    }
    
    func callOpenWeatherApi() {
        let url = URL(
            string:
                "https://api.openweathermap.org/data/2
                .5/weather?q=Saint-Ours
                ,ca&units=metric&appid=0423f1d8ad5cbacd8a4f2a0776e44a71"
        )!
        let task = URLSession.shared.dataTask(with: url) { (data, response, error) in
            guard let data = data else { return }
            self.handleOpenWeatherRequest(data: data)
        }
        task.resume()
    }
    
    func callHydraConfigApi() {
        let url = URL(string: "http://134.122.126.29/api/v1/config")!
        let task = URLSession.shared.dataTask(with: url) { (data, response, error) in
            guard let data = data else { return }
            _ = String(data: data, encoding: .utf8)
            self.handleHydraConfigRequest(data: data)
        }
        task.resume()
    }
    
    func callHydraThresholdsApi() {
        let url = URL(string: "http://134.122.126.29/api/v1/thresholds")!
        let task = URLSession.shared.dataTask(with: url) { (data, response, error) in
            guard let data = data else { return }
            _ = String(data: data, encoding: .utf8)
            self.handleHydraThresholdsRequest(data: data)
        }
        task.resume()
    }
    
    func handleOpenWeatherRequest(data: Data) {
        do {
            let decoded = try JSONDecoder().decode(Ambient.self, from: data)
            DispatchQueue.main.async {
                self.ambient = decoded
            }
        } catch {
            print(error)
        }
    }
    
    func handleHydraConfigRequest(data: Data) {
        do {
            let decoded = try JSONDecoder().decode(CalvetteConfig.self, from: data)
            DispatchQueue.main.async {
                self.calvettesConfig = decoded
            }
        } catch {
            print(error)
        }
    }
    
    func handleHydraThresholdsRequest(data: Data) {
        do {
            let decoded = try JSONDecoder().decode(CalvetteThresholds.self, from: data)
            DispatchQueue.main.async {
                self.calvettesThresholds = decoded
            }
        } catch {
            print(error)
        }
    }
    
    func sendData(data: [String: Any]) {
        let url = URL(string: "http://134.122.126.29/api/v1/thresholds")!
        let parameters = data
        var request = URLRequest(url: url)
        request.httpMethod = "POST"
        request.httpBody = parameters.percentEncoded()
        let task = URLSession.shared.dataTask(with: request) { data, response, error in
            guard let data = data, error == nil else {
                print(error?.localizedDescription ?? "No data")
                return
            }
            let responseJSON = try? JSONSerialization.jsonObject(with: data, options: [])
            if let responseJSON = responseJSON as? [String: Any] {
                print(responseJSON)
                if let httpResponse = response as? HTTPURLResponse {
                    print("statusCode: \(httpResponse.statusCode)")
                }
            }
        }
        task.resume()
    }
}

extension Dictionary {
    func percentEncoded() -> Data? {
        return map { key, value in
            let escapedKey =
            "\(key)".addingPercentEncoding(withAllowedCharacters: .urlQueryValueAllowed) ?? ""
            let escapedValue =
            "\(value)".addingPercentEncoding(withAllowedCharacters: .urlQueryValueAllowed) ?? ""
            return escapedKey + "=" + escapedValue
        }
        .joined(separator: "&")
        .data(using: .utf8)
    }
}

extension CharacterSet {
    static let urlQueryValueAllowed: CharacterSet = {
        let generalDelimitersToEncode = ":#[]@"  // does not include "?" or "/" due to RFC 3986 - Section 3.4
        let subDelimitersToEncode = "!$&'()*+,;="
        var allowed = CharacterSet.urlQueryAllowed
        allowed.remove(charactersIn: "\(generalDelimitersToEncode)\(subDelimitersToEncode)")
        return allowed
    }()
}
