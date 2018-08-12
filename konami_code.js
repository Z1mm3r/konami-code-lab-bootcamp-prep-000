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
  element.innerHTML = ("Marker");
  document.body.appendChild(element);
  element.addEventListener('keydown',konamiCodeCheck)
  element.addEventListener('click',test(e){alert("hmm");})
}

function konamiCodeCheck(e)
{
  const key = e.key;
  
  if(key == codes[index])
  {
    index++;
    
    if(index == codes.length)
    {
      alert("Congrats!");
      
      index = 0;
      
    }
  }
  
  else
  {
    index = 0;
  }
  
  
}
