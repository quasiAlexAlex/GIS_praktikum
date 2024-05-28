//-------------------------------------------------------------------------------------Speichern4.1
function speichern41() {
    var slider = document.getElementById("range41").value;
        var daten = {
            slider: slider
        };
    localStorage.setItem('formDaten41', JSON.stringify(daten));
}

function laden41() {
    var gespeichert = localStorage.getItem('formDaten41');
    var daten = JSON.parse(gespeichert);
        document.getElementById("range41").value = daten.slider
    zeigeScore41();
}


function zeigeScore41() {
    var slider = document.getElementById("range41");
    var output = document.getElementById("score41");
        output.textContent = slider.value;
            speichern41()
}

document.getElementById("range41").addEventListener("input", zeigeScore41,);
laden41();
//-------------------------------------------------------------------------------------Speichern4.2
function speichern42() {
    var slider = document.getElementById("range42").value;
        var daten = {
            slider: slider
        };
    localStorage.setItem('formDaten42', JSON.stringify(daten));
}

function laden42() {
    var gespeichert = localStorage.getItem('formDaten42');
    var daten = JSON.parse(gespeichert);
        document.getElementById("range42").value = daten.slider
    zeigeScore42();
}


function zeigeScore42() {
    var slider = document.getElementById("range42");
    var output = document.getElementById("score42");
        output.textContent = slider.value;
            speichern42()
}

document.getElementById("range42").addEventListener("input", zeigeScore42,);
laden42();

//-------------------------------------------------------------------------------------Speichern4.3
function speichern43() {
    var slider = document.getElementById("range43").value;
        var daten = {
            slider: slider
        };
    localStorage.setItem('formDaten43', JSON.stringify(daten));
}

function laden43() {
    var gespeichert = localStorage.getItem('formDaten43');
    var daten = JSON.parse(gespeichert);
        document.getElementById("range43").value = daten.slider
    zeigeScore43();
}


function zeigeScore43() {
    var slider = document.getElementById("range43");
    var output = document.getElementById("score43");
        output.textContent = slider.value;
            speichern43()
}

document.getElementById("range43").addEventListener("input", zeigeScore43,);
laden43();

//-------------------------------------------------------------------------------------Speichern4.4
function speichern44() {
    var slider = document.getElementById("range44").value;
        var daten = {
            slider: slider
        };
    localStorage.setItem('formDaten44', JSON.stringify(daten));
}

function laden44() {
    var gespeichert = localStorage.getItem('formDaten44');
    var daten = JSON.parse(gespeichert);
        document.getElementById("range44").value = daten.slider
    zeigeScore44();
}


function zeigeScore44() {
    var slider = document.getElementById("range44");
    var output = document.getElementById("score44");
        output.textContent = slider.value;
            speichern44()
}

document.getElementById("range44").addEventListener("input", zeigeScore44,);
laden44();

//-------------------------------------------------------------------------------------Speichern4.5
function speichern45() {
    var slider = document.getElementById("range45").value;
        var daten = {
            slider: slider
        };
    localStorage.setItem('formDaten45', JSON.stringify(daten));
}

function laden45() {
    var gespeichert = localStorage.getItem('formDaten45');
    var daten = JSON.parse(gespeichert);
        document.getElementById("range45").value = daten.slider
    zeigeScore45();
}


function zeigeScore45() {
    var slider = document.getElementById("range45");
    var output = document.getElementById("score45");
        output.textContent = slider.value;
            speichern45()
}

document.getElementById("range45").addEventListener("input", zeigeScore45,);
laden45();

//-------------------------------------------------------------------------------------Speichern4.6
function speichern46() {
    var slider = document.getElementById("range46").value;
        var daten = {
            slider: slider
        };
    localStorage.setItem('formDaten46', JSON.stringify(daten));
}

function laden46() {
    var gespeichert = localStorage.getItem('formDaten46');
    var daten = JSON.parse(gespeichert);
        document.getElementById("range46").value = daten.slider
    zeigeScore46();
}


function zeigeScore46() {
    var slider = document.getElementById("range46");
    var output = document.getElementById("score46");
        output.textContent = slider.value;
            speichern46()
}

document.getElementById("range46").addEventListener("input", zeigeScore46,);
laden46();




