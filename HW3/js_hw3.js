/**
* Основная функция, которая вызывается из html по нажатию кнопки (событие onclick)
* 
* Вначале вызывается функция initiateRaid(), которая возвращает наполненный персонажами рейд (смотри ее описание).
* Потом последовательно вызываются функции, которые находят персонажей с нужной ролью и выводят информацию об их действии в бою (смотри их описание).
*/
function startBattle() {
	let raid = initiateRaid();
	stage(raid,"tank","started tanking main Boss and adds");
	interceptAdditionalBosses(raid);
	startControllingAdds(raid);
	startHealing(raid);
	startDamageDealing(raid);
}

function stage(raid,role,messageEnding) {
	for (let i = 0; i < raid.length; i++) {
		let currentCharacter = raid[i];
		if (currentCharacter.roles.includes(role)) {
			log(currentCharacter.name + messageEnding);
		}
	}
    log("")
}

/**
* Находим танка в рейде и отправляем его сагривать босса и адов.
*/
function makeMainAggro(raid) {
	for (let i = 0; i < raid.length; i++) {
		let currentCharacter = raid[i];
		if (currentCharacter.roles.includes("tank")) {
			log(currentCharacter.name + " started tanking main Boss and adds");
		}
	}
    log("")
}

/**
* Находим офф танков в рейде и отправляем их перехватывать второстепенных мини боссов.
*/
function interceptAdditionalBosses(raid) {
	for (let i = 0; i < raid.length; i++) {
		let currentCharacter = raid[i];
		if (currentCharacter.roles.includes("off tank")) {
			log(currentCharacter.name + " intercepted additional bosses");
		}
	}
    log("")
}

/**
* Находим контроллеров отправляем их контролить (корневать, ослеплять, оглушать...) столько аддов, сколько возможно.
*/
function startControllingAdds(raid) {
	for (let i = 0; i < raid.length; i++) {
		let currentCharacter = raid[i];
		if (currentCharacter.roles.includes("controll")) {
			log(currentCharacter.name + " controlled a few adds");
		}
	}
    log("")
}


// Это сообщение замени на for и прочую логику по аналогии с makeMainAggro(raid) и interceptAdditionalBosses(raid)
	// Для всех контроллеров должно выводиться сообщение: имя controlled a few adds.


/**
* Находим хилеров отправляем их лечить рейд.
*/
function startHealing(raid) {
	for (let i = 0; i < raid.length; i++) {
		let currentCharacter = raid[i];
		if (currentCharacter.roles.includes("healer")) {
			log(currentCharacter.name + " started healling the tanks and the raid");
		}
	}
} // Это сообщение замени на for и прочую логику по аналогии с makeMainAggro(raid) и interceptAdditionalBosses(raid)
	// Для всех контроллеров должно выводиться сообщение: имя started healling the tanks and the raid.


/**
* Находим дамагеров отправляем бить по своим ассистам.
*/
function startDamageDealing(raid) {
	for (let i = 0; i < raid.length; i++) {
		let currentCharacter = raid[i];
		if (currentCharacter.roles.includes("damage dealer")) {
			log(currentCharacter.name + " started damaging to the assist target");
		}
	}
} // Это сообщение замени на for и прочую логику по аналогии с makeMainAggro(raid) и interceptAdditionalBosses(raid)
	// Для всех контроллеров должно выводиться сообщение: имя started damaging to the assist target.


/**
* Эта функция находит на html-странице textarea по id ("output") и добавляет туда сообщение, которое ей переданно в аргументах.
*
* "\n" - означает начало новой строки
*/
function log(message) {
	let textArea = document.getElementById("output");
	textArea.append(message + "\n");
}

/**
* Создается массив и в него добавляются объекты (персонажи).
*
* У каждого персонажа есть имя, уровень и массив ролей, которые персонаж может выполнять.
*/
function initiateRaid() {
	let raid = new Array();
	raid[0] = {
		name: "Endemeon",
		level: "150",
		roles: [
			"tank",
			"healer",
			"support"
		]
	};
	raid[1] = {
		name: "Kon Said",
		level: "150",
		roles: [
			"controll",
			"damage dealer",
			"support"
		]
	};
	raid[2] = {
		name: "Nefrit Kaspar",
		level: "100",
		roles: [
			"damage dealer",
			"off tank"
		]
	};
	raid[3] = {
		name: "Sefirot",
		level: "90",
		roles: [
			"damage dealer",
			"off tank"
		]
	};
	raid[4] = {
		name: "Zoi Said",
		level: "90",
		roles: [
			"damage dealer",
			"controll"
		]
	};
	raid[5] = {
		name: "Jedait",
		level: "90",
		roles: [
			"controll",
			"support"
		]
	};
	raid[6] = {
		name: "Kain",
		level: "80",
		roles: [
			"damage dealer",
			"off tank"
		]
	};
	raid[7] = {
		name: "Selena",
		level: "80",
		roles: [
			"healer",
			"support"
		]
	};
	raid[8] = {
		name: "Serenity",
		level: "60",
		roles: [
			"healer",
			"damage dealer"
		]
	};
	raid[9] = {
    		name: "Princess",
    		level: "20",
    		roles: [
    			"healer",
    			"damage dealer"
    		]
    	};
	raid[10] = {
		name: "Almaz",
		level: "85",
		roles: [
			"damage dealer",
			"off tank"
		]
	};
	return raid;
}
