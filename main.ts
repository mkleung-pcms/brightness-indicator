input.onButtonPressed(Button.A, function () {
    status = 3 - status
    basic.clearScreen()
    led.setBrightness(128)
    basic.showNumber(input.lightLevel())
    status = 3 - status
})
input.onButtonPressed(Button.B, function () {
    status = 1 - status
})
let status = 0
status = 0
basic.forever(function () {
    if (status == 0) {
        led.setBrightness(128)
        led.plotBarGraph(
        input.lightLevel(),
        255
        )
    } else if (status == 1) {
        led.setBrightness(255 - input.lightLevel())
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
    }
})
