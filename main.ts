input.onButtonPressed(Button.A, function () {
    motor.MotorRun(motor.Motors.M1, motor.Dir.CW, 210)
    pins.digitalWritePin(DigitalPin.P0, 1)
})
input.onButtonPressed(Button.B, function () {
    motor.MotorRun(motor.Motors.M1, motor.Dir.CW, 0)
    pins.digitalWritePin(DigitalPin.P0, 0)
})
basic.forever(function () {
    pins.digitalWritePin(DigitalPin.P0, 1)
    basic.pause(200)
})
