let Header = "";
let Body="";

// let objArray=[{
//   title:''
// }];

document.getElementById('header-input').addEventListener('input', saveHeader); // use input because it doesnt call the header function instantly like the keypress does
// also keypress is old and is not used in most browsers these days

document.getElementById('body-input').addEventListener('input', saveBody);



function saveHeader(){ //logic for the header data to be stored


  if(Header.length<=50){
    if(Header!=""){ // if its empty itll just replace, else it appends to it.
      Header = document.getElementById('header-input').value;
    }
    else{
      Header += document.getElementById('header-input').value;
    }
    
    localStorage.setItem('header-text',Header);
    // console.log(Header); // test for the running for header, because js test cases are shite
    document.getElementById('txt-test-cont').innerHTML = localStorage.getItem('header-text');
  }
  else{
    alert('crossed the 50 word limit for headers, modify it or cry about it :)');
  }
}

function saveBody() {
  Body = document.getElementById('body-input').value;
  localStorage.setItem('body-text', Body);
  console.log(Body);
  document.getElementById('txt-test-cont').innerHTML= localStorage.getItem('body-text');
}


//test text to add into the created element

const testTxt= [{
  title:'C++',
  content:'shd code in cpp!!',
  date: '20/12/05'
}];


document.getElementById('create-btn').addEventListener('click', ()=>{ // clicking the create button makes js to create a div that will store the boxes
  
  document.getElementById('body-input').value= '';
  document.getElementById('header-input').value= '';
  
  testTxt.push({
    title:Header,
    content: Body,
    date: '20/12/05'
  });
  
  const newBox= document.createElement('div');  
  newBox.className="container-fluid card";
  // newBox.innerHTML=testTxt[0];

  const iTitle = document.createElement('h3');
  iTitle.className="card-inner-title";
  iTitle.innerHTML=testTxt[1].title;

  const iContent = document.createElement('p');
  iContent.className="card-inner-content";
  iContent.innerHTML=testTxt[1].content;

  const iDate = document.createElement('p');
  iDate.className="card-inner-date";
  iDate.innerHTML=testTxt[1].date;


  let cardHolder= document.getElementById('outer-wrapper');
  newBox.appendChild(iTitle);
  newBox.appendChild(iContent);
  newBox.appendChild(iDate);
  cardHolder.appendChild(newBox);
});
// error fix: the cardholder couldnt access the newBox since it was outside. added it inside therefore it can see the existense of newBox