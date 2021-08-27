let input = document.getElementById('input');

document.body.onload = addElement;
function myFunction(){
}
function addElement() {
        my_div = document.getElementById("cards");
  } 
    
    (document).createElement('div')
  
  document.onload=function(){
    }

function myFunction() {
};

function a() {
    my_div = document.getElementById("cards");
    console.log(my_div)
    my_div.querySelectorAll('div').forEach(function(element) {
     if(element.innerHTML.includes(input.value)){
       console.log(element)
        element.className="card"
      }
      else {
        element.className="card2"
      }
  });
}
function seemore() {
  //
}
   const button = document.querySelector('input');
button.addEventListener("keyup", a);
console.log(button)
const moreButton = document.querySelector('button');
moreButton.addEventListener("click", seemore);
module.exports=myFunction;