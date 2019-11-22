/** Описание классов кораблей */
const vsd = {
    name: "Victory Star Destroyer",
    speed: 60,
    crew: 6107
}
const acclamator2 = {
    name: "Acclamator II Cruiser",
    speed: 40,
    crew: 2014
}

/**
* Печатает название соединение и
* список классов кораблей и их количества в соединении
*/
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

/**
* При нажатии вывести минимальную скорость во флоте
* Перебор флота можно сделать по аналогии с printFleetUnitShipList()
*/
function printFleetUnitMinSpeed() {
    let fleetUnit = getFleetUnit();
    let MinShipSpeed = fleetUnit.ships[0].class.speed;
    for (let i=0; i < fleetUnit.ships.length; i++) {
        let currentShip = fleetUnit.ships[i];
        if (MinShipSpeed > currentShip.class.speed) {
            MinShipSpeed = currentShip.class.speed
            }
    }
    answer = `Минимальная скорость флота равняется ${MinShipSpeed} НГСС`;
    print(answer);
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
                answer = `name: ${vsd.name}\nspeed: ${vsd.speed}\ncrew: ${vsd.crew}`;
                break;

            case 'Acclamator II Cruiser':
                answer = "name: " + acclamator2.name + "\nspeed: " + acclamator2.speed + "\ncrew: " + acclamator2.crew;
                break;
        }
        print(answer);
    }

/**
* Этот метод просто печатает на страницу html,
* в текстовую область <textarea id="output" ...
*/
function print(line) {
    let textArea = document.getElementById("output");
    textArea.append(line + "\n");
}

/**
* Возвращает юнит (соединение) флота.
* У юнита флота имеет название (Линия преследования) и массива.
* В элементе массива есть класс корабля и количество в юните.
* У класса корабля есть название, скорость и экипаж.
*/
function getFleetUnit() {
    // Массив для хранения классов кораблей и их количества
    let ships = new Array();
    ships[0] = {
        class: vsd,
        count: 2
    }
    ships[1] = {
        class: acclamator2,
        count: 6
    }

    // Соединение флота с именем и массивом кораблей.
    let fleet = {
        name: "Линия преследования",
        ships: ships
    }
    return fleet;
}
