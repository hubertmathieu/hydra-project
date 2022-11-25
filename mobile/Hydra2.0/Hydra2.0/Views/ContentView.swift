//
//  ContentView.swift
//  Hydra2.0
//
//  Created by Simon Desrochers on 2020-11-26.
//

import SwiftUI
import UIKit

struct ContentView: View {
    @EnvironmentObject var ambient: Ambient
    @EnvironmentObject var calvettesConfig: CalvetteConfig
    @EnvironmentObject var viewModel: MainScreenVM
    @State private var showInput = false
    
    var body: some View {
        NavigationView {
            ScrollView {
                VStack {
                    HStack {
                        Image("hydraLogo").resizable().frame(width: 50, height: 50)
                        Text("Hydra").foregroundColor(Color.white).font(
                            .custom("AppleSDGothicNeo-Light", size: 36))
                        Spacer()
                        NavigationLink(destination: InputView(showSelf: $showInput), isActive: $showInput) {
                            Image(systemName: "gear").resizable().frame(width: 30, height: 30).foregroundColor(
                                .white
                            ).font(Font.system(.largeTitle).bold()).padding(.leading, 40)
                        }
                    }.frame(minWidth: 0, maxWidth: .infinity, minHeight: 90, alignment: .center).padding(20)
                        .background(
                            LinearGradient(
                                gradient: Gradient(stops: [
                                    Gradient.Stop(
                                        color: Color(
                                            hue: 0.5773694601403662, saturation: 0.9232538981610035,
                                            brightness: 0.7144907756024097, opacity: 0.8427025208990259), location: 0.0),
                                    Gradient.Stop(
                                        color: Color(
                                            hue: 0.3590735469955996, saturation: 0.7599689070000707,
                                            brightness: 0.7218876574412887, opacity: 0.8408396157873683), location: 1.0),
                                ]), startPoint: UnitPoint.leading, endPoint: UnitPoint.trailing))
                    VStack(alignment: .leading, spacing: 15) {
                        VStack(alignment: .leading, spacing: 15) {
                            VStack(alignment: .leading) {
                                Text("Serre").font(.custom("AppleSDGothicNeo-Light", size: 30)).foregroundColor(
                                    Color.white)
                            }.padding(.top, 10)
                            HStack {
                                VStack(alignment: .leading) {
                                    Text("Température").font(.custom("AppleSDGothicNeo-Light", size: 12))
                                        .foregroundColor(Color.white)
                                    Text("\(String(format:"%.1f",viewModel.ambient.temp))°C").font(
                                        .custom("AppleSDGothicNeo-Light", size: 20)
                                    ).foregroundColor(Color.white)
                                }
                                Spacer()
                                VStack(alignment: .trailing) {
                                    Text("Humidité").font(.custom("AppleSDGothicNeo-Light", size: 12))
                                        .foregroundColor(Color.white)
                                    Text("\(String(format:"%.1f",viewModel.ambient.humidity))%").font(
                                        .custom("AppleSDGothicNeo-Light", size: 20)
                                    ).foregroundColor(Color.white)
                                }
                            }.frame(width: UIScreen.main.bounds.width - 40).padding(10).background(
                                RadialGradient(
                                    gradient: Gradient(stops: [
                                        Gradient.Stop(
                                            color: Color(
                                                hue: 0.6495239073971668, saturation: 0.365004206278238,
                                                brightness: 0.17169991458754943, opacity: 0.9369329659335586), location: 0.0
                                        ),
                                        Gradient.Stop(
                                            color: Color(
                                                hue: 0.6637860033885543, saturation: 0.06717392335455102,
                                                brightness: 0.04240022222679782, opacity: 0.4345752532223621), location: 1.0
                                        ),
                                    ]), center: UnitPoint.center, startRadius: 152.77913411458331,
                                    endRadius: 413.0167643229167)
                            ).cornerRadius(10)
                            VStack(alignment: .leading) {
                                Text("Calvettes").font(.custom("AppleSDGothicNeo-Light", size: 30)).foregroundColor(
                                    Color.white)
                            }.padding(.top, 10)
                            HStack {
                                VStack(spacing: 10) {
                                    Text("Calvette 1").font(.custom("AppleSDGothicNeo-Light", size: 20))
                                        .foregroundColor(Color.white)
                                    Text("\(String(viewModel.calvettesConfig.temperature1))°C").font(
                                        .custom("AppleSDGothicNeo-Light", size: 20)
                                    ).foregroundColor(Color.white)
                                    Text("\(String(viewModel.calvettesConfig.humidity1))%").font(
                                        .custom("AppleSDGothicNeo-Light", size: 20)
                                    ).foregroundColor(Color.white)
                                }.frame(width: 100, height: 120, alignment: .center).background(
                                    RadialGradient(
                                        gradient: Gradient(stops: [
                                            Gradient.Stop(
                                                color: Color(
                                                    hue: 0.6495239073971668, saturation: 0.365004206278238,
                                                    brightness: 0.17169991458754943, opacity: 0.9369329659335586),
                                                location: 0.0),
                                            Gradient.Stop(
                                                color: Color(
                                                    hue: 0.6637860033885543, saturation: 0.06717392335455102,
                                                    brightness: 0.04240022222679782, opacity: 0.4345752532223621),
                                                location: 1.0),
                                        ]), center: UnitPoint.center, startRadius: 152.77913411458331,
                                        endRadius: 413.0167643229167)
                                ).cornerRadius(10)
                                Spacer()
                                VStack(spacing: 10) {
                                    Text("Calvette 2").font(.custom("AppleSDGothicNeo-Light", size: 20))
                                        .foregroundColor(Color.white)
                                    Text("\(String(viewModel.calvettesConfig.temperature2))°C").font(
                                        .custom("AppleSDGothicNeo-Light", size: 20)
                                    ).foregroundColor(Color.white)
                                    Text("\(String(viewModel.calvettesConfig.humidity2))%").font(
                                        .custom("AppleSDGothicNeo-Light", size: 20)
                                    ).foregroundColor(Color.white)
                                }.frame(width: 100, height: 120, alignment: .center).background(
                                    RadialGradient(
                                        gradient: Gradient(stops: [
                                            Gradient.Stop(
                                                color: Color(
                                                    hue: 0.6495239073971668, saturation: 0.365004206278238,
                                                    brightness: 0.17169991458754943, opacity: 0.9369329659335586),
                                                location: 0.0),
                                            Gradient.Stop(
                                                color: Color(
                                                    hue: 0.6637860033885543, saturation: 0.06717392335455102,
                                                    brightness: 0.04240022222679782, opacity: 0.4345752532223621),
                                                location: 1.0),
                                        ]), center: UnitPoint.center, startRadius: 152.77913411458331,
                                        endRadius: 413.0167643229167)
                                ).cornerRadius(10)
                                Spacer()
                                VStack(spacing: 10) {
                                    Text("Calvette 3").font(.custom("AppleSDGothicNeo-Light", size: 20))
                                        .foregroundColor(Color.white)
                                    Text("\(String(viewModel.calvettesConfig.temperature3))°C").font(
                                        .custom("AppleSDGothicNeo-Light", size: 20)
                                    ).foregroundColor(Color.white)
                                    Text("\(String(viewModel.calvettesConfig.humidity3))%").font(
                                        .custom("AppleSDGothicNeo-Light", size: 20)
                                    ).foregroundColor(Color.white)
                                }.frame(width: 100, height: 120, alignment: .center).background(
                                    RadialGradient(
                                        gradient: Gradient(stops: [
                                            Gradient.Stop(
                                                color: Color(
                                                    hue: 0.6495239073971668, saturation: 0.365004206278238,
                                                    brightness: 0.17169991458754943, opacity: 0.9369329659335586),
                                                location: 0.0),
                                            Gradient.Stop(
                                                color: Color(
                                                    hue: 0.6637860033885543, saturation: 0.06717392335455102,
                                                    brightness: 0.04240022222679782, opacity: 0.4345752532223621),
                                                location: 1.0),
                                        ]), center: UnitPoint.center, startRadius: 152.77913411458331,
                                        endRadius: 413.0167643229167)
                                ).cornerRadius(10)
                            }
                        }.frame(alignment: .center).padding(15)
                    }
                }
            }.navigationBarTitle("").navigationBarHidden(true).background(
                RadialGradient(
                    gradient: Gradient(stops: [
                        Gradient.Stop(
                            color: Color(
                                hue: 0.5773694601403662, saturation: 0.9232538981610035,
                                brightness: 0.7144907756024097, opacity: 0.8427025208990259), location: 0.0),
                        Gradient.Stop(
                            color: Color(
                                hue: 0.3590735469955996, saturation: 0.7599689070000707, brightness: 0.0,
                                opacity: 1.0), location: 1.0),
                    ]), center: UnitPoint.topLeading, startRadius: 0.0, endRadius: 174.96719360351562)).ignoresSafeArea()
        }
    }
}

/*struct ContentView_Previews: PreviewProvider {
 static var previews: some View {
 ContentView()
 }
 }*/

