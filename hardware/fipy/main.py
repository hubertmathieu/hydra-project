from network import Bluetooth
import time
import lte
import mble

# soracom https://soracom.zendesk.com/hc/en-us/articles/218427317-What-is-an-APN-setting-and-how-do-you-set-it-up-
# udp python https://wiki.python.org/moin/UdpCommunication
# fipy manual
# https://www.signalbooster.com/pages/what-are-4g-lte-frequencies-bands-of-telus-rogers-bell



def charCallBack(chr):
    if (chr.properties() & Bluetooth.PROP_READ):
        print('callback char {} value = {}'.format(chr.uuid(), chr.value().decode('utf-8')))
        #lte.sendDataToLte(chr.value())
        mble.sendData(chr.value())
        mble.close()


lte.initLte()

#mble.initConnection("b\'1893d7152018\'")

#mble.setCallBack(charCallBack)
running = True

ctime =0
while running and ctime < 5:
    print(".")
    time.sleep(1)
    ctime += 1


#mble.close()
lte.close()

print("done !")