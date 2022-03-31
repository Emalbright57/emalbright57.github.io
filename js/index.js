
function buttonIsClicked() {
  document.getElementById('button-1').classList.toggle('was-clicked');
}

function buttonHover(){
    document.getElementById('button-2').classList.toggle('mouse-hover');
}

function windowLoaded(){
  console.log('loaded ok!');
  document.getElementById('button-1').addEventListener('click', buttonIsClicked);

  document.getElementById('button-2').addEventListener('mouseover', buttonHover);
}

window.onload = windowLoaded;
