var words= "Banh mi pull skateboard ipsum lorem, kombucha scenester banjo. Franzen mlkshk consequat, PBR&B lever lever listicle irony pop-up sriracha on the saliva. Shabby on chic eu iceland far next level far lever pull drinking the right vinegar fanny pack pull minim right chicharrones migas."

// function matching(str){
//     let intoArray = str.split(" ")
//     let sortedArray = intoArray.sort();
//     let wordAmt = sortedArray.length
//     function zebra(sortedArray){
//         array.forEach(sortedArray => {
            
//         });
//     }
// }

// matching(words)


const matchingWord = str => {
    const toArray = str.split(' ');
    const countWords = {};
    const output = [];
     for (let i = 0; i< toArray.length; i++){
         if (!countWords[toArray[i]]){
             countWords[toArray[i]]=1;
         }else if((countWords[i]) === 1){
             count[toArray[i]]++;
             output.push(toArray[i])
         }
     }
     return output
}

matchingWord(words)