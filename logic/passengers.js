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

   

   return {checkFlightCapacity}
}

module.exports = Passengers();

