class Palindrome{
    isPalindrome(words){
        let size=words.length;
        let strReverse='';
        for(let i=size-1;i>=0;i--){
          strReverse += words.charAt(i);
        }
        if(strReverse==words){
            return 'Palindrome';
        }
        return 'Not Palindrome';
    }
}
module.exports=Palindrome;