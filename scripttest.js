


function speichern(){

    var slider = document.querySelectorAll('input[type="range"]');

    var sliderWerte = [];

    slider.forEach(range => { sliderWerte.push(slider.value);

    })

    var daten = JSON.stringify(sliderWerte);
    localStorage.setItem('sliderWerte', daten)
console.log(slider);
}

function laden() {

    var gespeichert = localStorage.getItem('sliderWerte')
    
    var daten = JSON.parse(gespeichert);
        
        var slider = document.querySelectorAll('input[type="range"]');

        slider.forEach((slider, index) => { slider.value = daten[index];

        });

    }
    var slider = document.querySelectorAll('input[type="range"]');
    slider.forEach(range => { range.addEventListener("input", speichern);
    
    });
        
   laden();
    