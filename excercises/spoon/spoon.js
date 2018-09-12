var bag = {
    color: "red",
    size: "normal",
    brand:"prince and fox",
    isItFilled:false,
    one: function(){
        return this.brand + " bag " ;
    }
}
var bottle = {
    color:"clear",
    size:1 + "liter",
    brand:"evasolo",
    isItFull:true,
    two: function(){
        returnthis.brand + " bottle " ;
    }
}

var cup = {
    color:"white",
    size: 1 + "cup",
    brand:"gibson home",
    isItFull:false,
    three: function(){
        return this.brand + " cup " ;
    }
}


var chair = {
    color:"white & grey",
    size: 3 + "feet",
    brand:"human scale",
    isItFull:true,
    four: function(){
        return this.brand + " chair " ;
    }
}


var light = {
    color: "white",
    size: 3.5 + "feet",
    brand:undefined,
    isItOn:true,
    five: function(){
        return this.brand + " light  " ;
    }
}


var phone ={
    color:"white",
    size:4 + "inches",
    brand:"Apple",
    isItOn:true,
    six: function(){
        return this.brand + " phone " ;
    }
}


var shoe ={
    color:"grey & black",
    size: 11.5,
    brand:"under armour",
    isItFull:true,
    seven: function(){
        return this.brand + " shoe " ;
    }
}


var table ={
    color:"brown",
    size:7  + "feet",
    brand:undefined,
    isItFull:true,
    eight: function(){
        return this.brand + " table " ;
    }
}


var computer ={
    color:"spacegrey",
    size:15 + "inch",
    brand:"Apple",
    isItOn:true,
    nine: function(){
        return this.brand + " computer " ;
    }
}


var shirt ={
    color:"purple",
    size:"medium",
    brand:"LTF",
    isItFull:true,
    ten: function(){
        return this.brand + " shirt " ;
    }
}

console.log("on the " + table.eight + "you have your " + bag.one + "which contains " + bottle.two+ ", " +cup.three +", "+ computer.nine + ", " + "in the room there is a man wearing " + shoe.seven +", "+ shirt.ten + "."+ "he is haveing a good day.")