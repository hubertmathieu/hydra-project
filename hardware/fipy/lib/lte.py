import time
from network import LTE
import socket
import machine
import ssl
import pycom

#socket doc
#https://docs.python.org/3/library/socket.html

address = "165.227.32.127"
port = 9000

lte = None
s = None


def attachLte():
    global lte
    lte = LTE()
    lte.init()
    lte.attach(band=12, apn="soracom.io")
    while not lte.isattached():
        time.sleep(0.25)
        print('.',end='')
    print("attached!")

def connectLte():
    global lte
    lte.connect()
    print("connecting [##",end='')
    while not lte.isconnected():
        time.sleep(0.25)
        print('#',end='')
    print("] connected!")

def sendDataToLte(data):
    #if(data.len)
    s.send(data)
    print("sending to hydra server " + str(data))

def cb_handler(arg):
    print("CB: LTE Coverage lost")
    print("CB: sleep")
    print("CB: deinit")
    lte.deinit()
    print("CB: reset")
    machine.reset()


def initLte():
    pycom.rgbled(0x0000ff)
    print("starting lte")
    attachLte()
    connectLte()
    #lte.lte_callback(LTE.EVENT_COVERAGE_LOSS, cb_handler)
    global s
    s = socket.socket()
    #test if still blocking on recv
    s.connect((address, port))
    s.setblocking(0)
    pycom.rgbled(0x00ff00)
    #s.sendall("fipy connected")
    #print('Received', readData())

def sendSocket(data):
    s.send(data)

def close():
    s.close()
    lte.deinit()

def readData():
    return s.recv(1024)

def isConnected():
    return lte.isconnected()