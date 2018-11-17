# Implictiy-Internship-Exercise
Internship Interview Exercise ---- Sandeep Annathurai
// ------------------------------------>
// please start your implementation below:
function reverse(s){
     return s.split("").reverse().join("");
}

function checkIsPalindrome(arr){
   for(var i=0;i<arr.length;i++){
        if(arr[i] == reverse(arr[i])){
        console.log(arr[i]+" is a Palindrome");
}
else{
console.log(arr[i]+" is not a Palindrome");
}
}
}
checkIsPalindrome(["racecar","madam","hello","laptop"]);
// end of your implementation
// ----------------------------------- <
