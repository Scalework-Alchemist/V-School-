var colorBox = document.getElementById("sqr")

colorBox.addEventListener('mouseover',function (){
    colorBox.style.backgroundColor = 'blue';  
    });
colorBox.addEventListener('mousedown',function (){
    colorBox.style.backgroundColor = 'red';  
    });
colorBox.addEventListener('mouseup',function (){
    colorBox.style.backgroundColor = 'yellow';  
    });
colorBox.addEventListener('dblclick',function (){
    colorBox.style.backgroundColor = 'green';  
    });
colorBox.addEventListener('mouseout',function (){
    colorBox.style.backgroundColor = 'orange';  
    });


var keyBox = document.getElementById("key")
window.addEventListener("keydown", function(userInput) {
        if(userInput.key ==="g" ){
            keyBox.style.backgroundColor = 'green';
        }
        else if(userInput.key ==="y" ){
            keyBox.style.backgroundColor = 'yellow';
        }
        if(userInput.key ==="i" ){
            keyBox.style.backgroundColor = 'indigo';
        }
        if(userInput.key ==="r" ){
            keyBox.style.backgroundColor = 'red';
        }
        if(userInput.key ==="t" ){
            keyBox.style.backgroundColor = 'turquoise';
        }
        if(userInput.key ==="l" ){
            keyBox.style.backgroundColor = 'lime';
        }
      });






/*Blue when the mouse hovers over the square
Red when the mouse button is held down over the square
Yellow when the mouse button is let go over the square
Green when the mouse is double clicked in the square
Orange when the mouse scroll is used somewhere in the window (not just over the square). */