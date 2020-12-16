from network import Bluetooth
import time
import ubinascii
import binascii
import pycom


WRITE_CHAR_UUID = 65505
READ_CHAR_UUID = 65505
SERVICE_UUID = 65504

def closeConnection():
    try:
        print("closing bluetooth")
        close()
        print("bluetooth closed")
    except:
        print("bluetooth is ready")


closeConnection()

    #pycom.heartbeat(False)
    #bluetooth = Bluetooth()
    #bluetooth.start_scan(-1)
    #bluetooth.init()

connection = None
char = None

def initConnection(address):
    pycom.rgbled(0xffff00)
    pycom.heartbeat(False)
    bluetooth = Bluetooth()
    bluetooth.start_scan(-1)
    bluetooth.init()
    while True:
        print("starting bluetooth")
        global connection
        devices = bluetooth.get_advertisements()
        try:
            if devices is not None and len(devices) > 0:
                for device in devices:
                    uuid = ubinascii.hexlify(device.mac) 
                    if(str(uuid) == address):
                        print("foud the arduino")
                        
                        connection = bluetooth.connect(device.mac)
                        print(device)
                
                        bluetooth.stop_scan()
                        global char
                        char = getBleChar()
                        pycom.rgbled(0x00ff00)
                        return device
        except:
            print("arduino refused connection trying again")
            pycom.heartbeat(True)
            closeConnection()
            continue
        time.sleep(0.05)
    pycom.rgbled(0xff0000)
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


def sendData(data):
    global char
    if connection.isconnected() and data is not None:
        char.write(data)
        #char.write(str.encode(data))


def close():
    print("disconnecting ...")
    connection.disconnect()
    bluetooth.disconnect_client()
    bluetooth.deinit()
    print("disconnected")

def isConnected():
    return connection.isconnected()


# 110000010000000000000000000011000010110010000000000000000000010111100000000

#\x00/\x00\x00da\x00\x00\x08\x06b\x00\x00\x0b\xb8


#01011000 00000000 00001000 00000110

#reverse
#00000110 00001000 00000000 01011000


# bluetooth sent
# 10111000 00001011 00000000 00000000 01100010 | 01100100000000000000000000000000 01111010 00000110000010000000000001011000 00000000
#                                    98                                          122                                     0
#server received
# 0 88 0 8 6 
# 122 0 0 0 100 
# 98 0 0 11 184


# 00000000 00000000 00000100 00000110 00000000 00000000 00000000 01100100 00000000 00000000 00001011 10111000
# 0        0        8        6        0        0        0        100      0        0        11       184