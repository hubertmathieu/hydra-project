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
    
    @Published var humidityLowerTreshold1: Float
    
    @Published var humidityUpperTreshold1: Float
    
    @Published var temperature2: Float
    
    @Published var humidity2: Float
    
    @Published var humidityLowerTreshold2: Float
    
    @Published var humidityUpperTreshold2: Float
    
    @Published var temperature3: Float
    
    @Published var humidity3: Float
    
    @Published var humidityLowerTreshold3: Float
    
    @Published var humidityUpperTreshold3: Float
    
    
    enum CodingKeys : CodingKey{
        
        case temperature1, humidity1, humidityLowerTreshold1, humidityUpperTreshold1, temperature2, humidity2, humidityLowerTreshold2, humidityUpperTreshold2, temperature3, humidity3, humidityLowerTreshold3, humidityUpperTreshold3
        
    }
    
    init() {
        
        temperature1 = 25.0
        
        humidity1 = 85.0
        
        humidityLowerTreshold1 = 85.0
        
        humidityUpperTreshold1 = 95.0
        
        temperature2 = 25.0
        
        humidity2 = 85.0
        
        humidityLowerTreshold2 = 85.0
        
        humidityUpperTreshold2 = 95.0
        
        temperature3 = 25.0
        
        humidity3 = 85.0
        
        humidityLowerTreshold3 = 85.0
        
        humidityUpperTreshold3 = 95.0
        
        
        
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
        
        humidityLowerTreshold1 = try container.decode(Float.self, forKey: .humidityLowerTreshold1)
        
        humidityUpperTreshold1 = try container.decode(Float.self, forKey: .humidityUpperTreshold1)
        
        temperature2 = try container.decode(Float.self, forKey: .temperature2)
        
        humidity2 = try container.decode(Float.self, forKey: .humidity2)
        
        humidityLowerTreshold2 = try container.decode(Float.self, forKey: .humidityLowerTreshold2)
        
        humidityUpperTreshold2 = try container.decode(Float.self, forKey: .humidityUpperTreshold2)
        
        temperature3 = try container.decode(Float.self, forKey: .temperature3)
        
        humidity3 = try container.decode(Float.self, forKey: .humidity3)
        
        humidityLowerTreshold3 = try container.decode(Float.self, forKey: .humidityLowerTreshold3)
        
        humidityUpperTreshold3 = try container.decode(Float.self, forKey: .humidityUpperTreshold3)
    }
    
    

}
