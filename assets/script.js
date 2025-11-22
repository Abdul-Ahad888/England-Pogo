// Script For Light And DarkMode


document.getElementById('light-mode-btn').addEventListener('click', function () {
    document.body.classList.remove('dark-mode');
    document.body.classList.add('light-mode');
    document.getElementById('light-mode-btn').classList.add('active');
    document.getElementById('dark-mode-btn').classList.remove('active');
});

document.getElementById('dark-mode-btn').addEventListener('click', function () {
    document.body.classList.remove('light-mode');
    document.body.classList.add('dark-mode');
    document.getElementById('dark-mode-btn').classList.add('active');
    document.getElementById('light-mode-btn').classList.remove('active');
});



// Script For Nav HamBurger Icon



$(document).ready(function(){
    $(".hamburger").click(function(){
      $(this).toggleClass("is-active");
    });
  });