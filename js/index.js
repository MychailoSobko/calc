const display = document.querySelector('.calculator input[name=display]')

document.querySelectorAll('.digits, .opers')
    .forEach(btn => btn.addEventListener('click', digitOperPressed) );
    
function digitOperPressed(e) {
    display.value += e.target.innerText;
}    

document.querySelector('.result')
    .addEventListener('click', function(){
        display.value = eval(display.value);
    })
    
document.querySelector('.clean')
    .addEventListener('click', function(){
        display.value = ' ';
    })
    
document.querySelector('.erase')
    .addEventListener('click', function(){
        display.value = display.value.substring(0, display.value.length - 1);
    })
    
document.querySelector('.multiply')
    .addEventListener('click', function(){
      display.value = display.value + '*' ;
    })
document.querySelector('.divide')
    .addEventListener('click', function(){
        display.value = display.value + '/';
    })