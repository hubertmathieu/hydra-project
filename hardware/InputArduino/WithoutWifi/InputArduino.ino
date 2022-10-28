#include <SoftwareSerial.h>
#include <Adafruit_Sensor.h>
#include <DHT.h>
#include <DHT_U.h>
#define DHT11_PIN 8
#define SECOND_DHT11_PIN 9
#define THIRD_DHT11_PIN 10
#define DHTTYPE DHT11
#define WATER_SENSOR_PIN A1
#define WATER_SENSOR_POWER_PIN 7
#define WATER_SENSOR2_PIN A2
#define WATER_SENSOR2_POWER_PIN 4
#define PH_SENSOR A0

DHT dht1(DHT11_PIN, DHTTYPE);
DHT dht2(SECOND_DHT11_PIN, DHTTYPE);
DHT dht3(THIRD_DHT11_PIN, DHTTYPE );

SoftwareSerial mySerial(2, 3);

long receiveTimerStart = 0;

// Données de l'API
float humidityLowerTreshold1 = 85;
float humidityUpperTreshold1 = 95;
float humidityLowerTreshold2 = 85;
float humidityUpperTreshold2 = 95;
float humidityLowerTreshold3 = 85;
float humidityUpperTreshold3 = 95;
float waterLevelLowerTreshold = 70;
float waterLevelUpperTreshold = 550;
float phTreshold = 6.5;

// Données des capteurs
float phCalibration = 21.20;
float phValue;
float temperature1;
float temperature2;
float temperature3;
float humidity1;
float humidity2;
float humidity3;
float waterLevel1;
float waterLevel2;

void setup() {
  Serial.begin(9600);
  mySerial.begin(9600);

  dht1.begin();
  dht2.begin();
  dht3.begin();

  pinMode(WATER_SENSOR_POWER_PIN, OUTPUT);
  digitalWrite(WATER_SENSOR_POWER_PIN, LOW);
  pinMode(WATER_SENSOR2_POWER_PIN, OUTPUT);
  digitalWrite(WATER_SENSOR2_POWER_PIN, LOW);

  delay(150);
}

void loop() {
  temperature1 = dht1.readTemperature();
  temperature2 = dht2.readTemperature();
  temperature3 = dht3.readTemperature();
  humidity1 = dht1.readHumidity();
  humidity2 = dht2.readHumidity();
  humidity3 = dht3.readHumidity();
  waterLevel1 = readWaterLevel();
  waterLevel2 = readSecondWaterLevel();
  phValue = readPh();

  if (waterLevel1 > waterLevelUpperTreshold) {
    mySerial.println("Filter pump off");
  }
  if (waterLevel2 < waterLevelLowerTreshold) {
    mySerial.println("Filter pump on");
  }
  if (humidity1 < humidityLowerTreshold1) {
    mySerial.println("Sprayer1 on");
  }
  if (humidity1 > humidityUpperTreshold1) {
    mySerial.println("Sprayer1 off");
  }
  if (humidity2 < humidityLowerTreshold2) {
    mySerial.println("Sprayer2 on");
  }
  if (humidity2 > humidityUpperTreshold2) {
    mySerial.println("Sprayer2 off");
  }
  if (humidity3 < humidityLowerTreshold3) {
    mySerial.println("Sprayer3 on");
  }
  if (humidity3 > humidityUpperTreshold3) {
    mySerial.println("Sprayer3 off");
  }
  if (phValue > phTreshold) {
    mySerial.println("Add phDown");
  } else {
    mySerial.println("Close phDown");
  }

  delay(500);
}

float readWaterLevel() {
  digitalWrite(WATER_SENSOR_POWER_PIN, HIGH);
  delay(10);
  float waterLevel = analogRead(WATER_SENSOR_PIN);
  digitalWrite(WATER_SENSOR_POWER_PIN, LOW);
  return waterLevel;
}

float readSecondWaterLevel() {
  digitalWrite(WATER_SENSOR2_POWER_PIN, HIGH);
  delay(10);
  float waterLevel = analogRead(WATER_SENSOR2_PIN);
  digitalWrite(WATER_SENSOR2_PIN, LOW);
  return waterLevel;
}

float readPh() {
  int buf[10];
  for (int i = 0; i < 10; i++) {
    buf[i] = analogRead(PH_SENSOR);
    //delay(30); // use for a bigger average
  }
  bSort(buf, 10);
  return calculateAveragePh(buf, 10);
}

float calculateAveragePh(int *buf, int l) {
  unsigned long int avgValue = 0;
  for (int i = 2; i < l - 2; i++)
    avgValue += buf[i];
  float pHVol = (float)avgValue * 5.0 / 1024 / 6;
  float phValue = -5.70 * pHVol + phCalibration;
  return phValue;
}

void bSort(int *buf, short l) {
  int temp;
  for (int i = 0; i < l - 1; i++) {
    for (int j = i + 1; j < l; j++) {
      if (buf[i] > buf[j]) {
        temp = buf[i];
        buf[i] = buf[j];
        buf[j] = temp;
      }
    }
  }
}