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

    //% block="magnitude of 3d vector at x %x and y %y and z %z" advanced=true
    //% inlineInputMode=inline
    export function mag3d(x: number, y: number, z: number): number {
        return Math.sqrt(x * x + y * y + z * z);
    }
}
