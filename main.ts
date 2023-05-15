input.onPinPressed(TouchPin.P0, function () {
    atras = 1
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    adelante = 1
})
input.onButtonPressed(Button.A, function () {
    izquierda = 1
})
input.onButtonPressed(Button.AB, function () {
    parar = 1
})
radio.onReceivedString(function (receivedString) {
	
})
input.onButtonPressed(Button.B, function () {
    derecha = 1
})
let cronometrode = 0
let cornometroiz = 0
let parar = 0
let atras = 0
let adelante = 0
let izquierda = 0
let derecha = 0
let color = 0
let bucle = 0
let strip = neopixel.create(DigitalPin.P15, 4, NeoPixelMode.RGB)
radio.setGroup(47)
derecha = 0
izquierda = 0
adelante = 0
atras = 0
atras = 0
basic.forever(function () {
    if (izquierda == 1) {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 255)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 255)
        izquierda = 0
    } else if (derecha == 1) {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, 255)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 255)
        derecha = 0
    } else if (adelante == 0) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 255)
        adelante = 0
    } else if (atras == 0) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, 255)
        atras = 0
    } else if (false) {
        maqueen.motorStop(maqueen.Motors.All)
        atras = 0
    } else {
    	
    }
    cornometroiz += -1
    cronometrode += -1
})
