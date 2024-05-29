//-------------------------------------------------------------------------------------Speichern1.1
function speichern() {
    var slider = document.getElementById("range").value;
        var daten = {
            slider: slider
        };
    localStorage.setItem('formDaten', JSON.stringify(daten));
}

function laden() {
    var gespeichert = localStorage.getItem('formDaten');
    var daten = JSON.parse(gespeichert);
        document.getElementById("range").value = daten.slider
    zeigeScore();
}


function zeigeScore() {
    var slider = document.getElementById("range");
    var output = document.getElementById("score");
        output.textContent = slider.value;
            speichern()
}

document.getElementById("range").addEventListener("input", zeigeScore,);
laden();




//-------------------------------------------------------------------------------------Speichern1.2
function speichern11() {
    var slider = document.getElementById("range1").value;
        var daten = {
            slider: slider
        };
    localStorage.setItem('formDaten2', JSON.stringify(daten));
}

function laden11() {
    var gespeichert = localStorage.getItem('formDaten2');
    var daten = JSON.parse(gespeichert);
        document.getElementById("range1").value = daten.slider
    zeigeScore2();
}


function zeigeScore2() {
    var slider = document.getElementById("range1");
    var output = document.getElementById("score1");
        output.textContent = slider.value;
            speichern11()
}

document.getElementById("range1").addEventListener("input", zeigeScore2);
laden11();

//-------------------------------------------------------------------------------------Speichern1.3
function speichern12() {
    var slider = document.getElementById("range2").value;
        var daten = {
            slider: slider
        };
    localStorage.setItem('formDaten3', JSON.stringify(daten));
}

function laden12() {
    var gespeichert = localStorage.getItem('formDaten3');
    var daten = JSON.parse(gespeichert);
        document.getElementById("range2").value = daten.slider
    zeigeScore3();
}


function zeigeScore3() {
    var slider = document.getElementById("range2");
    var output = document.getElementById("score2");
        output.textContent = slider.value;
            speichern12()
}

document.getElementById("range2").addEventListener("input", zeigeScore3);
laden12();

//-------------------------------------------------------------------------------------Speichern1.4
function speichern13() {
    var slider = document.getElementById("range3").value;
        var daten = {
            slider: slider
        };
    localStorage.setItem('formDaten4', JSON.stringify(daten));
}

function laden13() {
    var gespeichert = localStorage.getItem('formDaten4');
    var daten = JSON.parse(gespeichert);
        document.getElementById("range3").value = daten.slider
    zeigeScore4();
}


function zeigeScore4() {
    var slider = document.getElementById("range3");
    var output = document.getElementById("score3");
        output.textContent = slider.value;
            speichern13()
}

document.getElementById("range3").addEventListener("input", zeigeScore4);
laden13();

//-------------------------------------------------------------------------------------Speichern1.5
function speichern14() {
    var slider = document.getElementById("range4").value;
        var daten = {
            slider: slider
        };
    localStorage.setItem('formDaten5', JSON.stringify(daten));
}

function laden14() {
    var gespeichert = localStorage.getItem('formDaten5');
    var daten = JSON.parse(gespeichert);
        document.getElementById("range4").value = daten.slider
    zeigeScore5();
}


function zeigeScore5() {
    var slider = document.getElementById("range4");
    var output = document.getElementById("score4");
        output.textContent = slider.value;
            speichern14()
}

document.getElementById("range4").addEventListener("input", zeigeScore5);
laden14();

//-------------------------------------------------------------------------------------Speichern1.6
function speichern15() {
    var slider = document.getElementById("range6").value;
        var daten = {
            slider: slider
        };
    localStorage.setItem('formDaten6', JSON.stringify(daten));
}

function laden15() {
    var gespeichert = localStorage.getItem('formDaten6');
    var daten = JSON.parse(gespeichert);
        document.getElementById("range6").value = daten.slider
    zeigeScore6();
}


function zeigeScore6() {
    var slider = document.getElementById("range6");
    var output = document.getElementById("score6");
        output.textContent = slider.value;
            speichern15()
}

document.getElementById("range6").addEventListener("input", zeigeScore6);
laden15();


