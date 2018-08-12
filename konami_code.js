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
  const element = document.createElement('div');
  document.body.appendChild(element);
  element.addEventListener('keydown',konamiCodeCheck())
}

function konamiCodeCheck(e)
{
  const key = e.key;
  
  if(key === codes[index])
  {
    index++;
    
    if(index === codes.length)
    {
      alert("Congrats!");
    }
  }
  
  else
  {
    index = 0;
  }
  
  
}
