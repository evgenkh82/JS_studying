// fleet unit prototype
function FleetUnit(name, ships, fleetUnits) {
    this.name = name;
    this.ships = ships;
    this.fleetUnit = fleetUnits;
}
FleetUnit.prototype.toString = function() {
    let outPutFleet = this.name + "\n" + "------------- \n";
    for (let currentShip of this.ships) {
        let lineToPrint = currentShip.class.name + " " + currentShip.count + "\n";
        outPutFleet = outPutFleet + lineToPrint;
   }
    return outPutFleet;
}
FleetUnit.prototype.getMinSpeed = function() {
    let minShipSpeed = this.ships[0].class.speed;
    for (let currentShip of this.ships) {
       if (minShipSpeed > currentShip.class.speed) {
            minShipSpeed = currentShip.class.speed
       }
    }
    return minShipSpeed;
}
FleetUnit.prototype.getMinSpeedString = function() {
    return `Минимальная скорость флота равняется ${this.getMinSpeed()} НГСС`
}