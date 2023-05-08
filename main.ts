input.onButtonPressed(Button.A, function () {
    izquierda = 1
})
input.onLogoEvent(TouchButtonEvent.LongPressed, function () {
    while (true) {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 255)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 255)
    }
})
input.onPinPressed(TouchPin.P2, function () {
    while (true) {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 255)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 255)
    }
})
radio.onReceivedString(function (receivedString) {
	
})
input.onButtonPressed(Button.B, function () {
    derecha = 1
})
input.onPinPressed(TouchPin.P1, function () {
    while (true) {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 255)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 255)
    }
})
let cronometrode = 0
let cornometroiz = 0
let izquierda = 0
let derecha = 0
let color = 0
let bucle = 0
let strip = neopixel.create(DigitalPin.P15, 4, NeoPixelMode.RGB)
radio.setGroup(47)
derecha = 0
izquierda = 0
let adelante = 0
let atras = 0
basic.forever(function () {
    if (izquierda == 1) {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 255)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 255)
        izquierda = 0
        cornometroiz = 20
        control.waitForEvent(cornometroiz, 0)
        maqueen.motorStop(maqueen.Motors.All)
    } else if (derecha == 1) {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, 255)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 255)
        derecha = 0
        cronometrode = 20
        control.waitForEvent(cronometrode, 0)
        maqueen.motorStop(maqueen.Motors.All)
    } else if (derecha == 0) {
    	
    } else if (izquierda == 0) {
    	
    } else {
    	
    }
    cornometroiz += -1
    cronometrode += -1
})
