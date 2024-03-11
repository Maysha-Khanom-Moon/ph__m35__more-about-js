function checkAge() {
    const ageField = document.getElementById('age');
    const ageText = ageField.value;

    const errorTag = document.getElementById('error');
    // let moon = 4;
    try {
        // which part i want to done
        console.log(moon);

        // if we don't throw any error text then we got a reference erro
    }
    // try {
    //     const age = parseInt(ageText);
    //     console.log(age);

    //     // also we can throw an error text
    //     if(isNaN(age)) {
    //         throw "please enter a number";
    //     }

    //     else if(age < 18) {
    //         throw 'baccha kaccha not allowed';
    //     }

    //     errorTag.innerHTML = '';
    // }
    catch (err) {
        // if there is any error in try section
        console.log('ERROR:' , err);

        // errorTag.innerHTML = 'ERROR: ' + err;
    }

    finally {
        // error thakleo show hobe, na thakleo show hobe
        console.log('if error can handle then program not gonna crash');
    }

    // aitao finally er motoi kaj kore
    console.log('Maysha Khanom Moon');
}