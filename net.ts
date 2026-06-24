namespace aibit {

    let buffer = ""

    //% block="send net data %data"
    export function send(data: string) {
        serial.writeString(data + "\n")
    }

    //% block="read net data"
    export function read(): string {
        return serial.readString()
    }

    //% block="on net receive"
    export function onReceive(handler: (msg: string) => void) {
        serial.onDataReceived("\n", function () {
            handler(serial.readString())
        })
    }
}