var form = document.querySelector("form");

form.addEventListener("submit", function(event){
    //use 'this to refer to the form element itself
    event.preventDefault();

    var title = this.title.value;
    var description = this.description.value;
    var isItClassic = this.classic.checked;
    var radio = this.querySelector("input[name = genre]:checked")
    var rating = this.rating.value;
    var color = this.color.value;


    alert("your entry is called")
})