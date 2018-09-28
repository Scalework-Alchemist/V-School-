var button= document.getElementById('Btn')
.addEventListener('click',function(e){
    e.preventDefault()
    var title = document.getElementById('Title').value
    var price = document.getElementById('price').value
    var description = document.getElementById('description').value
    console.log(title,price,description)
    var newTaskBox = document.getElementById('miniWrap')
    var newDiv = document.createElement('div')
    newDiv.id= 'newTask'
    var newH1 = document.createElement('h1')
    var newH1Con = document.createTextNode(title)
    var newH1Complete= newH1.appendChild(newH1Con)
    newDiv.appendChild(newH1);
    var newMain = document.createElement('main')
    var newMainCon = document.createTextNode(description +"\nPrice:" + price)
    var newMainCom= newMain.appendChild(newMainCon)
    newDiv.appendChild(newMain);
    newTaskBox.appendChild(newDiv)
    console.log(newTaskBox)

    
    
})

    //alert(coinsTotal + " total after taxes")
    //Totals pushed in ul id= "TOTAL"
    // var ulTotals = document.getElementById("TOTALS");
    // var liTotals= document.createElement('li');
    // var textTotal= document.createTextNode(coinsTotal);
    // liTotals.appendChild(textTotal);
    // ulTotals.appendChild(liTotals);