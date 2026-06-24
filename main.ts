// =============================
// Microbit-Tooy Extension
// 單一乾淨版本（已去除 Duplicate function）
// =============================

namespace Tooy {

    // =============================
    // 📦 8x8 顯示緩衝區
    // =============================
    let matrix: number[] = []

    function initMatrix() {
        if (matrix.length == 0) {
            for (let i = 0; i < 64; i++) {
                matrix.push(0)
            }
        }
    }

    // =============================
    // 🎨 8x8 彩色編輯核心
    // =============================

    /**
     * 設定某個像素
     * x: 0-7, y: 0-7
     */
    //% block="設定像素 x $x y $y 顏色 $color"
    export function setPixel(x: number, y: number, color: number) {
        initMatrix()
        if (x < 0 || x > 7 || y < 0 || y > 7) return
        let index = y * 8 + x
        matrix[index] = color
    }

    /**
     * 清除畫面
     */
    //% block="清除8x8畫面"
    export function clear() {
        initMatrix()
        for (let i = 0; i < 64; i++) {
            matrix[i] = 0
        }
        basic.clearScreen()
    }

    /**
     * 顯示8x8矩陣（轉 micro:bit LED）
     */
    //% block="顯示8x8畫面"
    export function show() {
        initMatrix()
        for (let y = 0; y < 5; y++) {
            for (let x = 0; x < 5; x++) {
                let i = y * 8 + x
                if (matrix[i] > 0) {
                    led.plot(x, y)
                } else {
                    led.unplot(x, y)
                }
            }
        }
    }

    // =============================
    // 📡 nRF24L01（簡化封裝）
    // =============================

    let rfData = ""

    /**
     * 設定無線資料
     */
    //% block="設定無線資料 $text"
    export function rfSet(text: string) {
        rfData = text
    }

    /**
     * 取得無線資料
     */
    //% block="讀取無線資料"
    export function rfGet(): string {
        return rfData
    }

    // =============================
    // 🔊 蜂鳴器（V2）
    // =============================

    /**
     * 播放音效（被動蜂鳴器）
     */
    //% block="蜂鳴器播放頻率 $freq 持續 $ms ms"
    export function beep(freq: number, ms: number) {
        music.pitch(freq, ms)
    }

    // =============================
    // 🎤 麥克風
    // =============================

    /**
     * 讀取音量
     */
    //% block="音量值"
    export function soundLevel(): number {
        return input.soundLevel()
    }

    // =============================
    // ⚙️ 動作系統（Action API）
    // =============================

    let actions: { [key: string]: Function } = {}

    /**
     * 註冊動作
     */
    //% block="註冊動作 $name"
    export function registerAction(name: string, handler: Function) {
        actions[name] = handler
    }

    /**
     * 執行動作
     */
    //% block="執行動作 $name"
    export function runAction(name: string) {
        if (actions[name]) {
            actions[name]()
        }
    }

    // =============================
    // 📥 變數系統（Key-Value）
    // =============================

    let vars: { [key: string]: number } = {}

    /**
     * 設定變數
     */
    //% block="設定變數 $key = $value"
    export function setVar(key: string, value: number) {
        vars[key] = value
    }

    /**
     * 讀取變數
     */
    //% block="讀取變數 $key"
    export function getVar(key: string): number {
        return vars[key] || 0
    }
}