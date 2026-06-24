namespace aibit {

    //% block="執行腳本 %data"
    export function run(data: string) {

        let script = JSON.parse(data)

        for (let i = 0; i < script.length; i++) {

            let op = script[i].op

            if (op == "text") {
                basic.showString(script[i].v)
            }

            else if (op == "wait") {
                basic.pause(script[i].v)
            }

            else if (op == "pixel") {
                led.plot(script[i].x, script[i].y)
            }

            else if (op == "tone") {
                music.playTone(script[i].f, script[i].t)
            }
        }
    }
}