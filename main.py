def on_received_string(receivedString):
    global izquierda, derecha, adelante, atras, parar
    if receivedString == "izquierda":
        izquierda = 1
    elif receivedString == "derecha":
        derecha = 1
    elif receivedString == "adelante":
        adelante = 1
    elif receivedString == "atras":
        atras = 1
    elif receivedString == "parar":
        parar = 1
    else:
        pass
radio.on_received_string(on_received_string)

cronometrode = 0
cornometroiz = 0
parar = 0
atras = 0
adelante = 0
izquierda = 0
derecha = 0
color = 0
bucle = 0
strip = neopixel.create(DigitalPin.P15, 4, NeoPixelMode.RGB)
radio.set_group(47)
derecha = 0
izquierda = 0
adelante = 0
atras = 0
parar = 0

def on_forever():
    global adelante, izquierda, derecha, atras, cornometroiz, cronometrode
    if maqueen.ultrasonic(PingUnit.CENTIMETERS) < 20:
        adelante = 0
        maqueen.motor_stop(maqueen.Motors.ALL)
    if izquierda == 1:
        maqueen.motor_run(maqueen.Motors.M1, maqueen.Dir.CW, 255)
        maqueen.motor_run(maqueen.Motors.M2, maqueen.Dir.CCW, 255)
        izquierda = 0
    elif derecha == 1:
        maqueen.motor_run(maqueen.Motors.M1, maqueen.Dir.CCW, 255)
        maqueen.motor_run(maqueen.Motors.M2, maqueen.Dir.CW, 255)
        derecha = 0
    elif adelante == 1:
        maqueen.motor_run(maqueen.Motors.ALL, maqueen.Dir.CW, 255)
        adelante = 0
    elif atras == 1:
        maqueen.motor_run(maqueen.Motors.ALL, maqueen.Dir.CCW, 255)
        atras = 0
    elif parar == 1:
        maqueen.motor_stop(maqueen.Motors.ALL)
        atras = 0
    else:
        pass
    cornometroiz += -1
    cronometrode += -1
    basic.show_number(input.light_level())
basic.forever(on_forever)
