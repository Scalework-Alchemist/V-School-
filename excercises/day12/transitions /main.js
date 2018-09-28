var display = document.getElementById('time-display')
function getTime(){
    var now = new Date()
    var hour = now.getHours()
    var min = now.getMinutes()
    var sec = now.getSeconds()
    var mSec = now.getMilliseconds()
    
    display.textContent = `${hour}:${min}:${sec}:${mSec}`

}
setInterval(getTime,100)

// var buttonEvent = document.getElementById('button')
// buttonEvent.addEventListener('click', )

var people = [
    {
        name: 'mario',
        bestFriend: 'princess peach',
        hates:'turtlees',
        inventory:['shrooms','fire flowers','star']
    },
    {
        name:'link',
        bestFriend:'nabo',
        hates:'gannon',
        inventory:['arrows','master sword','fairy','fairy','shield']
    },
    {
        name:'lara croft',
        bestFriend:'smith & wesson',
        hates:'supernatural',
        inventory:['.45','shotgun','rope','shotgun ammo','.45']


    },
    {
        name: 'yoshi',
        bestFriend: 'princess peach',
        hates:'turtlees',
        inventory:['shrooms','fire flowers','star']
    },
    {
        name: 'luigi',
        bestFriend: 'princess peach',
        hates:'turtlees',
        inventory:['shrooms','fire flowers','star']
    },
]

// people.map(function(people){
//     if(people.name !== 'luigi'){
//         people.inventory.push('star','taxes')
//     }else{
//         people.inventory.push('dildo')
//     }
    
// })

var results = people.filter(function(people){
   return people.hates === 'turtlees'
})





console.log(results)