/**
* Возвращает юнит (соединение) флота.
* У юнита флота имеет название (Линия преследования) и массива.
* В элементе массива есть класс корабля и количество в юните.
* У класса корабля есть название, скорость и экипаж.
*/
function pursuitLine() {
    // Массив для хранения классов кораблей и их количества
    let shipAndCountMap = new Map();
    shipAndCountMap.set(vsd, 2);
    shipAndCountMap.set(acclamator2, 6)

    // Соединение флота с именем и массивом кораблей.
    let pursuitLine = new FleetUnit("Линия преследования", shipAndCountMap, new Array());
    return pursuitLine;
}