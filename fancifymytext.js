
	 console.log("Window loaded!");
	
	function makeBigger(){	
	document.getElementById("textBox").style.fontSize = "24px";
	}
	
	function myFancy(){
	document.getElementById("textBox").style.fontWeight = "bold";
	
	document.getElementById("textBox").style.color = "blue";
	
	document.getElementById("textBox").style.textDecoration = "underline";
	}
	
	function myBoring(){
	document.getElementById("textBox").style.fontWeight = "normal";
	
	document.getElementById("textBox").style.color = "black";
	
	document.getElementById("textBox").style.textDecoration = "none";
	}
	
	function myMoo(){
	document.getElementById("textBox").style.textTransform = "uppercase";
	
	let str = document.getElementById("textBox").value.split(".");
	let str2 = str.join("-Moo");
	document.getElementById("textBox").value = str2;
	}