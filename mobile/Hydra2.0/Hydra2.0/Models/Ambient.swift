//
//  Ambient.swift
//  Hydra2.0
//
//  Created by Simon Desrochers on 2020-11-27.
//

import UIKit

class Ambient: ObservableObject, Codable {
    @Published var temp: Float
    @Published var humidity: Float
    
    enum CodingKeys: CodingKey {
        case temp, humidity, main
    }
    
    init() {
        temp = 20
        humidity = 50.0
    }
    
    func encode(to encoder: Encoder) throws {
        var container = encoder.container(keyedBy: CodingKeys.self)
        try container.encode(temp, forKey: .temp)
        try container.encode(humidity, forKey: .humidity)
    }
    
    required init(from decoder: Decoder) throws {
        let container = try decoder.container(keyedBy: CodingKeys.self)
        temp = try container.nestedContainer(keyedBy: CodingKeys.self, forKey: .main).decode(
            Float.self, forKey: .temp)
        humidity = try container.nestedContainer(keyedBy: CodingKeys.self, forKey: .main).decode(
            Float.self, forKey: .humidity)
    }
}
