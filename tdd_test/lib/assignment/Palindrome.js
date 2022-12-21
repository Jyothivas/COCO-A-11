class Palindrome{
    isPalindrome(words){
        const len = words.length;
        if(len==1 || len=='')
            return 'Enter valid string';
        for(let i=0;i<len/2;i++){
            if(words[i]!==words[len-i-1])
                return 'Not Palindrome';
        }
        return 'Palindrome';
    }
}
module.exports=Palindrome;