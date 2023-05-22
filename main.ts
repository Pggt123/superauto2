radio.onReceivedString(function (receivedString) {
    if (receivedString == "izquierda") {
        izquierda = 1
    } else if (receivedString == "derecha") {
        derecha = 1
    } else if (receivedString == "adelante") {
        adelante = 1
    } else if (receivedString == "atras") {
        atras = 1
    } else if (receivedString == "parar") {
        parar = 1
    } else {
    	
    }
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
parar = 0
basic.forever(function () {
    if (input.isGesture(Gesture.TiltLeft)) {
        izquierda = 1
    } else if (input.isGesture(Gesture.TiltRight)) {
        derecha = 1
    } else if (input.isGesture(Gesture.LogoUp)) {
        adelante = 1
    } else if (input.isGesture(Gesture.LogoDown)) {
        atras = 1
    } else if (input.isGesture(Gesture.Shake)) {
        parar = 1
    } else {
    	
    }
    if (maqueen.Ultrasonic(PingUnit.Centimeters) < 20) {
        adelante = 0
        maqueen.motorStop(maqueen.Motors.All)
    }
    if (izquierda == 1) {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 255)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 255)
        izquierda = 0
    } else if (derecha == 1) {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, 255)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 255)
        derecha = 0
    } else if (adelante == 1) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 255)
        adelante = 0
    } else if (atras == 1) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, 255)
        atras = 0
    } else if (parar == 1) {
        maqueen.motorStop(maqueen.Motors.All)
        atras = 0
    } else {
    	
    }
    cornometroiz += -1
    cronometrode += -1
    basic.showNumber(input.lightLevel())
})
