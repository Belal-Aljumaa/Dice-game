let accountStatus = 100;

function delay(time) {
	return new Promise(resolve => setTimeout(resolve, time));
};

function run() {
	const zufall = Math.round(Math.random() * 5 + 1);
	const zufall2 = Math.round(Math.random() * 5 + 1);
	const zufall3 = Math.round(Math.random() * 5 + 1);

	if (zufall == zufall2 && zufall2 == zufall3){
		const music = new Audio('sounds/mixkit-arcade-score-interface-217.wav');
		music.play();
		music.loop = false;
		music.volume = 0.5;
		music.playbackRate = 1;
		music.pause;
		accountStatus = accountStatus + 5;
		document.querySelector("#accountStatus").classList = "accountStatus win";
      delay(900).then(() => document.querySelector("#accountStatus").classList = "");

	} else if (accountStatus <= 0 ){
		const music2 = new Audio('sounds/mixkit-fairytale-game-over-1945.wav');
		music2.play();
		music2.volume = 0.5;
		music2.loop = false;
		music2.playbackRate = 1;
		music2.pause;
		document.querySelector("#accountStatus").classList = "accountStatus lose";
      delay(900).then(() => document.querySelector("#accountStatus").classList = "");
	} else {
		const music1 = new Audio('sounds/mixkit-arcade-retro-game-over-213.wav');
		music1.play();
		music1.volume = 0.5;
		music1.loop = false;
		music1.playbackRate = 2;
		music1.pause;
		accountStatus = accountStatus - 1;
		document.querySelector("#accountStatus").classList = "accountStatus lose";
      delay(900).then(() => document.querySelector("#accountStatus").classList = "");
	};


	if (zufall == 1) {
		document.querySelector(".first").classList = "fa-regular first fa-dice-one";
	} else if (zufall == 2) {
		document.querySelector(".first").classList = "fa-regular first fa-dice-two";
	} else if (zufall == 3) {
		document.querySelector(".first").classList = "fa-regular first fa-dice-three";
	} else if (zufall == 4) {
		document.querySelector(".first").classList = "fa-regular first fa-dice-four";
	} else if (zufall == 5) {
		document.querySelector(".first").classList = "fa-regular first fa-dice-five";
	} else if (zufall == 6) {
		document.querySelector(".first").classList = "fa-regular first fa-dice-six";
	}

	if (zufall2 == 1) {
		document.querySelector(".second").classList = "fa-regular second fa-dice-one";
	} else if (zufall2 == 2) {
		document.querySelector(".second").classList = "fa-regular second fa-dice-two";
	} else if (zufall2 == 3) {
		document.querySelector(".second").classList = "fa-regular second fa-dice-three";
	} else if (zufall2 == 4) {
		document.querySelector(".second").classList = "fa-regular second fa-dice-four";
	} else if (zufall2 == 5) {
		document.querySelector(".second").classList = "fa-regular second fa-dice-five";
	} else if (zufall2 == 6) {
		document.querySelector(".second").classList = "fa-regular second fa-dice-six";
	}

	if (zufall3 == 1) {
		document.querySelector(".third").classList = "fa-regular third fa-dice-one";
	} else if (zufall3 == 2) {
		document.querySelector(".third").classList = "fa-regular third fa-dice-two";
	} else if (zufall3 == 3) {
		document.querySelector(".third").classList = "fa-regular third fa-dice-three";
	} else if (zufall3 == 4) {
		document.querySelector(".third").classList = "fa-regular third fa-dice-four";
	} else if (zufall3 == 5) {
		document.querySelector(".third").classList = "fa-regular third fa-dice-five";
	} else if (zufall3 == 6) {
		document.querySelector(".third").classList = "fa-regular third fa-dice-six";
	}

	document.querySelector("#accountStatus").innerHTML = accountStatus + " €";
};

function revert() {
	accountStatus = 100;
	document.querySelector("#accountStatus").innerHTML = accountStatus + " €";
};

function delay(time) {
	return new Promise(resolve => setTimeout(resolve, time));
};