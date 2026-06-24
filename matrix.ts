namespace aibit {

    let fb: number[][] = []

    for (let x = 0; x < 5; x++) {
        fb[x] = []
        for (let y = 0; y < 5; y++) {
            fb[x][y] = 0
        }
    }

    //% block="設定像素 x %x y %y 亮度 %b"
    export function pixel(x: number, y: number, b: number) {
        fb[x][y] = b
        led.plotBrightness(x, y, b)
    }

    //% block="清除螢幕"
    export function clear() {
        basic.clearScreen()
    }

    //% block="顯示矩陣"
    export function show() {
        for (let x = 0; x < 5; x++)
            for (let y = 0; y < 5; y++)
                led.plotBrightness(x, y, fb[x][y])
    }
}