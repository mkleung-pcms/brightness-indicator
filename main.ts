input.onButtonPressed(Button.A, function () {
    status = 1
    basic.showNumber(input.lightLevel())
    status = 0
})
input.onButtonPressed(Button.B, function () {
    status = 1
    if (input.lightLevel() < 10) {
        led.setBrightness(10)
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
        basic.pause(1000)
    } else {
        led.setBrightness(input.lightLevel())
    }
    status = 0
})
let status = 0
status = 0
basic.forever(function () {
    if (status == 0) {
        led.setBrightness(32 + input.lightLevel() * 0.875)
        basic.clearScreen()
        for (let index = 0; index <= Math.round(input.lightLevel() * 0.09375 + 1); index++) {
            led.plot(Math.trunc((index - 1) / 5), (index - 1) % 5)
        }
    }
})
