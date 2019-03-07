// tests go here; this will not be compiled when this package is used as a library
// Defining variables
let timerIsRunning = 0;
let startTime = 0;
let stopTime = 0;

//% weight=100 color=#b6312f icon="f3c7" block="MakerspaceHu"
//% groups=['Infra gate']
namespace makerhu {
    /**
     * Flashes built-in LEDs when input is 1, stops when input is 0.
     * @param value  eg:0
     */
    //% block="noise on screen |%value"  value.min=0 value.max=1 group="Infra gate"
    export function noise(value: number): void {
        let dimension = 4;
        if (value == 1) {
            led.toggle(Math.randomRange(0, dimension), Math.randomRange(0, dimension));
            basic.pause(5);
        }
    }

    //% block="timerTrigger" group="Infra gate"
    export function timerTrigger(): number {
        if (timerIsRunning == 0) {
            timerIsRunning = 1;
            startTime = input.runningTime();
            return 0;
        } else {
            timerIsRunning = 0;
            stopTime = input.runningTime();
            basic.clearScreen();
            return stopTime - startTime;
        }
    }
    /**
    * Converts milliseconds into seconds
    */
    //% block="lapTime |%value | precision | %precision" group="Infra gate"  precision.min=0 precision.max=3
    export function lapTimeSec(value: number, precision: number): number {
        return Math.roundWithPrecision(value / 1000, precision);
    }

}