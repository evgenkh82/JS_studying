
function startBattle() {
	let raid = initiateRaid();
	stage(raid,"tank","started tanking main Boss and adds");
	stage(raid,"off tank","intercepted additional bosses");
	stage(raid,"controll","controlled a few adds");
	stage(raid,"healer","started healling the tanks and the raid");
	stage(raid,"damage dealer","started damaging to the assist target");

}

function stage(raid,role,messageEnding) {
	for (let i = 0; i < raid.length; i++) {
		let currentCharacter = raid[i];
		if (currentCharacter.roles.includes(role)) {
			log(currentCharacter.name + "" + messageEnding);
		}
	}
}


function log(message) {
	let textArea = document.getElementById("output");
	textArea.append(message + "\n");
}


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
