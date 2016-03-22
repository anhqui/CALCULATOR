
var box=document.getElementById('display');

function addtoscreen(x) {
	box.value +=x; 
	if(x=='C'){
		box.value='';
	}
}

function answer(){
	x=box.value;  
	x=eval(x); 
	box.value=x; 
}
function backspace(){
	var number=box.value;
	var len=number.length-1;
	var newnumber=number.substring(0,len); 
	box.value = newnumber;
}
function power(y){
	x=box.value;
	box.value='';
	x=Math.pow(x,y);
	box.value=x;
}

$(document).keypress(function(e) {
    var key = e.which;
    switch (key)
    {
        case 48:
        //alert("0");
         addtoscreen('0');
          break;
        case 49:
          //alert("1");
        addtoscreen('1');
          break;
        case 50:
         // alert("2");
        addtoscreen('2');
          break;
        case 51:
         // alert("3");
        addtoscreen('3'); 
          break;
        case 52:
         // alert("4");
        addtoscreen('4');  
          break;
        case 53:
         // alert("5");
        addtoscreen('5');  
          break;
        case 54:
        //  alert("6");
        addtoscreen('6'); 
          break;
        case 55:
        //  alert("7");
        addtoscreen('7'); 
          break;
        case 56:
         // alert("8");
        addtoscreen('8');  
          break;
        case 57:
        //  alert("9");
        addtoscreen('9'); 
          break;
        case 67:
        //  alert("C"); 
        addtoscreen('C'); 
          break;  
        case 66:
        //  alert("B"); 
        backspace();
        break; 
        case 65:
        //  alert("A"); 
        addtoscreen('+');
        break;
        case 83:
        //  alert("S"); 
        addtoscreen('-');
        break;
        case 77:
        //  alert("M"); 
        addtoscreen('*');
        break;
        case 68:
        //  alert("D"); 
        addtoscreen('/');
        break;
        case 80:
        //  alert("P"); 
        addtoscreen('.');
        break;
        case 69:
        // alert("E");
        answer(); 
          break;
        default:
          alert("Invalid");
    }
});