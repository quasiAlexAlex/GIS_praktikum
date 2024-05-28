//-------------------------------------------------------------------------------------Speichern5.1
function speichern51() {
    var slider = document.getElementById("range51").value;
        var daten = {
            slider: slider
        };
    localStorage.setItem('formDaten51', JSON.stringify(daten));
}

function laden51() {
    var gespeichert = localStorage.getItem('formDaten51');
    var daten = JSON.parse(gespeichert);
        document.getElementById("range51").value = daten.slider
    zeigeScore51();
}


function zeigeScore51() {
    var slider = document.getElementById("range51");
    var output = document.getElementById("score51");
        output.textContent = slider.value;
            speichern51()
}

document.getElementById("range51").addEventListener("input", zeigeScore51,);
laden51();
//-------------------------------------------------------------------------------------Speichern5.2
function speichern52() {
    var slider = document.getElementById("range52").value;
        var daten = {
            slider: slider
        };
    localStorage.setItem('formDaten52', JSON.stringify(daten));
}

function laden52() {
    var gespeichert = localStorage.getItem('formDaten52');
    var daten = JSON.parse(gespeichert);
        document.getElementById("range52").value = daten.slider
    zeigeScore52();
    
}


function zeigeScore52() {
    var slider = document.getElementById("range52");
    var output = document.getElementById("score52");
        output.textContent = slider.value;
            speichern52()
}

document.getElementById("range52").addEventListener("input", zeigeScore52,);
laden52();

//-------------------------------------------------------------------------------------Speichern5.3
function speichern53() {
    var slider = document.getElementById("range53").value;
        var daten = {
            slider: slider
        };
    localStorage.setItem('formDaten53', JSON.stringify(daten));
}

function laden53() {
    var gespeichert = localStorage.getItem('formDaten53');
    var daten = JSON.parse(gespeichert);
        document.getElementById("range53").value = daten.slider
    zeigeScore53();
}


function zeigeScore53() {
    var slider = document.getElementById("range53");
    var output = document.getElementById("score53");
        output.textContent = slider.value;
            speichern53()
}

document.getElementById("range53").addEventListener("input", zeigeScore53,);
laden53();
//-------------------------------------------------------------------------------------Speichern5.4
function speichern54() {
    var slider = document.getElementById("range54").value;
        var daten = {
            slider: slider
        };
    localStorage.setItem('formDaten54', JSON.stringify(daten));
}

function laden54() {
    var gespeichert = localStorage.getItem('formDaten54');
    var daten = JSON.parse(gespeichert);
        document.getElementById("range54").value = daten.slider
    zeigeScore54();
}


function zeigeScore54() {
    var slider = document.getElementById("range54");
    var output = document.getElementById("score54");
        output.textContent = slider.value;
            speichern54()
}

document.getElementById("range54").addEventListener("input", zeigeScore54,);
laden54();
//-------------------------------------------------------------------------------------Speichern5.5
function speichern55() {
    var slider = document.getElementById("range55").value;
        var daten = {
            slider: slider
        };
    localStorage.setItem('formDaten55', JSON.stringify(daten));
}

function laden55() {
    var gespeichert = localStorage.getItem('formDaten55');
    var daten = JSON.parse(gespeichert);
        document.getElementById("range55").value = daten.slider
    zeigeScore55();
}


function zeigeScore55() {
    var slider = document.getElementById("range55");
    var output = document.getElementById("score55");
        output.textContent = slider.value;
            speichern55()
}

document.getElementById("range55").addEventListener("input", zeigeScore55,);
laden55();
//-------------------------------------------------------------------------------------Speichern5.6
function speichern56() {
    var slider = document.getElementById("range56").value;
        var daten = {
            slider: slider
        };
    localStorage.setItem('formDaten56', JSON.stringify(daten));
}

function laden56() {
    var gespeichert = localStorage.getItem('formDaten56');
    var daten = JSON.parse(gespeichert);
        document.getElementById("range56").value = daten.slider
    zeigeScore56();
}


function zeigeScore56() {
    var slider = document.getElementById("range56");
    var output = document.getElementById("score56");
        output.textContent = slider.value;
            speichern56()
}

document.getElementById("range56").addEventListener("input", zeigeScore56,);
laden56();



