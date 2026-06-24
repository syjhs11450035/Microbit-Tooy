//% color=#ff6600 icon="\uf0ad"
namespace aibit {

    // ===== MATRIX =====

    //% block="顯示像素 x %x y %y 亮度 %b"
    export function 顯示像素(x: number, y: number, b: number) {
        pixel(x, y, b)
    }

    //% block="清除畫面"
    export function 清除畫面() {
        clear()
    }

    // ===== AUDIO =====

    //% block="播放音調 %f ms %t"
    export function 播放音調(f: number, t: number) {
        tone(f, t)
    }

    //% block="發出嗶聲"
    export function 嗶聲() {
        beep()
    }

    // ===== FLASH =====

    //% block="寫入快閃 %d"
    export function 寫入快閃(d: string) {
        flash.write(d)
    }

    //% block="執行快閃"
    export function 執行快閃() {
        flash.executeFlash()
    }

    // ===== NET =====

    //% block="傳送資料 %d"
    export function 傳送資料(d: string) {
        send(d)
    }
}