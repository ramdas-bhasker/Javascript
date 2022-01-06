let screens = document.getElementById('screen');
let buttons = document.querySelectorAll('button');
let screenValue = "";

for(btnItems of buttons){
	btnItems.addEventListener('click', (e)=>{
		buttonText = e.target.innerText;
		
	if(buttonText == 'X'){
		buttonText = '*';
		screenValue += buttonText;
		screens.value = screenValue;
	}
	else if(buttonText == 'C'){
		screens.value = "0";
	}
	else if(buttonText == '='){
		screens.value = eval(screenValue);
	}
	else{
		screenValue += buttonText;
		screens.value = screenValue;
	}
	})
	
}