basic.forever(function () {
    if (input.lightLevel() > 200) {
        basic.clearScreen()
        music.playSoundEffect(music.createSoundEffect(
        WaveShape.Sine,
        5000,
        5000,
        255,
        255,
        4190,
        SoundExpressionEffect.None,
        InterpolationCurve.Linear
        ), SoundExpressionPlayMode.InBackground)
        basic.showString("Buenos Días ")
    } else {
        basic.showLeds(`
            # # # # #
            . . . # .
            . . # . .
            . # . . .
            # # # # #
            `)
        basic.pause(200)
        basic.showLeds(`
            . . . . .
            . # # # #
            . . . # .
            . . # . .
            . # # # #
            `)
        basic.pause(200)
    }
})
