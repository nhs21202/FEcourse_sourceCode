const element = document.getElementById('id-1');
element.style= "colo"
const buttons = document.getElementsByTagName('button')
const  redClasses = document.getElementsByClassName('red');
const querySelectorRedClass= document.querySelector('.red');
const nextSibling = element.nextSibling;
console.log('nextSibling',nextSibling)
console.log('classes',redClasses)
console.log('querySelectorRedClass',redClasses)

buttons[0].onclick=function(){
    element.innerText="Nguyen Hoa Son";
}
buttons[1].onclick=function(){
    element.innerText="Nguyen Hoa Son";
}
console.log('button',buttons)
console.log('getEbyID',element);