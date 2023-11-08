const sorting = (str) => {
    let charFreq = [];
    console.log("INPUT"," ",str)
    for (let i = 0; i < str.length; i++) {
      const char = str[i];
      const index = charFreq.findIndex((item) => item.char === char);
      if (index === -1) {
        charFreq.push({ char, freq: 1 });
      } else {
        charFreq[index].freq++;
      }
    }
  
    charFreq.sort((a, b) => {
      if (a.freq !== b.freq) {
        return b.freq - a.freq;
      } else {
        return a.char.localeCompare(b.char);
      }
    });
  
    str = charFreq.map((item) => item.char.repeat(item.freq)).join('');
    console.log("OUTPUT"," ",str)
  
    //console.log(str);
  };
  
  sorting('zzzzttteeeqqaao');