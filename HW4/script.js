function printFleetUnitShipList() {
    let fleetUnit = getFleetUnit();
    print(fleetUnit.name);
    print("-------------");
    for (let i=0; i < fleetUnit.ships.length; i++) {
        let currentShip = fleetUnit.ships[i];
        let lineToPrint = currentShip.class.name + " " + currentShip.count;
        print(lineToPrint);
    }
}

function printFleetUnitMinSpeed() {
    
}

function print(line) {
    let textArea = document.getElementById("output");
    textArea.append(line + "\n");
}

function getFleetUnit() {
    let vsd = {
        name: "Victory Star Destroyer",
        speed: 60,
        crew: 6107
    }
    let acclamator2 = {
        name: "Acclamator II Cruiser",
        speed: 40,
        crew: 2014
    }
    let ships = new Array();
    ships[0] = {
        class: vsd,
        count: 2
    }
    ships[1] = {
        class: acclamator2,
        count: 6
    }
    let fleet = {
        name: "Линия преследования",
        ships: ships
    }
    return fleet;
}