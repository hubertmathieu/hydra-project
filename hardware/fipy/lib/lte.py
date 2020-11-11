import time
from network import LTE
import socket
import machine
import ssl

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
    print("sending to lte " + data)

def cb_handler(arg):
    print("CB: LTE Coverage lost")
    print("CB: sleep")
    print("CB: deinit")
    lte.deinit()
    print("CB: reset")
    machine.reset()


def initLte():
    print("starting lte")
    attachLte()
    connectLte()
    #lte.lte_callback(LTE.EVENT_COVERAGE_LOSS, cb_handler)
    global s
    s = socket.socket()
    s.connect((address, port))
    s.sendall("fipy connected")
    print('Received', readData())

def sendSocket(data):
    s.send(data)

def close():
    s.close()
    lte.deinit()

def readData():
    #s = ssl.wrap_socket(s)
    return s.recv(1024)