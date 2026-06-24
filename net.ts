namespace aibit {

    //% block="發送資料 %data"
    export function send(data: string) {
        serial.writeLine(data)
    }

    //% block="讀取資料"
    export function read(): string {
        return serial.readString()
    }

    //% block="收到資料時"
    export function onReceive(handler: (msg: string) => void) {
        serial.onDataReceived("\n", function () {
            handler(serial.readString())
        })
    }
}