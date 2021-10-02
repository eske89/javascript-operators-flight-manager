function Flights() {
    function calculateNumberOfFlights(passengers, capacity){
        if (passengers <= 0) {
            throw new Error("The number of passengers must be a positive integer value")
        }
        if (capacity <= 0) {
            throw new Error("The number of capacity must be a positive integer value")
        }
        return Math.ceil(passengers / capacity)
    }

    function checkAircraftRevision(distanceLimit, distancesArray) {
            let totalDistance = 0;
            for(let i = 0; i < distancesArray.length; i++) {
                totalDistance += distancesArray[i];
            }

            if (totalDistance <= distanceLimit/2){
                return "The revision needs to be done within the next 3 months"
            }
            else if (totalDistance <= distanceLimit*0.75){
                return "The revision needs to be done within the next 2 months"
            }
            else if (totalDistance <= distanceLimit){
                return "The revision needs to be done within the next month"
            }
            else {
                throw new Error()
            }
    }

    return {calculateNumberOfFlights, checkAircraftRevision};
}

module.exports = Flights();
