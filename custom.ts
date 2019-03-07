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
    //% block precision.min=0 precision.max=3
    export function lapTimeSec(value: number, precision: number): number {
        return Math.roundWithPrecision(value / 1000, precision);
    }

    /**
     * Flashes built-in LEDs when input is 1, stops when input is 0.
     * @param value  eg:0
     */
    //% block advanced=true
    export function noise(value: number): number {
        return value <= 1 ? value : noise(value - 1) + noise(value - 2);
    }
}
