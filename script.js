var weight, height, measure, bmi, error;

function calculate() {
    var weightInput = document.getElementById("weight").value;
    var heightInput = document.getElementById("height").value;

    // Check if the weight and height inputs are not empty
    if (!weightInput || !heightInput) {
        document.getElementById("results").innerHTML = error;
        return;
    }
    

    // Convert input to numbers
    weight = parseFloat(weightInput);
    height = parseFloat(heightInput);

    // Check if the inputs are valid numbers
    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
        document.getElementById("results").innerHTML = error;
        return;
    }

    // Convert height to meters if it's in feet
    if (document.getElementById("heightUnit").value === "feet") {
        height *= 0.3048; // 1 foot = 0.3048 meters
    } else if (document.getElementById("heightUnit").value === "cm") {
        height /= 100; // 1 meter = 100 centimeters
    }
    // Convert weight to kilograms if it's in pounds
    if (document.getElementById("weightUnit").value === "pounds") {
        weight *= 0.453592; // 1 pound = 0.453592 kilograms
    }

    // Calculate BMI
    bmi = weight / (height * height);
    bmi = bmi.toFixed(1);

    // Determine BMI category
    if (bmi <= 18.4) {
        measure = "Your BMI is " + bmi + ", which means you are Underweight";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        measure = "Your BMI is " + bmi + ", which means you are Normal";
    } else if (bmi >= 25 && bmi <= 29.9) {
        measure = "Your BMI is " + bmi + ", which means you are Overweight";
    } else if (bmi >= 30) {
        measure = "Your BMI is " + bmi + ", which means you are Obese";
    }

    document.getElementById("results").innerHTML = measure;
}
