input.onButtonPressed(Button.A, function () {
    led.unplot(posX, 0)
    posX = Math.max(1, posX)
    led.plot(posX, 0)
})
input.onButtonPressed(Button.B, function () {
    led.unplot(posX, 0)
    posX = Math.min(4, posX)
    led.plot(posX, 0)
})
let posX = 0
let direction = 1
posX = 2
led.plot(posX, 0)
basic.forever(function () {
    led.unplot(posX, 0)
    posX += direction
    led.plot(posX, 0)
    if (posX >= 4) {
        direction = -1
    } else if (posX <= 0) {
        direction = 1
    }
    basic.pause(200)
})
