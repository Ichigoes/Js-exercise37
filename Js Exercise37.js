function cinema(input) {
    standard = input[0];
    rows = Number(input[1]);
    cols = Number(input[2]);
    tax = 0;

    if (standard == "Premiere") {
        tax += cols * rows * 12;
    } else if (standard == "Normal") {
        tax += cols * rows * 7.5;
    } else if (standard == "Discount") {
        tax += cols * rows * 5;
    }

    console.log(` ${tax.toFixed(2)} leva`)
}

cinema(["Premiere", "10", "12"]) 