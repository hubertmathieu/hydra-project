from network import Bluetooth
import time
import ubinascii
import binascii

WRITE_CHAR_UUID = 65505
READ_CHAR_UUID = 65505
SERVICE_UUID = 65504

bluetooth = Bluetooth()
bluetooth.start_scan(-1)
bluetooth.init()

connection = None
running = True
char = None

def initConnection():
    while True:
        global connection
        devices = bluetooth.get_advertisements()
        if devices is not None and len(devices) > 0:
            for device in devices:
                uuid = ubinascii.hexlify(device.mac) 
                if(str(uuid) == "b\'1893d7152018\'"):
                    print("foud the arduino")
                    connection = bluetooth.connect(device.mac)
                    print(device)
                    bluetooth.stop_scan()
                    return device
        time.sleep(0.05)
    return None

def getBleChar():
    global connection
    while connection.isconnected():
        services = connection.services()
        for service in services:
            time.sleep(0.050)
            chars = service.characteristics()
            if service.uuid() != SERVICE_UUID : continue 
            for char in chars:
                if (char.properties() & Bluetooth.PROP_READ and char.uuid() == WRITE_CHAR_UUID):
                    print("found char")
                    return char

def sendDataToLte(data):
    print("sending to lte " + data)

def sendDataToArduino(strData):
    global char
    if connection.isconnected():
        char.write(str.encode(strData))

def charCallBack(chr):
    if (chr.properties() & Bluetooth.PROP_READ):
        print('callback char {} value = {}'.format(chr.uuid(), chr.value()))
        sendDataToLte(chr.value().decode('utf-8'))
        sendDataToArduino("you sent: " + chr.value().decode('utf-8'))
        


arduino = initConnection()
char = getBleChar()
char.callback(trigger=Bluetooth.CHAR_NOTIFY_EVENT, handler=charCallBack)

while running:
    print('char {} value = {}'.format(char.uuid(), char.read()))
    time.sleep(1)

connection.disconnect()
bluetooth.disconnect_client()
bluetooth.deinit()