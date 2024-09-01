/*window.onload = () => {
    let button=document.querySelector("#btn");
    button.addEventListener("click",calculateBMI);
}
function calculateBMI(){
    let Height= parseInt(document.querySelector("#Height").value);
    let Weight= parseInt(document.querySelector("#Weight"),value);
    let Result=document.querySelector("#Result");
    if (Height===" " || isNaN(Height))
        Result.innerHTML="Provide a valid Height";
    else if(Weight===" " || isNaN(Weight))
        Result.innerHTML="Provide a valid Weight";
    else{
        let bmi=(weight/((height*height)/1000)).toFixed(2);
        if(bmi<18.6)Result.innerHTML='Under Weight:<span>${bmi}</span>';
        else if(bmi> 18.6 && bmi < 24.9)Result.innerHTML='Normal Weight:<span>${bmi}</span>';
        else Result.innerHTML='Over Weight=<span>${bmi}</span>';
    }
}   */

window.onload = () => {
    let button = document.querySelector("#btn");
    button.addEventListener("click", calculateBMI);
}

function calculateBMI() {
    let height = parseInt(document.querySelector("#Height").value);
    let weight = parseInt(document.querySelector("#Weight").value);
    let result = document.querySelector("#result");

    if (isNaN(height) || height <= 0) {
        result.innerHTML = "Provide a valid height.";
    } else if (isNaN(weight) || weight <= 0) {
        result.innerHTML = "Provide a valid weight.";
    } else {
        let bmi = (weight / ((height / 100) ** 2)).toFixed(2);

        if (bmi < 18.6) {
            result.innerHTML = `Under Weight: <span>${bmi}</span>`;
        } else if (bmi >= 18.6 && bmi < 24.9) {
            result.innerHTML = `Normal Weight: <span>${bmi}</span>`;
        } else {
            result.innerHTML = `Over Weight: <span>${bmi}</span>`;
        }
    }
}

/*Corrected the Variable Names:

The variables Height and Weight should be lowercase (height and weight) to match the case used elsewhere in your code.
Fixed the Parse Function:

You had a typo in the parseInt function for the weight. The correct code is parseInt(document.querySelector("#Weight").value);.
Changed the Conditional Checks:

Instead of checking if Height or Weight is equal to an empty string (" "), I changed the check to ensure they are valid numbers using isNaN() and also made sure they are positive values.
Fixed BMI Calculation:

The formula for BMI was incorrect. The correct formula is weight / ((height / 100) ** 2). This converts the height from centimeters to meters and then calculates the BMI.
Corrected ID Reference:

The Result variable was changed to result to match the lowercase usage in the selector.*/