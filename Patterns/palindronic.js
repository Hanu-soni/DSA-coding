//
function rhombus() {
    let str = "";

    for (let i = 0; i <= 4; i++) {
        if (i <= 4) {
            for (let j = 0; j <= 4 - i - 1; j++) {
                str += " ";
            }
            for (let j = i + 1; j >= 1; j--) {
                str += j;
            }

        }
       for(let j=2;j<=i+1;j++)
       {
            if(i==0)
            {
                continue;
            }
            str+=j;

       }


        console.log(str)
        str = ""
    }
}
rhombus();