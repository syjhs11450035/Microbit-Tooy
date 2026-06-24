namespace aibit {

    // simple tone
    //% block="tone %freq for %ms ms"
    export function tone(freq: number, ms: number) {
        music.playTone(freq, ms)
    }

    // beep
    //% block="beep"
    export function beep() {
        music.playTone(880, 100)
    }

    // sine-like sweep (fake synth)
    //% block="sweep audio"
    export function sweep() {
        for (let f = 200; f < 1000; f += 50) {
            music.playTone(f, 20)
        }
    }
}