 "use strict";

 let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]; 
 let shuffledArr = arr.sort(function(){
     return Math.random() - 0.5;
   });
 console.log(shuffledArr)