//
//  CalvetteThresholds.swift
//  Hydra2.0
//
//  Created by Xavier Mathieu on 2022-11-25.
//

import UIKit

class CalvetteThresholds: ObservableObject, Codable {
    @Published var humidityMinThreshold1: Int
    @Published var humidityMaxThreshold1: Int
    @Published var humidityMinThreshold2: Int
    @Published var humidityMaxThreshold2: Int
    @Published var humidityMinThreshold3: Int
    @Published var humidityMaxThreshold3: Int
    
    enum CodingKeys: CodingKey {
        case humidityMinThreshold1, humidityMaxThreshold1, humidityMinThreshold2, humidityMaxThreshold2,
             humidityMinThreshold3, humidityMaxThreshold3
    }
    
    init() {
        humidityMinThreshold1 = 85
        humidityMaxThreshold1 = 95
        humidityMinThreshold2 = 85
        humidityMaxThreshold2 = 95
        humidityMinThreshold3 = 85
        humidityMaxThreshold3 = 95
    }
    
    func encode(to encoder: Encoder) throws {
        /*var container = encoder.container(keyedBy: CodingKeys.self)
         try container.encode(temp, forKey: .temp)
         try container.encode(humidity, forKey: .humidity)*/
    }
    
    required init(from decoder: Decoder) throws {
        let container = try decoder.container(keyedBy: CodingKeys.self)
        humidityMinThreshold1 = try container.decode(Int.self, forKey: .humidityMinThreshold1)
        humidityMaxThreshold1 = try container.decode(Int.self, forKey: .humidityMaxThreshold1)
        humidityMinThreshold2 = try container.decode(Int.self, forKey: .humidityMinThreshold2)
        humidityMaxThreshold2 = try container.decode(Int.self, forKey: .humidityMaxThreshold2)
        humidityMinThreshold3 = try container.decode(Int.self, forKey: .humidityMinThreshold3)
        humidityMaxThreshold3 = try container.decode(Int.self, forKey: .humidityMaxThreshold3)
    }
}
