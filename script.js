let input = document.querySelector('.input');
let add = document.querySelector('#add');
let displayTask = document.querySelector('.display');
let container = document.querySelector('.container');
let functional = document.querySelector('.functional');
let addList = document.querySelector('.addList');
let useDelete = document.querySelector('.delete');
const questionMark = document.querySelector('.questionMark');

let setArray = localStorage.getItem('data') ? JSON.parse(localStorage.getItem('data')) : [];
let storedData = JSON.parse(localStorage.getItem('data'));

window.addEventListener('load', ()=>{
    container.style.transform = "rotate(360deg)";
    container.style.transition = "all 2s linear";
    input.style.transform = "rotate(360deg)";

});

questionMark.onclick = () => {
    alert("Hi, when you add a task to the TodoList app and you exit the browser or close the page, whenever you re-open it, your added task will still appear unless you press the 'clear Task' button. So, you are always free to come back and check your added task without worrying about it deleting after closing your browser tab. Enjoy!  ")
}

const createLi = (text) =>{
    let li = document.createElement('li');
    li.textContent = text;
    addList.appendChild(li);
    
    if(input.value.trim() == ""){
        li.onclick = () =>{
            li.remove()
        }
    }
}

    
    add.addEventListener('click', function(){
        if(input.value.trim() != ""){
            setArray.push(input.value);
        }
        
        localStorage.setItem('data', JSON.stringify(setArray));
        
        createLi(input.value.trim());
        input.value = "";

 
    });

    useDelete.addEventListener('click', function(){
        localStorage.removeItem('data');
        while(addList.firstChild){
            addList.removeChild(addList.firstChild);
        }
        setArray = [];
        
    });


storedData.forEach(storedValue =>{
    createLi(storedValue);
});






