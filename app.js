// app.js 
// switch -> nuhtsul shalgah
var word = "hello";
switch(word){
	case "hello":
		console.log("sain baina uu");
		break;
	case "bonjour":
		console.log("sain baina uu");
		break;
	case "nihao":
		console.log("sain baina uu");
		break;
	default:
		console.log("Iim vg baihgui bna");
}
// 1-Monday, 2-Tuesday, 3-Wednesday, 4-Thursday, 5-Friday
// 6-Saturday, 7-Sunday  
var day=7;
switch(day){
	case 1:
		console.log("Monday");
		break;
	case 2:
		console.log("Tuesday");
		break;
	default: 
		console.log("Buruu udur baina");
}
// var jims = alim/banana/lemon/guzeelzgene/----;
var jims = "alim";
switch(jims){
	case "alim":
	case "guzeelzgene":
	case "tarvas":
		console.log("ulaan");
		break;
	case "banana":
	case "lemon":
	case "mango":
		console.log("shar");
		break;
}
// 1-12 sar    4 : havar     12 : uvul 

// switch, +prompt, alert 
// 1. Тоо1 гараас оруулна  
// 2. Тэмдэгт гараас оруулна /,-,*,+
// 3. Тоо2 гараас оруулна  
// 4. Хариу гаргаж ирнэ 
/* var too1=+prompt("Too 1 oruulna uu");
var temdegt= prompt("/,*,+,- ali negiig oruulna uu");
var too2=+prompt("Too 1 oruulna uu");
switch(temdegt){
	case "+":
		alert(too1+too2);
		break;
	
} */
alert("Ta oid serlee");
alert("Ta togloomd yalahiin tuld gertee harih zamiig oloh yostoi");
alert("Tanii zamd salaa zam taarlaa");
var songolt = prompt("Baruun/Zuun");
if(songolt=="Baruun"){
	alert("Chono taarlaa");
	var songolt2=prompt("Zugtah/Zodoldoh");
	if(songolt2=="Zugtah"){
		alert("Ta zugtaad gertee harilaa");
		alert("Bayar hurgey");
	}else if(songolt2=="Zodoldoh"){
		alert("Ta diileegui uchraas vhlee");
	}
}else if(songolt=="Zuun"){
	alert("Baavgai taarj ta hojigdloo");
}