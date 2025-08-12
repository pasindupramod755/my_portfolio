var i = 0;
var txt = 'Trainee Full Stack Developer';
var speed = 150;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, 100);
  } 
}
typeWriter();