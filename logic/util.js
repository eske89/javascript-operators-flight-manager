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
        for(let p of passengersNumber) {
            totalPassengers += p;
        }
        return totalPassengers
    }

    function checkInput(input){
        if (input == false || isNaN(input)) {
            throw new Error()
        }
    }

    function calculateTotalDistance(distances){
        let totalDistance = 0;
        for(let d of distances) {
            if (d > 0) {
                totalDistance += d;
            }
        }
        return totalDistance
    }

    function calculateBonusPoints(distanceBusiness, distanceEconomy, businessBonus, economyBonus){
        return calculateTotalDistance(distanceBusiness) * businessBonus/100 + calculateTotalDistance(distanceEconomy) * economyBonus/100
    }

    return {calculateTotalDistributedPassengers, calculateTotalNumberOfPassengers, checkInput, calculateTotalDistance, calculateBonusPoints}
}

module.exports = Util();
