//-------------------------------------------------------------------------------------Speichern3.1
function speichern31() {
    var slider = document.getElementById("range31").value;
        var daten = {
            slider: slider
        };
    localStorage.setItem('formDaten31', JSON.stringify(daten));
}

function laden31() {
    var gespeichert = localStorage.getItem('formDaten31');
    var daten = JSON.parse(gespeichert);
        document.getElementById("range31").value = daten.slider
    zeigeScore31();
}


function zeigeScore31() {
    var slider = document.getElementById("range31");
    var output = document.getElementById("score31");
        output.textContent = slider.value;
            speichern31()
}

document.getElementById("range31").addEventListener("input", zeigeScore31,);
laden31();
//-------------------------------------------------------------------------------------Speichern3.2
function speichern32() {
    var slider = document.getElementById("range32").value;
        var daten = {
            slider: slider
        };
    localStorage.setItem('formDaten32', JSON.stringify(daten));
}

function laden32() {
    var gespeichert = localStorage.getItem('formDaten32');
    var daten = JSON.parse(gespeichert);
        document.getElementById("range32").value = daten.slider
    zeigeScore32();
}


function zeigeScore32() {
    var slider = document.getElementById("range32");
    var output = document.getElementById("score32");
        output.textContent = slider.value;
            speichern32()
}

document.getElementById("range32").addEventListener("input", zeigeScore32,);
laden32();
//-------------------------------------------------------------------------------------Speichern3.3
function speichern33() {
    var slider = document.getElementById("range33").value;
        var daten = {
            slider: slider
        };
    localStorage.setItem('formDaten33', JSON.stringify(daten));
}

function laden33() {
    var gespeichert = localStorage.getItem('formDaten33');
    var daten = JSON.parse(gespeichert);
        document.getElementById("range33").value = daten.slider
    zeigeScore33();
}


function zeigeScore33() {
    var slider = document.getElementById("range33");
    var output = document.getElementById("score33");
        output.textContent = slider.value;
            speichern33()
}

document.getElementById("range33").addEventListener("input", zeigeScore33,);
laden33();
//-------------------------------------------------------------------------------------Speichern3.4
function speichern34() {
    var slider = document.getElementById("range34").value;
        var daten = {
            slider: slider
        };
    localStorage.setItem('formDaten34', JSON.stringify(daten));
}

function laden34() {
    var gespeichert = localStorage.getItem('formDaten34');
    var daten = JSON.parse(gespeichert);
        document.getElementById("range34").value = daten.slider
    zeigeScore34();
}


function zeigeScore34() {
    var slider = document.getElementById("range34");
    var output = document.getElementById("score34");
        output.textContent = slider.value;
            speichern34()
}

document.getElementById("range34").addEventListener("input", zeigeScore34,);
laden34();
//-------------------------------------------------------------------------------------Speichern3.5
function speichern35() {
    var slider = document.getElementById("range35").value;
        var daten = {
            slider: slider
        };
    localStorage.setItem('formDaten35', JSON.stringify(daten));
}

function laden35() {
    var gespeichert = localStorage.getItem('formDaten35');
    var daten = JSON.parse(gespeichert);
        document.getElementById("range35").value = daten.slider
    zeigeScore35();
}


function zeigeScore35() {
    var slider = document.getElementById("range35");
    var output = document.getElementById("score35");
        output.textContent = slider.value;
            speichern35()
}

document.getElementById("range35").addEventListener("input", zeigeScore35,);
laden35();
//-------------------------------------------------------------------------------------Speichern3.6
function speichern36() {
    var slider = document.getElementById("range36").value;
        var daten = {
            slider: slider
        };
    localStorage.setItem('formDaten36', JSON.stringify(daten));
}

function laden36() {
    var gespeichert = localStorage.getItem('formDaten36');
    var daten = JSON.parse(gespeichert);
        document.getElementById("range36").value = daten.slider
    zeigeScore36();
}


function zeigeScore36() {
    var slider = document.getElementById("range36");
    var output = document.getElementById("score36");
        output.textContent = slider.value;
            speichern36()
}

document.getElementById("range36").addEventListener("input", zeigeScore36);
laden36();



