function removeCano(dnaString) {
    const canoBase =['C','T','A','G']
    let result ='';

    for(let i=0; i<dnaString.length; i++){
        const currentBase = dnaString[i];
        if(canoBase.includes(currentBase)){
            result += currentBase;
        }
    }
    return result;
}

module.exports = removeCano;