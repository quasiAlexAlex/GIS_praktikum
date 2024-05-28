//-------------------------------------------------------------------------------------Speichern2.1
function speichern21() {
    var slider = document.getElementById("range21").value;
        var daten = {
            slider: slider
        };
    localStorage.setItem('formDaten21', JSON.stringify(daten));
}

function laden21() {
    var gespeichert = localStorage.getItem('formDaten21');
    var daten = JSON.parse(gespeichert);
        document.getElementById("range21").value = daten.slider
    zeigeScore21();
}


function zeigeScore21() {
    var slider = document.getElementById("range21");
    var output = document.getElementById("score21");
        output.textContent = slider.value;
            speichern21();
}

document.getElementById("range21").addEventListener("input", zeigeScore21);
laden21();
//-------------------------------------------------------------------------------------Speichern2.2
function speichern22() {
    var slider = document.getElementById("range22").value;
        var daten = {
            slider: slider
        };
    localStorage.setItem('formDaten22', JSON.stringify(daten));
}

function laden22() {
    var gespeichert = localStorage.getItem('formDaten22');
    var daten = JSON.parse(gespeichert);
        document.getElementById("range22").value = daten.slider
    zeigeScore22();
}


function zeigeScore22() {
    var slider = document.getElementById("range22");
    var output = document.getElementById("score22");
        output.textContent = slider.value;
            speichern22()
}

document.getElementById("range22").addEventListener("input", zeigeScore22);
laden22();
//-------------------------------------------------------------------------------------Speichern2.3
function speichern23() {
    var slider = document.getElementById("range23").value;
        var daten = {
            slider: slider
        };
    localStorage.setItem('formDaten23', JSON.stringify(daten));
}

function laden23() {
    var gespeichert = localStorage.getItem('formDaten23');
    var daten = JSON.parse(gespeichert);
        document.getElementById("range23").value = daten.slider
    zeigeScore23();
}


function zeigeScore23() {
    var slider = document.getElementById("range23");
    var output = document.getElementById("score23");
        output.textContent = slider.value;
            speichern23()
}

document.getElementById("range23").addEventListener("input", zeigeScore23);
laden23();
//-------------------------------------------------------------------------------------Speichern2.4
function speichern24() {
    var slider = document.getElementById("range24").value;
        var daten = {
            slider: slider
        };
    localStorage.setItem('formDaten24', JSON.stringify(daten));
}

function laden24() {
    var gespeichert = localStorage.getItem('formDaten24');
    var daten = JSON.parse(gespeichert);
        document.getElementById("range24").value = daten.slider
    zeigeScore24();
}


function zeigeScore24() {
    var slider = document.getElementById("range24");
    var output = document.getElementById("score24");
        output.textContent = slider.value;
            speichern24()
}

document.getElementById("range24").addEventListener("input", zeigeScore24);
laden24();
//-------------------------------------------------------------------------------------Speichern2.5
function speichern25() {
    var slider = document.getElementById("range25").value;
        var daten = {
            slider: slider
        };
    localStorage.setItem('formDaten25', JSON.stringify(daten));
}

function laden25() {
    var gespeichert = localStorage.getItem('formDaten25');
    var daten = JSON.parse(gespeichert);
        document.getElementById("range25").value = daten.slider
    zeigeScore25();
}


function zeigeScore25() {
    var slider = document.getElementById("range25");
    var output = document.getElementById("score25");
        output.textContent = slider.value;
            speichern25()
}

document.getElementById("range25").addEventListener("input", zeigeScore25,);
laden25();
//-------------------------------------------------------------------------------------Speichern2.6
function speichern26() {
    var slider = document.getElementById("range26").value;
        var daten = {
            slider: slider
        };
    localStorage.setItem('formDaten26', JSON.stringify(daten));
}

function laden26() {
    var gespeichert = localStorage.getItem('formDaten26');
    var daten = JSON.parse(gespeichert);
        document.getElementById("range26").value = daten.slider
    zeigeScore26();
}


function zeigeScore26() {
    var slider = document.getElementById("range26");
    var output = document.getElementById("score26");
        output.textContent = slider.value;
            speichern26()
}

document.getElementById("range26").addEventListener("input", zeigeScore26,);
laden26();



