class Dice{
	constructor(size){
		this.sides = size;
	}
	roll(){
		this.value = Math.floor(Math.random() * 6) + 1;
	}
	getValue(){
		return this.value;
	}
}


var count = 0;
var amount = 0;
function roll(){
	var dice = new Dice(6);
	dice.roll();
	count++;
	amount += dice.getValue();
	document.getElementById("count").value=count;
	document.getElementById("output").innerHTML+="<br> "+count+". rzut: <input type='text' value ='"+dice.getValue()+"'>"; 
	document.getElementById("amount").innerHTML=amount;
}
