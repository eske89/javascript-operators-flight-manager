function Prices() {
    function calculateFinalPrice(basePrice, variationPassengerType, variationFlightType){
        basePrice = parseFloat(basePrice);
        variationPassengerType = parseFloat(variationPassengerType);
        variationFlightType = parseFloat(variationFlightType);
        
        //  100 - 5% * 100 - 3% * (100 - 5% * 100) = 92.15
        let passengerPrice = basePrice + basePrice * (variationPassengerType / 100);
        let flightPrice = passengerPrice + passengerPrice * (variationFlightType / 100);
        return flightPrice.toFixed(2);
    }

    function calculateDefaultFinalPrice(basePrice, passengerType, flightType){
        let passengerReductions = {
            regular: -5,
            vip: 5
        };
        let flightReductions = {
            economy: -3,
            business: 10
        };

        return calculateFinalPrice(
            parseFloat(basePrice),
            passengerReductions[passengerType.toLowerCase()],
            flightReductions[flightType.toLowerCase()]
        );
    }

    function calculateTotalFinalPrice(numberOfSeats, passengerType, flightType, basePrice){
        return calculateDefaultFinalPrice(basePrice, passengerType, flightType) * numberOfSeats
    }

    return {calculateFinalPrice, calculateDefaultFinalPrice, calculateTotalFinalPrice};
}

module.exports = Prices();