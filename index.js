let menuButton = document.getElementById('toggleMenu');
let content = document.getElementById('content');
let closer = document.getElementById('close');
let projectToggle = document.getElementById('togggleProject');
let menuOn = false;
let projects = false;

projectToggle.addEventListener('click',()=>{
    if(!projects){
        document.querySelector('.project').style.display = 'grid';
        document.querySelector('#container').style.display = 'none';
        projectToggle.innerHTML = 'Profile';
        projects = true;
    }else{
        document.querySelector('.project').style.display = 'none';
        document.querySelector('#container').style.display = 'block';
        projectToggle.innerHTML = 'My Projects';
        projects = false;
    }
})


closer.addEventListener('click',()=>{
    content.style.display = 'none';
    document.querySelector('.title').innerText = "Title";
    document.querySelector('.description').innerText = "description";
});


menuButton.addEventListener('click',(e)=>{
    e.stopPropagation();
    if(menuOn == false){
        let menu = document.getElementById('popMenu');
        menu.classList.add('menuOpen');
        menuOn = true;
    }else{
        let menu = document.getElementById('popMenu');
        menu.classList.remove('menuOpen');
        menuOn = false;
    }
});


document.querySelectorAll('.menu-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault(); // Prevent the default anchor behavior

        var targetId = this.getAttribute('href').substring(1);
        var targetElement = document.getElementById(targetId);
        var container = document.getElementById('container');

        container.scrollTo({
            top: targetElement.offsetTop - container.offsetTop,
            behavior: 'smooth'
        });
    });
});

document.querySelector('.one').addEventListener('click',()=>{
    content.style.display = 'block';
    document.querySelector('.title').innerText = "Project 1";
    document.querySelector('.description').innerText = "Login page that can validate input fields.";
    document.querySelector('.images').innerHTML = `
        <img src="assets/assignment1.png" alt="">
        <img src="assets/assignment1b.png" alt="">
        <img src="assets/assignment1c.png" alt="">
    
    `
})

document.querySelector('.two').addEventListener('click',()=>{
    content.style.display = 'block';
    document.querySelector('.title').innerText = "Project 2";
    document.querySelector('.description').innerText = "Knowledge base that includes facts and relationships about your family, extending to a minimum of four generations.";
    document.querySelector('.images').innerHTML = `
        <img src="assets/assignment2.png" alt="">
        <img src="assets/assignment2b.png" alt="">
    
    `
})

document.querySelector('.three').addEventListener('click',()=>{
    content.style.display = 'block';
    document.querySelector('.title').innerText = "Project 3";
    document.querySelector('.description').innerText = "A program to calculate and display the area of a shape that the user defines via the keyboard.";
    document.querySelector('.images').innerHTML = `
        <img src="assets/assignment3.png" alt="">
        <img src="assets/assignment3b.png" alt="">
        <img src="assets/assignment3c.png" alt="">
    
    `
})

document.querySelector('.four').addEventListener('click',()=>{
    content.style.display = 'block';
    document.querySelector('.title').innerText = "Project 4";
    document.querySelector('.description').innerText = "A Program that takes Marks As Input And Awards The Appropriate Grade Based On Usiu's Grading System.";
    document.querySelector('.images').innerHTML = `
        <img src="assets/assignment4.png" alt="">
    
    `
})