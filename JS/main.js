for (let i = 0 ; i <= 100 ; i++) {
	if (i % 2 == 0){
		console.log(i);
	}
}

var a = prompt('Enter a number: ');

if (a <= -1){
	alert(-1);
}

else if (a == 0){
	alert(0);
}

else if (a >= 1){
	alert(1);
}

else alert ('Error');

console.log("Hello world!");

document.body.style.backgroundColor = "cyan";

setTimeout(function(){document.body.style.backgroundColor = "yellow";}, 3000);

window.addEventListener('load', (event) => {
  console.log('page is fully loaded');
});

document.getElementById("Bt1").addEventListener("click",function() {document.body.style.backgroundColor = "red"; }); 
document.getElementById("Bt2").addEventListener("click",function() {document.body.style.backgroundColor = "green"; }); 
document.getElementById("Bt3").addEventListener("click",function() {document.body.style.backgroundColor = "blue"; }); 