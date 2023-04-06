function Log() {
	var user = document.getElementById("user").value;
	var pass = document.getElementById("pass").value;
	var x = 0;
	var y = 0;

	if (user == "") {
		x = x + 1;
	}else{y = y + 1;}
	if (pass =="") {
		x = x + 2;
	}else{y = y + 1;}

	switch(x) {
	    case 1:
	    	document.getElementById("invalid").style.fontSize = "20px";
	    	document.getElementById("invalid").style.textDecoration = "underline";
	    	document.getElementById("invalid").innerHTML = "you forgot your cool and quirky username😭😭";
	    	break;
	    case 2:
	    	document.getElementById("invalid").style.fontSize = "20px";
	    	document.getElementById("invalid").textDecoration = "underline";
	    	document.getElementById("invalid").innerHTML = "(hi you need a password)";
	    	break;
	    case 3:
	    	document.getElementById("invalid").style.fontSize = "20px";
	    	document.getElementById("invalid").style.textDecoration = "underline";
	    	document.getElementById("invalid").innerHTML = "it's empty :<";
	    	break;
	}
}