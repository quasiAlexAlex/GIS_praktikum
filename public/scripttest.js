
function zeigeScore() {
    var slider = document.getElementById("range");
    var output = document.getElementById("score");
        output.textContent = slider.value;
        var slider2 = document.getElementById("range2");
        var output2 = document.getElementById("score2");
            output2.textContent = slider2.value;        
            var slider3 = document.getElementById("range3");
            var output3 = document.getElementById("score3");
                output3.textContent = slider3.value;
                var slider4 = document.getElementById("range4");
                var output4 = document.getElementById("score4");
                    output4.textContent = slider4.value;
                    var slider5 = document.getElementById("range5");
                    var output5 = document.getElementById("score5");
                        output5.textContent = slider5.value;
                        var slider6 = document.getElementById("range6");
                        var output6 = document.getElementById("score6");
                            output6.textContent = slider6.value;
        speichern()
        console.log(speichern);

        }

document.getElementById("range").addEventListener("input", zeigeScore,);
document.getElementById("range2").addEventListener("input", zeigeScore,);
document.getElementById("range3").addEventListener("input", zeigeScore,);
document.getElementById("range4").addEventListener("input", zeigeScore,);
document.getElementById("range5").addEventListener("input", zeigeScore,);
document.getElementById("range6").addEventListener("input", zeigeScore,);





    // Function to save slider values to MongoDB
function speichern() {
        var sliders = document.querySelectorAll('input[type="range"]');
        var sliderWerte = {};
        sliders.forEach((slider, index) => {
            sliderWerte[`slider${index + 1}`] = slider.value;
        });

        fetch("/werte", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(sliderWerte)
        })
        .then(response => response.json())
        .then(data => console.log("Erfolgreich gespeichert:", data))
        .catch(error => console.error("Fehler beim Speichern:", error));
    }

    // Function to load slider values from MongoDB
function laden() {
        fetch("/werte")
            .then(response => response.json())
            .then(data => {
                if (data) {
                    var sliders = document.querySelectorAll('input[type="range"]');
                    sliders.forEach((slider, index) => {
                        slider.value = data[`slider${index + 1}`];
                    });
                    zeigeScore();
                }
            })
            .catch(error => console.error("Fehler beim Laden:", error));
    }

    // Attach event listeners to sliders
    var sliders = document.querySelectorAll('input[type="range"]');
    sliders.forEach(slider => {
        slider.addEventListener("input", zeigeScore);
    });

    // Load the slider values when the page loads
    laden();



