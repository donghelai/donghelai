def 电机(M1: List[any], 正反: bool, 速度: number):
    pins.digital_write_pin(DigitalPin.P0, 0)