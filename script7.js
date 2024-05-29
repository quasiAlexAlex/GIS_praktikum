//-------------------------------------------------------------------------------------Speichern7.1
function speichern71() {
    var slider = document.getElementById("range71").value;
        var daten = {
            slider: slider
        };
    localStorage.setItem('formDaten71', JSON.stringify(daten));
}

function laden71() {
    var gespeichert = localStorage.getItem('formDaten71');
    var daten = JSON.parse(gespeichert);
        document.getElementById("range71").value = daten.slider
    zeigeScore71();
}


function zeigeScore71() {
    var slider = document.getElementById("range71");
    var output = document.getElementById("score71");
        output.textContent = slider.value;
            speichern71()
}

document.getElementById("range71").addEventListener("input", zeigeScore71,);
laden71();
//-------------------------------------------------------------------------------------Speichern7.2
function speichern72() {
    var slider = document.getElementById("range72").value;
        var daten = {
            slider: slider
        };
    localStorage.setItem('formDaten72', JSON.stringify(daten));
}

function laden72() {
    var gespeichert = localStorage.getItem('formDaten72');
    var daten = JSON.parse(gespeichert);
        document.getElementById("range72").value = daten.slider
    zeigeScore72();
   }


function zeigeScore72() {
    var slider = document.getElementById("range72");
    var output = document.getElementById("score72");
        output.textContent = slider.value;
            speichern72()
}

document.getElementById("range72").addEventListener("input", zeigeScore72,);
laden72();
//-------------------------------------------------------------------------------------Speichern7.3
function speichern73() {
    var slider = document.getElementById("range73").value;
        var daten = {
            slider: slider
        };
    localStorage.setItem('formDaten73', JSON.stringify(daten));
}

function laden73() {
    var gespeichert = localStorage.getItem('formDaten73');
    var daten = JSON.parse(gespeichert);
        document.getElementById("range73").value = daten.slider
    zeigeScore73();
    }


function zeigeScore73() {
    var slider = document.getElementById("range73");
    var output = document.getElementById("score73");
        output.textContent = slider.value;
            speichern73()
}

document.getElementById("range73").addEventListener("input", zeigeScore73,);
laden73();
//-------------------------------------------------------------------------------------Speicher7.4
function speichern74() {
    var slider = document.getElementById("range74").value;
        var daten = {
            slider: slider
        };
    localStorage.setItem('formDaten74', JSON.stringify(daten));
}

function laden74() {
    var gespeichert = localStorage.getItem('formDaten74');
    var daten = JSON.parse(gespeichert);
        document.getElementById("range74").value = daten.slider
    zeigeScore74();
  }


function zeigeScore74() {
    var slider = document.getElementById("range74");
    var output = document.getElementById("score74");
        output.textContent = slider.value;
            speichern74()
}

document.getElementById("range74").addEventListener("input", zeigeScore74,);
laden74();
//-------------------------------------------------------------------------------------Speichern7.5
function speichern75() {
    var slider = document.getElementById("range75").value;
        var daten = {
            slider: slider
        };
    localStorage.setItem('formDaten75', JSON.stringify(daten));
}

function laden75() {
    var gespeichert = localStorage.getItem('formDaten75');
    var daten = JSON.parse(gespeichert);
        document.getElementById("range75").value = daten.slider
    zeigeScore75();
    }


function zeigeScore75() {
    var slider = document.getElementById("range75");
    var output = document.getElementById("score75");
        output.textContent = slider.value;
            speichern75()
}

document.getElementById("range75").addEventListener("input", zeigeScore75,);
laden75();

//-------------------------------------------------------------------------------------Speichern7.6
function speichern76() {
    var slider = document.getElementById("range76").value;
        var daten = {
            slider: slider
        };
    localStorage.setItem('formDaten76', JSON.stringify(daten));
}

function laden76() {
    var gespeichert = localStorage.getItem('formDaten76');
    var daten = JSON.parse(gespeichert);
        document.getElementById("range76").value = daten.slider
    zeigeScore76();
   }



function zeigeScore76() {
    var slider = document.getElementById("range76");
    var output = document.getElementById("score76");
        output.textContent = slider.value;
            speichern()
}

document.getElementById("range76").addEventListener("input", zeigeScore76,);
laden76();



