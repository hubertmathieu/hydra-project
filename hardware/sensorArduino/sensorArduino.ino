//bluetooth ship doc https://drive.google.com/file/d/0B4urklB65vaCcEVyMm5haVVpMUk/view

#include <SoftwareSerial.h>
#define WATER_LEVEL_TRIGGER 600
#define START_RIVER_PUMP 0

float phCalibration = 21.20;

//analog sensor pins
const short waterSensorPin = A1;
const short phSensor = A0;

//serial inputs
SoftwareSerial BTserial(0, 1); //RX and TX

void setup() {
    Serial.begin(9600);
    BTserial.begin(9600);
    Serial.println("bluetooth started");
}
 
void loop() {
  if (BTserial.available()){
    char data = readBluetoothInput();
    Serial.println(data);
  }
  
  if(Serial.available()){
    char data = Serial.read();
    sendTroughBluetooth(data);
  }

/*
  float waterLevel = readWaterLevel();
  if(waterLevel > WATER_LEVEL_TRIGGER){
    startLakePump();
  }*/
}

void startLakePump(){
  if(Serial.available() > 0){
    Serial.write(START_RIVER_PUMP);
  }
}

void sendTroughBluetooth(char c){
  BTserial.write(c);
}

char readBluetoothInput(){
    if (BTserial.available())
    {
        return BTserial.read();
    }
    return -1;
}

float readWaterLevel(){
  int val = analogRead(waterSensorPin);
  return (float)val;
}


float readPh(){
  int buf[10];
  for(int i=0;i<10;i++){
    buf[i] = analogRead(phSensor);
    //delay(30); // use for a bigger average
  }
  bSort(buf, 10);
  return calculateAveragePh(buf, 10);
}

float calculateAveragePh(int *buf, int l){
  unsigned long int avgValue = 0;
  for(int i=2;i<l-2;i++)
    avgValue += buf[i];
  float pHVol=(float)avgValue*5.0/1024/6;
  float phValue = -5.70 * pHVol + phCalibration;
  return phValue;
}

void bSort(int *buf, short l){
  int temp;
  for(int i=0;i<l-1;i++){
    for(int j=i+1;j<l;j++){
     if(buf[i]>buf[j]){
        temp=buf[i];
        buf[i]=buf[j];
        buf[j]=temp;
      }
    }
  }
}
