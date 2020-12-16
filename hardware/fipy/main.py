from network import Bluetooth
import time
import lte
import mble
import pycom

def closeConnections():
    try:
        print("closing lte")
        lte.close()
        print("lte closed")
    except:
        print("lte is ready")



def charCallBack(chr):
    if (chr.properties() & Bluetooth.PROP_READ):
        if (not lte.isConnected()):
            print("lost connection to server")
            closeConnections()
            lte.initLte()
        print('callback char {} value = {}'.format(chr.uuid(), chr.value().decode('utf-8')))
        lte.sendDataToLte(chr.value())
        #https://nodejs.org/api/buffer.html#buffer_buf_readint32le_offset



closeConnections()

lte.initLte()


mble.initConnection("b\'1893d7152018\'")

mble.setCallBack(charCallBack)
running = True

while running: 
    pycom.heartbeat(False)
    if (not lte.isConnected()):
        pycom.rgbled(0xff0000)
        pycom.heartbeat(True)
        print("lost connection to server")
        closeConnections()
        lte.initLte()
        pycom.rgbled(0x00ff00)

    if (not mble.isConnected()):
        pycom.rgbled(0xff0000)
        pycom.heartbeat(True)
        print('lost connection to arduino')
        mble.closeConnection()
        mble.initConnection("b\'1893d7152018\'")
        pycom.rgbled(0x00ff00)

    data = lte.readData()
    if(len(data) < 5):
         continue
    mble.sendData(data)
    print('sending data')
    time.sleep(1)




mble.close()
lte.close()

print("done !")




#11010000/00000111/01111011/00000010
#11010000000001110111101100000010
#00000010011110110000011111010000