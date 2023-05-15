
const form = document.getElementById('form')
const input = document.getElementById('input')
const button = document.getElementById('button')

const li = document.getElementById('li')
const ul = document.getElementById('ul')
console.log(input,"input")

//variable empty string e.target value  ,form onsubmit new variable [] ,string value convert into array ,form reste ""  console.log(,"")




function createElemintList(){

const li = document.createElement('li');
console.log(li,'li');
li.appendChild(document.createTextNode(input.value));
ul.appendChild(li);
input.value = "";

const button = document.createElement('button');
console.log(button,'li');
button.appendChild(document.createTextNode('X'));
li.appendChild(button);

function deleteBtn(){
    li.classList.add('delete')
}
li.addEventListener('click',deleteBtn)
}



form.addEventListener('submit',function(e){
    e.preventDefault();
    createElemintList()
})






