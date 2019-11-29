// fleet unit prototype
function FleetUnit(name, shipAndCountMap, fleetUnits) {
    this.name = name;
    this.shipAndCountMap = shipAndCountMap;
    this.fleetUnit = fleetUnits;
}
FleetUnit.prototype.toString = function() {
    let outPutFleet = this.name + "\n" + "------------- \n";
    for (let [ship, size] of this.shipAndCountMap.entries()) {
        let lineToPrint = ship.name + " " + size + "\n";
        outPutFleet = outPutFleet + lineToPrint;
   }
    return outPutFleet;
}
FleetUnit.prototype.getMinSpeed = function() {
    let minShipSpeed = this.shipAndCountMap.keys().next().value.speed;
    for (let currentShip of this.shipAndCountMap.keys()) {
       if (minShipSpeed > currentShip.speed) {
            minShipSpeed = currentShip.speed
       }
    }
    return minShipSpeed;
}
FleetUnit.prototype.getMinSpeedString = function() {
    return `Минимальная скорость флота равняется ${this.getMinSpeed()} НГСС`
}