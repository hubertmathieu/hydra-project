#include <SoftwareSerial.h>
#include <Servo.h>
#define FILTER_PUMP_RELAY_PIN 4
#define SPRAYER_PUMP_RELAY_PIN 5
#define SPRAYER1_SWITCH_PIN 6
#define SPRAYER2_SWITCH_PIN 7
#define SPRAYER3_SWITCH_PIN 8
#define SERVO1_PIN A0
#define SERVO2_PIN A1
#define SERVO3_PIN A2
#define SERVO4_PIN A3

Servo servo1;
Servo servo2;
Servo servo3;
Servo servo4;

SoftwareSerial mySerial(2, 3);

boolean fertilizer1Available = true;
boolean fertilizer1Added = false;
boolean fertilizer2Available = false;
boolean fertilizer2Added = false;
boolean fertilizer3Available = false;
boolean fertilizer3Added = false;
long fertilizerTimerStart = 0;
long phDownTimerStart = 0;
String input;

void setup() {
  Serial.begin(9600);
  mySerial.begin(9600);

  pinMode(FILTER_PUMP_RELAY_PIN, OUTPUT);
  pinMode(SPRAYER_PUMP_RELAY_PIN, OUTPUT);
  pinMode(SPRAYER1_SWITCH_PIN, OUTPUT);
  pinMode(SPRAYER2_SWITCH_PIN, OUTPUT);
  pinMode(SPRAYER3_SWITCH_PIN, OUTPUT);
  pinMode(SERVO1_PIN, OUTPUT);
  pinMode(SERVO2_PIN, OUTPUT);
  pinMode(SERVO3_PIN, OUTPUT);
  pinMode(SERVO4_PIN, OUTPUT);

  servo1.attach(SERVO1_PIN);
  servo1.write(90);
  servo2.attach(SERVO2_PIN);
  servo2.write(90);
  servo3.attach(SERVO3_PIN);
  servo3.write(90);
  servo4.attach(SERVO4_PIN);
  servo4.write(90);
}

void loop() {
  while (mySerial.available() > 0) {
    input = mySerial.readStringUntil('\n');
    input.trim();
    Serial.println("Input: " + input);

    if (input.equals("Filter pump on") ) {
      digitalWrite(FILTER_PUMP_RELAY_PIN, LOW);
      fertilizer1Available = true;
    }

    if (input.equals("Filter pump off")) {
      digitalWrite(FILTER_PUMP_RELAY_PIN, HIGH);
      if (fertilizer1Available) {
        addFertilizer1();
      }
      if (fertilizer2Available) {
        addFertilizer2();
      }
      if (fertilizer3Available) {
        addFertilizer3();
      }
    }

    if (input.equals("Sprayer1 on")) {
      digitalWrite(SPRAYER_PUMP_RELAY_PIN, LOW);
      digitalWrite(SPRAYER1_SWITCH_PIN, LOW);
    }

    if (input.equals("Sprayer1 off")) {
      digitalWrite(SPRAYER_PUMP_RELAY_PIN, HIGH);
      digitalWrite(SPRAYER1_SWITCH_PIN, HIGH);
    }

    if (input.equals("Sprayer2 on")) {
      digitalWrite(SPRAYER_PUMP_RELAY_PIN, LOW);
      digitalWrite(SPRAYER2_SWITCH_PIN, LOW);
    }

    if (input.equals("Sprayer2 off")) {
      digitalWrite(SPRAYER_PUMP_RELAY_PIN, HIGH);
      digitalWrite(SPRAYER2_SWITCH_PIN, HIGH);
    }

    if (input.equals("Sprayer3 on")) {
      digitalWrite(SPRAYER_PUMP_RELAY_PIN, LOW);
      digitalWrite(SPRAYER3_SWITCH_PIN, LOW);
    }

    if (input.equals("Sprayer3 off")) {
      digitalWrite(SPRAYER_PUMP_RELAY_PIN, HIGH);
      digitalWrite(SPRAYER3_SWITCH_PIN, HIGH);
    }

    if (input.equals("Add phDown") ) {
      addPhDown();
    }

    if (input.equals("Close phDown") ) {
      servo4.write(90);
    }
  }
  delay(500);
}

void addFertilizer1() {
  int interval = 82000;
  if (millis() - fertilizerTimerStart >= interval ) {
    Serial.println( millis() - fertilizerTimerStart );
    fertilizerTimerStart = millis();
    if (fertilizer1Added) {
      servo1.write(90);
      fertilizer1Available = false;
      fertilizer1Added = false;
      fertilizer2Available = true;
    }
  } else {
    servo1.write(0);
    fertilizer1Added = true;
  }
}

void addFertilizer2() {
  int interval = 82000;
  if (millis() - fertilizerTimerStart >= interval ) {
    fertilizerTimerStart = millis();
    if (fertilizer2Added) {
      servo2.write(90);
      fertilizer2Available = false;
      fertilizer2Added = false;
      fertilizer3Available = true;
    }
  } else {
    servo2.write(0);
    fertilizer2Added = true;
  }
}

void addFertilizer3() {
  int interval = 82000;
  if (millis() - fertilizerTimerStart >= interval ) {
    fertilizerTimerStart = millis();
    if (fertilizer3Added) {
      servo3.write(90);
      fertilizer3Available = false;
      fertilizer3Added = false;
    }
  } else {
    servo3.write(0);
    fertilizer3Added = true;
  }
}

void addPhDown() {
  int interval = 500;
  if ( millis() - phDownTimerStart > interval ) {
    phDownTimerStart = millis();
    servo4.write(0);
  } else {
    servo4.write(90);
  }
}