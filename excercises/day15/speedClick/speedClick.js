

var count=0
document.getElementById('Btn').onclick = function(){
    var clickCounter=count ++
    localStorage.count=clickCounter
    var newH1 = document.createElement('h1')
    var newH1Con = document.createTextNode(clickCounter)
    var newH1Complete= newH1.appendChild(newH1Con)
    var body = document.querySelector('body')
    body.appendChild(newH1);
    console.log(newH1Complete)
}

