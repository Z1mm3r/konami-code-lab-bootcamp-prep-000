const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];

let index = 0;

function init() 
{
  const element = doucment.createElement('div');
  document.body.appendChild(element);
  element.addEventListener('keydown',konamiCodeCheck(e))
}

function konamiCodeCheck(e)
{
  const key = e.key;
  
  if(key === codes[index])
  {
    index++;
  }
}
