/** Создаем объекты для классов краблей */
function Ship(name, className, speed, crew) {
    this.name = name;
    this.className = className;
    this.speed = speed;
    this.crew = crew;
}
Ship.prototype.toString = function toString() {
        return `name: ${this.name}\nclass: ${this.className}\nspeed: ${this.speed}\ncrew: ${this.crew}`;
    };
const vsd = new Ship ("Victory Star Destroyer", "Battle Cruiser", 60, 6107);
const acclamator2 = new Ship ("Acclamator II Cruiser", "Cruiser", 40, 2014);

/** создаем объекты для юнитов флота */
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
/**
* Печатает название соединение и
* список классов кораблей и их количества в соединении
*/
function printFleetUnitShipList() {
    let fleetUnit = getFleetUnit();
    print(fleetUnit.toString());
}

/**
* При нажатии вывести минимальную скорость во флоте
* Перебор флота можно сделать по аналогии с printFleetUnitShipList()
*/
function printFleetUnitMinSpeed() {
    let fleetUnit = getFleetUnit();
    let MinShipSpeed = fleetUnit.ships[0].class.speed;
    for (let currentShip of fleetUnit.ships) {
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
                answer = vsd.toString();
                break;

            case 'Acclamator II Cruiser':
                answer = acclamator2.toString();
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
    let pursuitLine = new FleetUnit("Линия преследования", ships, new Array());
    return pursuitLine;
}
