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
char = None

def initConnection(address):
    while True:
        global connection
        devices = bluetooth.get_advertisements()
        if devices is not None and len(devices) > 0:
            for device in devices:
                uuid = ubinascii.hexlify(device.mac) 
                if(str(uuid) == address):
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

def setCallBack(func):
    char.callback(trigger=Bluetooth.CHAR_NOTIFY_EVENT, handler=func)


def sendData(strData):
    global char
    if connection.isconnected():
        char.write(str.encode(strData))


def close():
    connection.disconnect()
    bluetooth.disconnect_client()
    bluetooth.deinit()

char = getBleChar()