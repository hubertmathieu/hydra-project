from network import Bluetooth
import time
import lte
import mble

def closeConnections():
    try:
        lte.close()
        mble.close()
    except:
        print("lte and bluetooth ready for init")

def charCallBack(chr):
    if (chr.properties() & Bluetooth.PROP_READ):
        print('callback char {} value = {}'.format(chr.uuid(), chr.value().decode('utf-8')))
        lte.sendDataToLte(chr.value())
        mble.sendData(lte.readData())#https://nodejs.org/api/buffer.html#buffer_buf_readint32le_offset



closeConnections()

lte.initLte()

mble.initConnection("b\'1893d7152018\'")

mble.setCallBack(charCallBack)
running = True

while running: 
    if (not lte.isConnected()):
        print("lost connection to server")
        lte.close()
        lte.initLte()
    
    if (not mble.isConnected()):
        print('lost connection to arduino')
        mble.close()
        mble.initConnection("b\'1893d7152018\'")

    print('sending data')
    time.sleep(1)
    print(lte.readData())
    mble.sendData(lte.readData())



mble.close()
lte.close()

print("done !")




#11010000/00000111/01111011/00000010
#11010000000001110111101100000010
#00000010011110110000011111010000