/**
* Печатает название соединение и
* список классов кораблей и их количества в соединении
*/
function printFleetUnitShipList() {
    let fleetUnit = pursuitLine();
    print(fleetUnit.toString());
}

function printFleetUnitMinSpeed() {
    let fleetUnit = pursuitLine();
    print(fleetUnit.getMinSpeedString());
}


/**
* Запросить у пользователя название типа (Victory Star Destroyer, к примеру)
* По введенному классу, вывести информацию (название, экипаж, скорость)
* Если такого класса нет, вывести соответствующее сообщение
*/
function printShipClassInfo() {
    let shipUnitChoose = prompt('выбери корабль', 'Victory Star Destroyer/Acclamator II Cruiser');
    let answer;
    switch(shipUnitChoose) {
        case 'Victory Star Destroyer':
            answer = vsd.toString();
            break;

        case 'Acclamator II Cruiser':
            answer = acclamator2.toString();
            break;
    }
    print(answer);
}
