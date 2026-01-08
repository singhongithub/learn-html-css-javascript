var h1Element = document.querySelector('h1');


h1Element.style.color = 'blue';


var isYellow = false;
var bodyElement = document.querySelector('body');

setInterval(function () {
    if (isYellow){
        bodyElement.style.background = 'green';
    }else {
        bodyElement.style.background = 'red';
    }
    isYellow = !isYellow;
}, 100000)


var elementById = document.getElementById('paragraph')
console.log(elementById);

var elementByClass = document.getElementsByClassName('background')
console.log(elementByClass);

var elementByTag = document.getElementsByTagName('div')
console.log(elementByTag);

var elementByQueryh1 = document.querySelector('h1')
console.log(elementByQueryh1)

var elementByQueryId = document.querySelector('#paragraph')
console.log(elementByQueryId)

var elementByQueryClass = document.querySelector('.background')
console.log(elementByQueryClass)

var elementByQueryClassAll = document.querySelectorAll('.background')
console.log(elementByQueryClassAll)



////////// Manipulation ///////

var divToManipulate = document.querySelector('.background')
// divToManipulate.style.height = '50px';
// divToManipulate.style.width = '400px';
// divToManipulate.style.backgroundColor = 'red';
// divToManipulate.style.border = '1px solid green';

divToManipulate.classList.add('addClass')

var paragraph= document.querySelector('#paragraph')
console.log(paragraph.textContent)
console.log(paragraph.innerHTML)

paragraph.textContent = 'hahahahahaha'

var linkSelector= document.querySelector('a')
console.log(linkSelector.getAttribute('href'))

linkSelector.setAttribute('href','www.facebook.com')
console.log(linkSelector.getAttribute('href'))
linkSelector.innerText = 'Facebook'


var button = document.querySelector('#button');

button.addEventListener('click', function(){
    console.log('You clicked the button');
    document.querySelector('#heading').style.backgroundColor = 'red';
})


var list = document.querySelectorAll('li');

for (var i = 0; i < list.length; i++) {
    list[i].addEventListener('click', function(event){
        event.target.style.color = 'green';
    })
}



