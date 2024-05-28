//-------------------------------------------------------------------------------------Speichern6.1
function speichern61() {
    var slider = document.getElementById("range61").value;
        var daten = {
            slider: slider
        };
    localStorage.setItem('formDaten61', JSON.stringify(daten));
}

function laden61() {
    var gespeichert = localStorage.getItem('formDaten61');
    var daten = JSON.parse(gespeichert);
        document.getElementById("range61").value = daten.slider
    zeigeScore61();
}


function zeigeScore61() {
    var slider = document.getElementById("range61");
    var output = document.getElementById("score61");
        output.textContent = slider.value;
            speichern61()
}

document.getElementById("range61").addEventListener("input", zeigeScore61,);
laden61();
//-------------------------------------------------------------------------------------Speichern6.2
function speichern62() {
    var slider = document.getElementById("range62").value;
        var daten = {
            slider: slider
        };
    localStorage.setItem('formDaten62', JSON.stringify(daten));
}

function laden62() {
    var gespeichert = localStorage.getItem('formDaten62');
    var daten = JSON.parse(gespeichert);
        document.getElementById("range62").value = daten.slider
    zeigeScore62();
}


function zeigeScore62() {
    var slider = document.getElementById("range62");
    var output = document.getElementById("score62");
        output.textContent = slider.value;
            speichern62()
}

document.getElementById("range62").addEventListener("input", zeigeScore62,);
laden62();

//-------------------------------------------------------------------------------------Speichern6.3
function speichern63() {
    var slider = document.getElementById("range63").value;
        var daten = {
            slider: slider
        };
    localStorage.setItem('formDaten63', JSON.stringify(daten));
}

function laden63() {
    var gespeichert = localStorage.getItem('formDaten63');
    var daten = JSON.parse(gespeichert);
        document.getElementById("range63").value = daten.slider
    zeigeScore63();
}


function zeigeScore63() {
    var slider = document.getElementById("range63");
    var output = document.getElementById("score63");
        output.textContent = slider.value;
            speichern63()
}

document.getElementById("range63").addEventListener("input", zeigeScore63,);
laden63();
//-------------------------------------------------------------------------------------Speichern6.4
function speichern64() {
    var slider = document.getElementById("range64").value;
        var daten = {
            slider: slider
        };
    localStorage.setItem('formDaten64', JSON.stringify(daten));
}

function laden64() {
    var gespeichert = localStorage.getItem('formDaten64');
    var daten = JSON.parse(gespeichert);
        document.getElementById("range64").value = daten.slider
    zeigeScore64();
}


function zeigeScore64() {
    var slider = document.getElementById("range64");
    var output = document.getElementById("score64");
        output.textContent = slider.value;
            speichern64()
}

document.getElementById("range64").addEventListener("input", zeigeScore64,);
laden64();
//-------------------------------------------------------------------------------------Speichern6.5
function speichern65() {
    var slider = document.getElementById("range65").value;
        var daten = {
            slider: slider
        };
    localStorage.setItem('formDaten65', JSON.stringify(daten));
}

function laden65() {
    var gespeichert = localStorage.getItem('formDaten65');
    var daten = JSON.parse(gespeichert);
        document.getElementById("range65").value = daten.slider
    zeigeScore65();
}


function zeigeScore65() {
    var slider = document.getElementById("range65");
    var output = document.getElementById("score65");
        output.textContent = slider.value;
            speichern65()
}

document.getElementById("range65").addEventListener("input", zeigeScore65,);
laden65();
//-------------------------------------------------------------------------------------Speichern6.6
function speichern66() {
    var slider = document.getElementById("range66").value;
        var daten = {
            slider: slider
        };
    localStorage.setItem('formDaten66', JSON.stringify(daten));
}

function laden66() {
    var gespeichert = localStorage.getItem('formDaten66');
    var daten = JSON.parse(gespeichert);
        document.getElementById("range66").value = daten.slider
    zeigeScore66();
}


function zeigeScore66() {
    var slider = document.getElementById("range66");
    var output = document.getElementById("score66");
        output.textContent = slider.value;
            speichern66()
}

document.getElementById("range66").addEventListener("input", zeigeScore66,);
laden66();


