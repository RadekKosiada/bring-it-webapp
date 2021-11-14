function formatPrice(numberToRound: number, decimalPlaces: number ) {
    const priceToString = numberToRound.toString();
    return Number.parseFloat(priceToString).toFixed(decimalPlaces);
}

export default formatPrice;