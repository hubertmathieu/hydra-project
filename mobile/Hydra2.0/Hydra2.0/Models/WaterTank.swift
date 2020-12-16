//
//  WaterTank.swift
//  Hydra2.0
//
//  Created by Simon Desrochers on 2020-11-27.
//

import UIKit

class WaterTank: ObservableObject, Codable {

    @Published var ph: Float
    
    @Published var waterLevel1 : Float
    
    @Published var waterLevel2: Float
    
    @Published var progress: Float
    
    @Published var phTreshold : Float
    
    enum CodingKeys : CodingKey{
        
        case ph, waterLevel1, waterLevel2, phTreshold
    }
    
    init() {
        
        ph = 7.0
        
        waterLevel1 = 50.0
        
        waterLevel2 = 50.0
        
        progress = 50.0
        
        phTreshold = 6.5
        
    }
    
    func encode(to encoder: Encoder) throws {
        /*var container = encoder.container(keyedBy: CodingKeys.self)

        try container.encode(temp, forKey: .temp)
        try container.encode(humidity, forKey: .humidity)*/
    }
    
    required init(from decoder: Decoder) throws {
        let container = try decoder.container(keyedBy: CodingKeys.self)
        
        ph = try container.decode(Float.self, forKey: .ph)
            
        waterLevel1 = try container.decode(Float.self, forKey: .waterLevel1)
        
        waterLevel2 = try container.decode(Float.self, forKey: .waterLevel2)
        
        phTreshold = try container.decode(Float.self, forKey: .phTreshold)
        
        progress = 12.0
    }
    
    func setWaterProgress(){
        
        if ( waterLevel1 > 550){
            
            progress = 20.0
        }
        
        if ( waterLevel2 < 70){
            
            progress = 5.0
        }
        
        if ( waterLevel1 < 550 && waterLevel2 > 70){
            
            progress = 12.0
            
        }
    }


}
