//
//  Calvette.swift
//  Hydra2.0
//
//  Created by Simon Desrochers on 2020-11-27.
//

import UIKit

class Calvette: ObservableObject, Codable {
  @Published var temperature1: Float
  @Published var humidity1: Float
  @Published var humidityMinThreshold1: Float
  @Published var humidityMaxThreshold1: Float
  @Published var temperature2: Float
  @Published var humidity2: Float
  @Published var humidityMinThreshold2: Float
  @Published var humidityMaxThreshold2: Float
  @Published var temperature3: Float
  @Published var humidity3: Float
  @Published var humidityMinThreshold3: Float
  @Published var humidityMaxThreshold3: Float

  enum CodingKeys: CodingKey {
    case temperature1, humidity1, humidityMinThreshold1, humidityMaxThreshold1, temperature2,
      humidity2, humidityMinThreshold2, humidityMaxThreshold2, temperature3, humidity3,
      humidityMinThreshold3, humidityMaxThreshold3
  }

  init() {
    temperature1 = 25.0
    humidity1 = 85.0
    humidityMinThreshold1 = 85.0
    humidityMaxThreshold1 = 95.0
    temperature2 = 25.0
    humidity2 = 85.0
    humidityMinThreshold2 = 85.0
    humidityMaxThreshold2 = 95.0
    temperature3 = 25.0
    humidity3 = 85.0
    humidityMinThreshold3 = 85.0
    humidityMaxThreshold3 = 95.0
  }

  func encode(to encoder: Encoder) throws {
    /*var container = encoder.container(keyedBy: CodingKeys.self)
        try container.encode(temp, forKey: .temp)
        try container.encode(humidity, forKey: .humidity)*/
  }

  required init(from decoder: Decoder) throws {
    let container = try decoder.container(keyedBy: CodingKeys.self)
    temperature1 = try container.decode(Float.self, forKey: .temperature1)
    humidity1 = try container.decode(Float.self, forKey: .humidity1)
    humidityMinThreshold1 = try container.decode(Float.self, forKey: .humidityMinThreshold1)
    humidityMaxThreshold1 = try container.decode(Float.self, forKey: .humidityMaxThreshold1)
    temperature2 = try container.decode(Float.self, forKey: .temperature2)
    humidity2 = try container.decode(Float.self, forKey: .humidity2)
    humidityMinThreshold2 = try container.decode(Float.self, forKey: .humidityMinThreshold2)
    humidityMaxThreshold2 = try container.decode(Float.self, forKey: .humidityMaxThreshold2)
    temperature3 = try container.decode(Float.self, forKey: .temperature3)
    humidity3 = try container.decode(Float.self, forKey: .humidity3)
    humidityMinThreshold3 = try container.decode(Float.self, forKey: .humidityMinThreshold3)
    humidityMaxThreshold3 = try container.decode(Float.self, forKey: .humidityMaxThreshold3)
  }
}
