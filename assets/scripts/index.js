//Create event listeners for the buttons that open each application and/or github repo

document.getElementById('use-parks').addEventListener('click', function() {
    window.open('https://adamh1223.github.io/parks-planner/', '_blank');
});

document.getElementById('parks-github').addEventListener('click', function() {
    window.open('https://github.com/adamh1223/parks-planner', '_blank');
});
document.getElementById('use-reading').addEventListener('click', function() {
    window.open('https://reading-roundtable-a1d1097f86e5.herokuapp.com/login', '_blank');
});
document.getElementById('reading-github').addEventListener('click', function() {
    window.open('https://github.com/AdjoaHackman/reading-roundtable', '_blank');
});
document.getElementById('use-coffee').addEventListener('click', function() {
    window.open('https://e-coffee-7d6cb3a5dc4c.herokuapp.com/', '_blank');
});
document.getElementById('coffee-github').addEventListener('click', function() {
    window.open('https://github.com/lelisiario/E-Coffee', '_blank');
});
document.getElementById('use-coding-quiz').addEventListener('click', function() {
    window.open('https://adamh1223.github.io/coding-quiz/', '_blank');
});
document.getElementById('coding-quiz-github').addEventListener('click', function() {
    window.open('https://github.com/adamh1223/coding-quiz', '_blank');
});
document.getElementById('view-parks-planner').addEventListener('click', function() {
    window.location.href ='https://adamh1223.github.io/portfolio/projects.html#parks';
});
document.getElementById('view-reading-roundtable').addEventListener('click', function() {
    window.open('https://adamh1223.github.io/portfolio/projects.html#reading', '_blank');
});

document.getElementById('view-coding-quiz').addEventListener('click', function() {
    window.location.href ='https://adamh1223.github.io/portfolio/projects.html#coding';
});

document.getElementById('view-coffee').addEventListener('click', function() {
    window.open('https://adamh1223.github.io/portfolio/projects.html#coffee', '_blank');
});


// document.getElementById('view-coffee').addEventListener('click', function() {
//     window.location.href ='https://adamh1223.github.io/portfolio/projects.html#coffee';
// });