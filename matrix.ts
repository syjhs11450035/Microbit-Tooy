namespace aibit {

    let fb: number[][] = []

    for (let x = 0; x < 8; x++) {
        fb[x] = []
        for (let y = 0; y < 8; y++) {
            fb[x][y] = 0
        }
    }

    //% block="set pixel x %x y %y color %c"
    export function set(x: number, y: number, c: number) {
        fb[x][y] = c
    }

    //% block="clear matrix"
    export function clear() {
        for (let x = 0; x < 8; x++)
            for (let y = 0; y < 8; y++)
                fb[x][y] = 0

        basic.clearScreen()
    }

    //% block="render matrix"
    export function show() {
        for (let x = 0; x < 5; x++) {
            for (let y = 0; y < 5; y++) {
                led.plotBrightness(x, y, fb[x][y])
            }
        }
    }
}