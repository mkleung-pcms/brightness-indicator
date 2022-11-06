input.onButtonPressed(Button.A, function () {
    status = 3 - status
    basic.showNumber(input.lightLevel())
    status = 3 - status
})
input.onButtonPressed(Button.B, function () {
    status = 1 - status
})
let status = 0
status = 0
basic.forever(function () {
    led.setBrightness(32 + input.lightLevel() * 0.875)
    if (status == 0) {
        basic.clearScreen()
        for (let index = 0; index <= Math.round(input.lightLevel() * 0.09375 + 1); index++) {
            led.plot(Math.trunc((index - 1) / 5), (index - 1) % 5)
        }
    } else if (status == 1) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
    }
})
