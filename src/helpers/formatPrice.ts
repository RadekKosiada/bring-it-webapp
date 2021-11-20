/**
 * Add exponential Notation and creates a string
 * Changes the given string into the number, with the decimal point moved to the right by two
 * Rounds the given number
 * Adds again Exponential Notation and thus changes the number into a string 
 * Changes the string into the result number with decimal point moved back to the left by two and thus gives final result
 * @param numberToRound 
 * @param decimalPlaces 
 * @returns 
 */
 function formatPrice(numberToRound: number, decimalPlaces: number): number {

    return Number(Math.round(Number(numberToRound + "e+" + decimalPlaces)) + "e-" + decimalPlaces); 

}

export default formatPrice;