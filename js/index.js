let text = "";

document.getElementById('header-input').addEventListener('input', saveText);


function saveText(){
  if(text!=''){
    text = document.getElementById('header-input').value;
  }
  else{
    text += document.getElementById('header-input').value;
  }
  
  localStorage.setItem('header-text',text);
  console.log(text);
  document.getElementById('txt-test-cont').innerHTML = localStorage.getItem('header-text');
}


