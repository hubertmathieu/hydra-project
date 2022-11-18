#!/usr/bin/env python3
import requests
import serial

thresholdsUrl = "http://134.122.126.29/api/v1/thresholds"
configUrl = "http://134.122.126.29/api/v1/config"

if __name__ == '__main__':
    ser = serial.Serial('COM4', 9600, timeout=1)
    ser.reset_input_buffer()
    while True:
        if ser.in_waiting > 0:
            try:
                line = ser.readline().decode('utf-8').rstrip()
                if line == 'Envoi-moi les thresholds':
                    response = requests.get(thresholdsUrl).text
                    ser.write(str(response))
                elif line.startswith('Data'):
                    print(line[4:])
                    requests.post(configUrl, json=line[4:])
            except:
                print("")