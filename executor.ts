namespace aibit {

    //% block="run script %data"
    export function run(data: string) {

        let script = JSON.parse(data)

        for (let i = 0; i < script.length; i++) {

            let op = script[i].op

            if (op == "text") {
                basic.showString(script[i].v)
            }

            if (op == "wait") {
                basic.pause(script[i].v)
            }

            if (op == "pixel") {
                led.plot(script[i].x, script[i].y)
            }

            if (op == "tone") {
                music.playTone(script[i].f, script[i].t)
            }
        }
    }
}