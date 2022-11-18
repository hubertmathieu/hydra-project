#!/usr/bin/env python3
import serial
import requests

url = "http://134.122.126.29/api/v1/thresholds"

if __name__ == '__main__':
	ser = serial.Serial('/dev/ttyACM0', 9600, timeout=1)
	ser.reset_input_buffer()
	while True:
		if ser.in_waiting > 0:
		    try:
		        line = ser.readline().decode('utf-8').rstrip()
		        if line == 'Envoi-moi les thresholds':
		            response = requests.get(url).text
		            ser.write(str(response).encode("utf-8"))
		    except:
		        print("")
