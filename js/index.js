const display = document.querySelector('.calculator input[name=display]')

document.querySelectorAll('.digits, .opers')
    .forEach(btn => btn.addEventListener('click', digitOperPressed) );
    
function digitOperPressed(e) {
    display.value += e.target.innerText;
}    

document.querySelector('.clean')
    .addEventListener('click', function() {
        display.value = ' ';
    })
    
document.querySelector('.erase')
    .addEventListener('click', function(){
        display.value = display.value.substring(0, display.value.length - 1);
    })
    
document.querySelector('.multiply')
    .addEventListener('click', function() {
      display.value = display.value + '*';
    })
    
document.querySelector('.divide')
    .addEventListener('click', function() {
        display.value = display.value + '/';
    })
    
document.querySelector('.square')    
    .addEventListener('click', function() {
      display.value = Math.pow(display.value, 2);  
    })

document.querySelector('.sqrt')    
    .addEventListener('click', function() {
      display.value = Math.sqrt(display.value);  
    })    

document.querySelector('.sin')    
    .addEventListener('click', function() {
      display.value = Math.sin(display.value);  
    })  
    
document.querySelector('.cos')    
    .addEventListener('click', function() {
      display.value = Math.cos(display.value);  
    })    
    
document.querySelector('.result')
    .addEventListener('click', function() {
        display.value = eval(display.value);
    })
        