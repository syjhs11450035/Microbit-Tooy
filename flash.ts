namespace aibit {

    let flashBuffer: string = ""

    //% block="寫入快閃 %data"
    export function write(data: string) {
        flashBuffer = data
    }

    //% block="讀取快閃"
    export function read(): string {
        return flashBuffer
    }

    //% block="執行快閃腳本"
    export function executeFlash() {
        let script = JSON.parse(flashBuffer)
        aibit.run(JSON.stringify(script))
    }

    //% block="清除快閃"
    export function clear() {
        flashBuffer = ""
    }
}