// =====================================
// AI BIT CORE (CLEAN SINGLE VERSION)
// =====================================

namespace aibit {

    // =====================================
    // 🟩 MATRIX (5x5 framebuffer)
// =====================================
    let fb: number[][] = []

    for (let x = 0; x < 5; x++) {
        fb[x] = []
        for (let y = 0; y < 5; y++) {
            fb[x][y] = 0
        }
    }

    //% block="設定像素 x %x y %y 亮度 %b"
    export function 設定像素(x: number, y: number, b: number) {
        fb[x][y] = b
        led.plotBrightness(x, y, b)
    }

    //% block="清除畫面"
    export function 清除畫面() {
        basic.clearScreen()
        for (let x = 0; x < 5; x++)
            for (let y = 0; y < 5; y++)
                fb[x][y] = 0
    }

    //% block="顯示畫面"
    export function 顯示畫面() {
        for (let x = 0; x < 5; x++)
            for (let y = 0; y < 5; y++)
                led.plotBrightness(x, y, fb[x][y])
    }

    // =====================================
    // 🔊 AUDIO
    // =====================================

    //% block="播放音調 %f Hz 持續 %t ms"
    export function 播放音調(f: number, t: number) {
        music.playTone(f, t)
    }

    //% block="嗶一聲"
    export function 嗶聲() {
        music.playTone(988, 100)
    }

    // =====================================
    // 📡 NET (UART ready for ESP32)
    // =====================================

    //% block="傳送資料 %data"
    export function 傳送資料(data: string) {
        serial.writeLine(data)
    }

    //% block="讀取資料"
    export function 讀取資料(): string {
        return serial.readString()
    }

    // =====================================
    // ⚡ FLASH MEMORY
    // =====================================

    let flashMemory: string = ""

    //% block="寫入快閃 %data"
    export function 寫入快閃(data: string) {
        flashMemory = data
    }

    //% block="讀取快閃"
    export function 讀取快閃(): string {
        return flashMemory
    }

    //% block="清除快閃"
    export function 清除快閃() {
        flashMemory = ""
    }

    // =====================================
    // 🤖 EXECUTOR (SCRIPT VM)
    // =====================================

    // JSON:
    // [{"op":"text","v":"hi"},{"op":"wait","v":500},{"op":"tone","f":440,"t":200}]

    //% block="執行腳本 %script"
    export function 執行腳本(script: string) {

        let s = JSON.parse(script)

        for (let i = 0; i < s.length; i++) {

            let op = s[i].op

            if (op == "text") {
                basic.showString(s[i].v)
            }

            else if (op == "wait") {
                basic.pause(s[i].v)
            }

            else if (op == "pixel") {
                led.plot(s[i].x, s[i].y)
            }

            else if (op == "tone") {
                music.playTone(s[i].f, s[i].t)
            }

            else if (op == "clear") {
                basic.clearScreen()
            }
        }
    }

    // =====================================
    // ⚡ FAST FLASH MODE
    // =====================================

    //% block="快閃執行 %data"
    export function 快閃(data: string) {
        flashMemory = data
        執行腳本(flashMemory)
    }

    // =====================================
    // 🚀 INIT
    // =====================================

    //% block="啟動 AI Bit"
    export function 啟動() {
        basic.showIcon(IconNames.Happy)
    }
}