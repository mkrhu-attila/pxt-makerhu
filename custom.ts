/**
 * Custom blocks
 */
//% weight=100 color=#b6312f icon="" block="MakerspaceHu"
//% groups=['Infra gate', 'others']
namespace makerhu {
    /**
     * Converts milliseconds into seconds
     * @param value - Time in milliseconds eg:100
     * @param precision - Number of decimal places eg:2
     */
    //% block="lapTimeInSeconds" precision.min=0 precision.max=3 group="Infra gate"
    export function lapTimeSec(value: number, precision: number): number {
        return Math.roundWithPrecision(value / 1000, precision);
    }

    /**
     * Flashes built-in LEDs when input is 1, stops when input is 0.
     * @param value  eg:0
     */
    //% block="noise on screen |%value"  value.min=0 value.max=1
    export function noise(value: number): void {
        let dimension = 4
        if (value == 1) {
            led.toggle(Math.randomRange(0, dimension), Math.randomRange(0, dimension))
            basic.pause(5)
        } else { }
    }

}
