function Util() {
    function calculateTotalDistributedPassengers(distributedPassengers) {
        let { vipPassengersWithBusinessSeats,
            vipPassengersWithEconomySeats,
            regularPassengersWithBusinessSeats,
            regularPassengersWithEconomySeats } = distributedPassengers;
        
        return vipPassengersWithBusinessSeats +
            vipPassengersWithEconomySeats +
            regularPassengersWithBusinessSeats +
            regularPassengersWithEconomySeats
    }

function calculateTotalNumberOfPassengers(passengersNumber){
    let totalPassengers = 0;
    for(let i = 0; i < passengersNumber.length; i++) {
        totalPassengers += passengersNumber[i];
    }
    return totalPassengers
}

    return {calculateTotalDistributedPassengers, calculateTotalNumberOfPassengers}
}

module.exports = Util();
