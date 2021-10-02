function Passengers() {
   function checkFlightCapacity(capacity, passengersNumber){
    let totalPassengers = 0;
    for(let i = 0; i < passengersNumber.length; i++) {
        totalPassengers += passengersNumber[i];
    }
    if (totalPassengers < capacity){
        return totalPassengers
    }
    else {
        throw new Error()
    }
   }

   function distributeAllSeatsToAllPassengers(vipPassengers, regularPassengers, numberOfFlights, businessSeatsPerFlight, economySeatsPerFlight){
       let vipPassengersWithBusinessSeats = 0;
       let vipPassengersWithEconomySeats = 0;
       let regularPassengersWithBusinessSeats = 0;
       let regularPassengersWithEconomySeats = 0;

       let totalBusinessSeats = businessSeatsPerFlight * numberOfFlights;
       let totalEconomySeats = economySeatsPerFlight * numberOfFlights;

       if (vipPassengers <= totalBusinessSeats) {
            vipPassengersWithBusinessSeats = vipPassengers;
            vipPassengersWithEconomySeats = 0;
            totalBusinessSeats = totalBusinessSeats - vipPassengersWithBusinessSeats;
       } else {
            vipPassengersWithBusinessSeats = totalBusinessSeats;
            vipPassengersWithEconomySeats = vipPassengers - vipPassengersWithBusinessSeats;
            totalBusinessSeats = 0;
            totalEconomySeats = totalEconomySeats - vipPassengersWithEconomySeats;
       }
       if  (regularPassengers <= totalBusinessSeats) {
           regularPassengersWithBusinessSeats = regularPassengers;
           regularPassengersWithEconomySeats = 0;
       } else {
           regularPassengersWithBusinessSeats = totalBusinessSeats;
           let passengersThatShouldSitOnEconomySeats = regularPassengers - regularPassengersWithBusinessSeats;
           if (passengersThatShouldSitOnEconomySeats <= totalEconomySeats) {
               regularPassengersWithEconomySeats = passengersThatShouldSitOnEconomySeats;
           } else {
               regularPassengersWithEconomySeats = totalEconomySeats;
           }

       }

       return {
           vipPassengersWithBusinessSeats,
           vipPassengersWithEconomySeats,
           regularPassengersWithBusinessSeats,
           regularPassengersWithEconomySeats
       }
   }

   return {checkFlightCapacity, distributeAllSeatsToAllPassengers}
}

module.exports = Passengers();

