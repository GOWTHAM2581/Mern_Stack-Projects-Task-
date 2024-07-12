

let value="X"

function check(obj){
   if(obj.innerHTML==""){ 
    if (value == "X"){
     obj.innerHTML=value;
	 checkresult(obj)
     value="O"
    }
    else{
        obj.innerHTML=value;
		checkresult(obj)
        value="X"
    }
}}

function restart(){
	for(let i=1 ; i<10;i++){
		document.getElementById(`b${i}`).innerHTML=''
	}
}

function checkresult(obj){
	let key = obj.innerHTML

	let key1 = document.getElementById('b1').innerHTML
	let key2 = document.getElementById('b2').innerHTML
	let key3 = document.getElementById('b3').innerHTML
	let key4 = document.getElementById('b4').innerHTML
	let key5 = document.getElementById('b5').innerHTML
	let key6 = document.getElementById('b6').innerHTML
	let key7 = document.getElementById('b7').innerHTML
	let key8 = document.getElementById('b8').innerHTML
	let key9 = document.getElementById('b9').innerHTML

	if((key==key1) && ((key1==key2)&&(key1==key3) || (key1==key4)&&(key1==key7) || (key1==key5)&&(key1==key9))){
       alert(`${key} wins`)
	   restart()
	}
	else if((key==key2) && ((key2==key1)&&(key2==key3) || (key2==key5)&&(key2==key8) )){
		alert(`${key} wins`)
		restart()
	 }
	else if((key==key3) && ((key3==key2)&&(key3==key1) || (key3==key5)&&(key3==key7) || (key3==key6)&&(key3==key9))){
		alert(`${key} wins`)
		restart()
	 }
	else if((key==key4) && ((key4==key1)&&(key4==key7) || (key4==key5)&&(key4==key6) )){
		alert(`${key} wins`)
		restart()
	 }
	 else if((key==key5) && ((key5==key4)&&(key5==key6) || (key5==key2)&&(key5==key8) || (key5==key1)&&(key5==key9) || (key5==key7)&&(key5==key3))){
		alert(`${key} wins`)
		restart()
	 }
	 else if((key==key6) && ((key6==key3)&&(key6==key9) || (key6==key5)&&(key6==key4) )){
		alert(`${key} wins`)
		restart()
	 }
	 else if((key==key7) && ((key7==key4)&&(key7==key1) || (key7==key8)&&(key7==key9) || (key7==key5)&&(key7==key3))){
		alert(`${key} wins`)
		restart()
	 }
	 else if((key==key8) && ((key8==key7)&&(key8==key9) || (key8==key5)&&(key8==key2) )){
		alert(`${key} wins`)
		restart()
	 }
	 else if((key==key9) && ((key9==key8)&&(key9==key7) || (key9==key5)&&(key9==key1) || (key9==key6)&&(key9==key3))){
		alert(`${key} wins`)
		restart()
	 }

	 


}