var shopper = {
    name:"mike",
    number:8675,
    city:"SLC",
    kart:["bread"," water"," chips"],
    activeMember:true,
    name_thing: function nameAndThing(){
        return "welcome back " + this.name + " your number is " + this.number + " and you are currently living in " + this.city 
       },
    kConfirm: function (){
       return "you currently have "+ shopper.kart + " in your cart."
        }
    }

console.log(shopper.name_thing()) 
console.log(shopper.kConfirm())

