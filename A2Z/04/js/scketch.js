let srctxt;

function preload(){
    srctxt = loadStrings('arcoiris.txt');
}

function setup(){
    noCanvas();
    srctxt = join(srctxt, ' ');
    words = splitTokens(srctxt, ' ,.!?');

    let seed = select('#seed');
    let submit = select('#submit');
    submit.mousePressed(function(){
        let phrase = diastic(seed.value(), words);
        createP(phrase);
    });
}

function diastic(seed, words){
    let frase = "";
    let curWord = 0;

    for (let i = curWord; i < seed.length; i++) {
        let c = seed.charAt(i);
        
        for (let j = 0; j < words.length; j++) {
            if (words[j].charAt(i) == c) {
                frase += words[j];
                frase += ' ';
                curWord = j +1;
                break;
            }
            
        }
    }
    return frase;
}