class Player{
    constructor(){
        this.name = "";
        this.totalCoins = 0;
        this.status = 'small';
        this.hasStar = false;
        this.active = true;
    }
    setName(namePicked){
        this.name = namePicked;
    }
    gotHit(){
        if(this.status === "Powered Up"){
            this.status = "Big";
        }
        else if(this.status === "Big"){
            this.status == 'Small';
        }
        else{
            this.status = "Dead";
        }
    }
    gotPowerUp(){
        if(this.status === 'Small'){
        this.status = 'Big';
        }
        else if(this.status === 'Big'){
            this.status = 'Power Up'
            this.hasStar = true;
        }
    }
    gameActive(){
        if(this.status === "Dead"){
            this.active = false
        }
    }
    addCoin(){
        return this.totalCoins += 1;
    }
    print(){
        console.log(`Name: ${this.name}\nStatus:${this.status}\nLoot:${this.totalCoins}\n`)
    }
    timer(){
        let timex = setInterval(Math.floor(Math.random()*3), 3000)
        if( timex === 0 ){
            this.gotHit()
            this.print()
        }else if( timex === 1){
            this.gotPowerUp()
            this.print()
            console.log(`${this.name} Got A PowerUp!!`)
        }else if(timer === 2){
            this.addCoin()
            this.print()
        }
        
    }

}

let mario = new Player('Mario')

