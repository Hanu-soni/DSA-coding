function pyramid() {
    //_ _ 1_ _
    //_ _ 1_ _
    //_ _ 1_ _
    //_ _ 1_ _
    //_ _ 1_ _
    let str = "";
    for (let i = 0; i <= 8; i++) {
        for (let k = 0; k <= Math.floor(8 - i - 1) / 2; k++) {
            str += " "
        }

        for (let j = 0; j <= i; j++) {
            str += i + 1;
        }
        for (let k = 0; k <= Math.floor(8 - i - 1) / 2; k++) {
            str += " "
        }

        str += " "
        console.log(" " + str)
        str = ""
    }

}
pyramid()