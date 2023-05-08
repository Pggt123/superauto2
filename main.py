def on_logo_pressed():
    pass
input.on_logo_event(TouchButtonEvent.PRESSED, on_logo_pressed)

def on_button_pressed_a():
    while True:
        maqueen.motor_run(maqueen.Motors.M1, maqueen.Dir.CW, 255)
        maqueen.motor_run(maqueen.Motors.M2, maqueen.Dir.CCW, 255)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_logo_long_pressed():
    while True:
        maqueen.motor_run(maqueen.Motors.M1, maqueen.Dir.CW, 255)
        maqueen.motor_run(maqueen.Motors.M2, maqueen.Dir.CCW, 255)
input.on_logo_event(TouchButtonEvent.LONG_PRESSED, on_logo_long_pressed)

def on_pin_pressed_p2():
    while True:
        maqueen.motor_run(maqueen.Motors.M1, maqueen.Dir.CW, 255)
        maqueen.motor_run(maqueen.Motors.M2, maqueen.Dir.CCW, 255)
input.on_pin_pressed(TouchPin.P2, on_pin_pressed_p2)

def on_received_string(receivedString):
    if receivedString == "izquierda":
        pass
    elif receivedString == "derecha":
        pass
    elif receivedString == "adelante":
        pass
    elif receivedString == "atras":
        pass
    elif receivedString == "parar":
        pass
    else:
        pass
radio.on_received_string(on_received_string)

def on_button_pressed_b():
    while True:
        maqueen.motor_run(maqueen.Motors.M1, maqueen.Dir.CCW, 255)
        maqueen.motor_run(maqueen.Motors.M2, maqueen.Dir.CW, 255)
input.on_button_pressed(Button.B, on_button_pressed_b)

def on_pin_pressed_p1():
    while True:
        maqueen.motor_run(maqueen.Motors.M1, maqueen.Dir.CW, 255)
        maqueen.motor_run(maqueen.Motors.M2, maqueen.Dir.CCW, 255)
input.on_pin_pressed(TouchPin.P1, on_pin_pressed_p1)

color = 0
bucle = 0
strip = neopixel.create(DigitalPin.P15, 4, NeoPixelMode.RGB)
radio.set_group(47)