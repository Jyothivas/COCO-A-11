class VowelConsonant{

    countVowelsConsonants(str){
        if(str=='' || str==' '){
            return 'Enter a string';
        }
        let Vowels= str.match(/[aeiou]/gi).length;
        return `vowels: ${Vowels}, consonant: ${str.replace(/[~!@#$%^&*()_|+-=?;:'",.<>\s]/gi,'').length-Vowels}`;
    }
}

module.exports=VowelConsonant;