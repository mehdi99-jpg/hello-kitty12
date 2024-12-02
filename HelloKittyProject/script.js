// script.js
document.getElementById('meow-button').addEventListener('click', function() {
    const meowSound = document.getElementById('meow-sound');
    meowSound.play();
    alert('Meow! Hello Kitty says hi!');
});
