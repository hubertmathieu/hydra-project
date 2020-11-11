from network import Bluetooth
import time
import lte
import bluetooth

# soracom https://soracom.zendesk.com/hc/en-us/articles/218427317-What-is-an-APN-setting-and-how-do-you-set-it-up-
# udp python https://wiki.python.org/moin/UdpCommunication
# fipy manual
# https://www.signalbooster.com/pages/what-are-4g-lte-frequencies-bands-of-telus-rogers-bell



def charCallBack(chr):
    if (chr.properties() & Bluetooth.PROP_READ):
        print('callback char {} value = {}'.format(chr.uuid(), chr.value()))
        lte.sendDataToLte(chr.value().decode('utf-8'))
        bluetooth.sendData("you sent: " + chr.value().decode('utf-8'))


bluetooth.initConnection("b\'1893d7152018\'")
bluetooth.setCallBack(charCallBack)
running = True

while running:
    bluetooth.sendData("connected to fipy")
    time.sleep(1)


bluetooth.close()
lte.close()