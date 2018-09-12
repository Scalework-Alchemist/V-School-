//these are the calls for the pest values entered

// bobOmbs --->  document.bobOmb.quantity.value
// goombas --->  document.goombas.quantity.value
//cheep    --->  document.cheep.quantity.value
var x = document.getElementById("whatever")
x.addEventListener("click", function(e){
    e.preventDefault()
    var bobOmbs= document.bobOmb.quantity.value;
    var goombas= document.goombas.quantity.value;
    var cheep= document.cheep.quantity.value ;
    var bobBounty= 7;
    var goomBounty= 5;
    var cheepBounty= 11;
    var bobOmbsTotal= bobOmbs * bobBounty;
    var goombasTotal= goombas * goomBounty;
    var cheepTotal= cheep * cheepBounty;
    var tax= .065;
    var subtotal=bobOmbsTotal + cheepTotal + goombasTotal;
    var coinsTotal= subtotal+(subtotal*tax);
    

    //alert(coinsTotal + " total after taxes")
    //Totals pushed in ul id= "TOTAL"
    // var ulTotals = document.getElementById("TOTALS");
    // var liTotals= document.createElement('li');
    // var textTotal= document.createTextNode(coinsTotal);
    // liTotals.appendChild(textTotal);
    // ulTotals.appendChild(liTotals);

    document.getElementById('Amount Killed').children[0].innerHTML=goombas;
    document.getElementById('Amount Killed').children[1].innerHTML=bobOmbs;
    document.getElementById('Amount Killed').children[2].innerHTML=cheep;
    document.getElementById('TOTALS').children[0].innerHTML="Sub-Total: "+subtotal;
    document.getElementById('TOTALS').children[1].innerHTML="Total: "+coinsTotal;


    
     

          

    
        
   
    
})


