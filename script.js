const time = document.getElementById('clock');
const username = document.getElementById('greet');
const todo = document.getElementById('msg');

function showtime(){
    let today = new Date();
    let hour = today.getHours();
    let minutes = today.getMinutes();
    hour = hour%12 || 12;
    if(minutes < 10){
        time.innerHTML = hour+':'+'0'+minutes;
    }
    else{
        time.innerHTML = hour+':'+minutes;
    }
    setTimeout(showtime, 1000);
}

function bgchange(){
    let today = new Date();
    let hour = today.getHours();
    if(hour<12){
        document.body.style.backgroundImage = "url('morning2.jpg')";
    }
    else if(hour<18){
        document.body.style.backgroundImage = "url('afternoon-sky.jpg')"
    }
    else{
        document.body.style.backgroundImage = "url('nightsky.jpg')";
    }
}

function storename(){
    if(localStorage.getItem('username') === null){
        username.textContent ='[Enter Username]';
        username.blur();
    }
    else{
        username.textContent = localStorage.getItem('username');
    }
}

function storeTask(){
    if(localStorage.getItem('todo') === null){
        todo.textContent = '';
    }
    else{
        todo.textContent = localStorage.getItem('todo');
    }
}

function setName(e){
    if(e.type === 'keypress'){
        if(e.keycode === 13 || e.which === 13){
            localStorage.setItem('username',e.target.innerText);
            username.blur();
        }
    }
    else{
        localStorage.setItem('username',e.target.innerText);
    }
}

function setTask(e){
    if(e.type === 'keypress'){
        if(e.keycode === 13 || e.which===13){
            localStorage.setItem('todo',e.target.innerText);
            todo.blur();
        }
    }
    else{
        localStorage.setItem('todo',e.target.innerText);
    }
}

username.addEventListener('keypress',setName);
username.addEventListener('blur',setName);
todo.addEventListener('keypress',setTask);
todo.addEventListener('blur',setTask);
showtime();
storename();
storeTask();
bgchange();