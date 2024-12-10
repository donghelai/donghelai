function 电机M1_反转_速度为 (_100: number) {
    pins.digitalWritePin(DigitalPin.P0, 1)
    pins.analogWritePin(AnalogPin.P1, _100)
}
function 电机M1_正转_速度为 (_100: number) {
    pins.digitalWritePin(DigitalPin.P0, 0)
    pins.analogWritePin(AnalogPin.P1, _100)
}
