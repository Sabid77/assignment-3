// var kilometter = 1;
// var mitter = 1000;
// var result = kilometter * mitter;
// console.log(result);
const bigName = (nameArray) =>{
    const length = nameArray.map(function(word){
    return word.length
   })
    let i = length.indexOf(Math.max(...length));
    return nameArray[i];
   }
   
   const nameArray = ["Rafiq","karim","ShobujAlom","Sabid","sumona","jhankarMahbub"];
   
   console.log(bigName(nameArray));