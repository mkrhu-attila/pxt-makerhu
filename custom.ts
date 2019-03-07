/**
 * Custom blocks
 */
//% weight=100 color=#b6312f icon="" block="MakerspaceHu"
namespace makerhu {
    /**
     * Converts milliseconds into seconds
     * @param value - Time in milliseconds eg:100
     * @param precision - Number of decimal places eg:2
     */
    //% block="lapTimeInSeconds" precision.min=0 precision.max=3
    export function lapTimeSec(value: number, precision: number): number {
        return Math.roundWithPrecision(value / 1000, precision);
    }

    /**
     * Flashes built-in LEDs when input is 1, stops when input is 0.
     * @param value  eg:0
     */
    //% block="noise on screen %value"
    export function noise(value: number): void {
        let dimension = 4
        if (value = 1) {
            led.toggle(Math.randomRange(0, dimension), Math.randomRange(0, dimension))
            basic.pause(5)
        } else { }
    }

    /**
     * Flashes built-in LEDs when input is 1, stops when input is 0.
     */
    //% block="noise on LED matrix |%status"
    export function noisde(status: number): number {
        return Math.sqrt(status * status);
    }

}
