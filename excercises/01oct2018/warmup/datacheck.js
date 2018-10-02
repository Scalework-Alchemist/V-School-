Object.defineProperty(Array.prototype, 'flat', {
    value: function(depth = 1) {
      return this.reduce(function (flat, toFlatten) {
        return flat.concat((Array.isArray(toFlatten) && (depth-1)) ? toFlatten.flat(depth-1) : toFlatten);
      }, []);
    }
});



function checkTypes(arr) {
    let newArr= arr_.flatten()
    // arr.flatMap(x => [typeof x])
    let g = newArr.every(i=> typeof i === arr[0][0])
    console.log(g)
   
    // then all products are maped for typeof

    // if any are not the same console false 

    // else console true 
};

const multiD1 = [[1,2,3],["a","b","c"],[true, true, true]];
checkTypes(multiD1)  

const multiD2 = [[true,false,true],[false,false,true]]
checkTypes(multiD2)


