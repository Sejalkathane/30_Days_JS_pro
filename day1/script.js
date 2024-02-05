let clapelm = document.getElementById("clap_el");
let clapbut = document.getElementById("clap");

let hithatelm = document.getElementById("hithat_el");
let hithatbut = document.getElementById("hihat");

let kickelm = document.getElementById("kick_el");
let kickbut = document.getElementById("kick");

let boomelm = document.getElementById("boom_el");
let boombut = document.getElementById("boom");

let rideelm = document.getElementById("ride_el");
let ridebut = document.getElementById("ride");

let snareelm = document.getElementById("snare_el");
let snarebut = document.getElementById("snare");

let tomelm = document.getElementById("tom_el");
let tombut = document.getElementById("tom");

let tinkelm = document.getElementById("tink_el");
let tinkbut = document.getElementById("tink");

let openhatelm = document.getElementById("openhat_el");
let openhatbut = document.getElementById("openhat");

function clap_fun() {
  if (clapelm.paused || clapelm.ended) {
    // Play the audio
    clapelm.play();
  } else {
    clapelm.pause();
  }
}

document.addEventListener("keydown", function (e) {
  // Check if the pressed key is 'A' (case-insensitive)
  if (e.key.toUpperCase() === "A") {
    // Trigger the playAudio function
    clap_fun();
    clapbut.style.boxShadow = "2px 1px 20px 8px rgb(141, 230, 255)";
    setTimeout(function () {
      clapbut.style.boxShadow = "inset 2px 1px 10px 5px rgb(141, 230, 255)";
    }, 500);
  }
});

function hithat_fun() {
  if (hithatelm.paused || hithatelm.ended) {
    // Play the audio
    hithatelm.play();
  } else {
    // Pause the audio
    hithatelm.pause();
  }
}

document.addEventListener("keydown", function (e) {
  if (e.key.toUpperCase() === "S") {
    hithat_fun();
    hithatbut.style.boxShadow = "2px 1px 20px 8px rgb(141, 230, 255)";
    setTimeout(function () {
      hithatbut.style.boxShadow = "inset 2px 1px 10px 5px rgb(141, 230, 255)";
    }, 500);
  }
});
function kick_fun() {
  if (kickelm.paused || kickelm.ended) {
    // Play the audio
    kickelm.play();
  } else {
    // Pause the audio
    kickelm.pause();
  }
}

document.addEventListener("keydown", function (e) {
  if (e.key.toUpperCase() === "D") {
    kick_fun();
    hithatbut.style.boxShadow = "2px 1px 20px 8px rgb(141, 230, 255)";
    setTimeout(function () {
      hithatbut.style.boxShadow = "inset 2px 1px 10px 5px rgb(141, 230, 255)";
    }, 500);
  }
});

function open_fun() {
  if (openhatelm.paused || openhatelm.ended) {
    // Play the audio
    openhatelm.play();
  } else {
    // Pause the audio
    openhatelm.pause();
  }
}

document.addEventListener("keydown", function (e) {
  if (e.key.toUpperCase() === "F") {
    open_fun();
    openhatbut.style.boxShadow = "2px 1px 20px 8px rgb(141, 230, 255)";
    setTimeout(function () {
      openhatbut.style.boxShadow = "inset 2px 1px 10px 5px rgb(141, 230, 255)";
    }, 500);
  }
});

function boom_fun() {
  if (boomelm.paused || boomelm.ended) {
    // Play the audio
    boomelm.play();
  } else {
    // Pause the audio
    boomelm.pause();
  }
}

document.addEventListener("keydown", function (e) {
  if (e.key.toUpperCase() === "G") {
    boom_fun();
    boombut.style.boxShadow = "2px 1px 20px 8px rgb(141, 230, 255)";
    setTimeout(function () {
      boombut.style.boxShadow = "inset 2px 1px 10px 5px rgb(141, 230, 255)";
    }, 500);
  }
});

function ride_fun() {
  if (rideelm.paused || rideelm.ended) {
    // Play the audio
    rideelm.play();
  } else {
    // Pause the audio
    rideelm.pause();
  }
}

document.addEventListener("keydown", function (e) {
  if (e.key.toUpperCase() === "H") {
    ride_fun();
    ridebut.style.boxShadow = "2px 1px 20px 8px rgb(141, 230, 255)";
    setTimeout(function () {
      ridebut.style.boxShadow = "inset 2px 1px 10px 5px rgb(141, 230, 255)";
    }, 500);
  }
});

function snare_fun() {
  if (snareelm.paused || snareelm.ended) {
    // Play the audio
    snareelm.play();
  } else {
    // Pause the audio
    snareelm.pause();
  }
}

document.addEventListener("keydown", function (e) {
  if (e.key.toUpperCase() === "J") {
    snare_fun();
    snarebut.style.boxShadow = "2px 1px 20px 8px rgb(141, 230, 255)";
    setTimeout(function () {
      snarebut.style.boxShadow = "inset 2px 1px 10px 5px rgb(141, 230, 255)";
    }, 500);
  }
});

function tom_fun() {
  if (tomelm.paused || tomelm.ended) {
    // Play the audio
    tomelm.play();
  } else {
    // Pause the audio
    tomelm.pause();
  }
}

document.addEventListener("keydown", function (e) {
  if (e.key.toUpperCase() === "K") {
    tom_fun();
    tombut.style.boxShadow = "2px 1px 20px 8px rgb(141, 230, 255)";
    setTimeout(function () {
      tombut.style.boxShadow = "inset 2px 1px 10px 5px rgb(141, 230, 255)";
    }, 500);
  }
});

function tink_fun() {
  if (tinkelm.paused || tinkelm.ended) {
    // Play the audio
    tinkelm.play();
  } else {
    // Pause the audio
    tinkelm.pause();
  }
}

document.addEventListener("keydown", function (e) {
  if (e.key.toUpperCase() === "L") {
    tink_fun();
    tinkbut.style.boxShadow = "2px 1px 20px 8px rgb(141, 230, 255)";
    setTimeout(function () {
      tinkbut.style.boxShadow = "inset 2px 1px 10px 5px rgb(141, 230, 255)";
    }, 500);
  }
});
