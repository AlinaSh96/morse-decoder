const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    res='';
    for (let i=0;i<expr.length; i+=10){
   let str = expr.slice(i, i + 10);
    str = str.replace(/00/g, '').replace(/10/g, '.').replace(/11/g, '-');
      //  res =  MORSE_TABLE[str];
      // res =res.join('');
      
      if (MORSE_TABLE[str]){
        res += MORSE_TABLE[str];
      }
      else{
               res += ' ';
           }
   
      
   }
        return res;
}

module.exports = {
    decode
}