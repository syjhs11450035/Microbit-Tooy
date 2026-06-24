namespace aibit {

    //% block="播放音調 %freq 持續 %ms ms"
    export function tone(freq: number, ms: number) {
        music.playTone(freq, ms)
    }

    //% block="提示音"
    export function beep() {
        music.playTone(988, 100)
    }

    //% block="音波掃描"
    export function sweep() {
        for (let f = 200; f < 1200; f += 50) {
            music.playTone(f, 20)
        }
    }
}