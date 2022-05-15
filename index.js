let screen =document.getElementById('screen');
buttons = document.querySelectorAll('button');
let screenValue = '';
for(items of buttons){
    items.addEventListener('click',(num)=>{
            buttonText = num.target.innerText;
            if(buttonText == 'x'){
                buttonText = '*';
                screenValue += buttonText;
                screen.value = screenValue;
            }
            else if(buttonText == '%'){
                buttonText = '/';
                screenValue += buttonText;
                screen.value = screenValue;
            }
            else if(buttonText == 'C'){
                screenValue = '';
                screen.value = screenValue;
            }
            else if(buttonText == '='){
                screen.value = eval(screenValue);
            }
            else{
                screenValue += buttonText;
                screen.value = screenValue;
            }
    })
}
