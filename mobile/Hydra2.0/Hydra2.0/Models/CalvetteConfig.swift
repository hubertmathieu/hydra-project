//
//  CalvetteConfig.swift
//  Hydra2.0
//
//  Created by Xavier Mathieu on 2022-11-25.
//

import UIKit

class CalvetteConfig: ObservableObject, Codable {
  @Published var temperature1: Int
  @Published var humidity1: Int
  @Published var temperature2: Int
  @Published var humidity2: Int
  @Published var temperature3: Int
  @Published var humidity3: Int

  enum CodingKeys: CodingKey {
    case temperature1, humidity1, temperature2,
      humidity2, temperature3, humidity3
  }

  init() {
    temperature1 = 25
    humidity1 = 85
    temperature2 = 25
    humidity2 = 85
    temperature3 = 25
    humidity3 = 85
  }

  func encode(to encoder: Encoder) throws {
    /*var container = encoder.container(keyedBy: CodingKeys.self)
        try container.encode(temp, forKey: .temp)
        try container.encode(humidity, forKey: .humidity)*/
  }

  required init(from decoder: Decoder) throws {
    let container = try decoder.container(keyedBy: CodingKeys.self)
    temperature1 = try container.decode(Int.self, forKey: .temperature1)
    humidity1 = try container.decode(Int.self, forKey: .humidity1)
    temperature2 = try container.decode(Int.self, forKey: .temperature2)
    humidity2 = try container.decode(Int.self, forKey: .humidity2)
    temperature3 = try container.decode(Int.self, forKey: .temperature3)
    humidity3 = try container.decode(Int.self, forKey: .humidity3)
  }
}
