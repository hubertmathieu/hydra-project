//
//  CalvetteConfig.swift
//  Hydra2.0
//
//  Created by Xavier Mathieu on 2022-11-25.
//

import UIKit

class CalvetteConfig: ObservableObject, Codable {
  @Published var temperature1: Float
  @Published var humidity1: Float
  @Published var temperature2: Float
  @Published var humidity2: Float
  @Published var temperature3: Float
  @Published var humidity3: Float

  enum CodingKeys: CodingKey {
    case temperature1, humidity1, temperature2,
      humidity2, temperature3, humidity3
  }

  init() {
    temperature1 = 25.0
    humidity1 = 85.0
    temperature2 = 25.0
    humidity2 = 85.0
    temperature3 = 25.0
    humidity3 = 85.0
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
    temperature2 = try container.decode(Float.self, forKey: .temperature2)
    humidity2 = try container.decode(Float.self, forKey: .humidity2)
    temperature3 = try container.decode(Float.self, forKey: .temperature3)
    humidity3 = try container.decode(Float.self, forKey: .humidity3)
  }
}
