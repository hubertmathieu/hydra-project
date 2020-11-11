import time
from network import LTE
import socket
import machine
import ssl

#socket doc
#https://docs.python.org/3/library/socket.html

lte = LTE()
lte.init


def attachLte():
    global lte
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
    attachLte()
    connectLte()
    lte.lte_callback(LTE.EVENT_COVERAGE_LOSS, cb_handler)
    s = socket.socket()
    s = ssl.wrap_socket(s)
    s.connect(socket.getaddrinfo('www.google.com', 443)[0][-1])
    s.send(b"GET / HTTP/1.0\r\n\r\n")
    print(s.recv(4096))
    s.close()
    print(socket.getaddrinfo('pycom.io', 80))

def sendSocket():
    #todo send socket data

def close():
    lte.deinit()