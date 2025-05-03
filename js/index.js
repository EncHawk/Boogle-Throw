let Header = "";
let Body="";

// let objArray=[{
//   title:''
// }];

document.getElementById('header-input').addEventListener('input', saveHeader); // use input because it doesnt call the header function instantly like the keypress does
// also keypress is old and is not used in most browsers these days

document.getElementById('body-input').addEventListener('input', saveBody);

// loading all the existing data to the index page from the local storage.
loadData();


function saveHeader(){ //logic for the header data to be stored
  if(Header.length<=50){
    if(Header!=""){ // if its empty itll just replace, else it appends to it.
      Header = document.getElementById('header-input').value;
    }
    else{
      Header += document.getElementById('header-input').value;
    }
    
    // localStorage.setItem('header-text',Header);
    // console.log(Header); // test for the running for header, because js test cases are shite
    // document.getElementById('txt-test-cont').innerHTML = localStorage.getItem('header-text');
  }
  else{
    alert('crossed the 50 word limit for headers, modify it or cry about it :)');
  }
}

function saveBody() {
  Body = document.getElementById('body-input').value;
  // localStorage.setItem('body-text', Body);
  // console.log(Body); // to check what is being stored inside the body
  // document.getElementById('txt-test-cont').innerHTML= localStorage.getItem('body-text');
}


//test text to add into the created element

const userResponse= []; // its not a test, i dont have the patience to fix the name. 
// TODO: fix this name
const storedData = JSON.parse(localStorage.getItem('user-data-array')) || [];
userResponse.push(...storedData); // ... allows the unpacking of elements inside as push expects only one element and not an array.

// let counterVar=0;


document.getElementById('create-btn').addEventListener('click', ()=>{ // clicking the create button makes js to create a div that will store the boxes
  
  if(Header.length>0 || Body.length>0){
     userResponse.push({
      title:Header,
      content: Body,
      date: getTodayDate()
    });
    localStorage.setItem('user-data-array', JSON.stringify(userResponse));
    
    
    createCard(userResponse);
  }
  else{
    alert('fill the boxes before creating a new container :)');
  }
  
  Body= '';
  Header= '';
 
  // counterVar++; // increments the counter to access the next element in the array.
  // console.log(userResponse);
});
// error fix: the cardholder couldnt access the newBox since it was outside. added it inside therefore it can see the existense of newBox


function createCard(userResponse){
  let size = userResponse.length;
  let object= userResponse[size-1]; // just checks the last element in the responses array to create new card for just the last object
  
  const newBox= document.createElement('div');  
  newBox.className="container-fluid card";
  // newBox.innerHTML=testTxt[0];

  const iTitle = document.createElement('h3');
  iTitle.className="card-inner-title";
  iTitle.innerHTML=object.title;

  const iContent = document.createElement('p');
  iContent.className="card-inner-content";
  iContent.innerHTML=object.content;

  const iDate = document.createElement('p');
  iDate.className="card-inner-date";
  iDate.innerHTML=object.date;



  let cardHolder= document.getElementById('outer-wrapper');
  newBox.appendChild(iTitle);
  newBox.appendChild(iContent);
  newBox.appendChild(iDate);
  cardHolder.appendChild(newBox);
  
}

function addData(dataArray){
  dataArray.forEach((object)=>{
    const newBox= document.createElement('div');  
    newBox.className="container-fluid card";
    // newBox.innerHTML=testTxt[0];

    const iTitle = document.createElement('h3');
    iTitle.className="card-inner-title";
    iTitle.innerHTML=object.title;

    const iContent = document.createElement('p');
    iContent.className="card-inner-content";
    iContent.innerHTML=object.content;

    const iDate = document.createElement('p');
    iDate.className="card-inner-date";
    iDate.innerHTML=object.date;



    let cardHolder= document.getElementById('outer-wrapper');
    newBox.appendChild(iTitle);
    newBox.appendChild(iContent);
    newBox.appendChild(iDate);
    cardHolder.appendChild(newBox);
  });
}

function loadData(){
  const localData = JSON.parse(localStorage.getItem('user-data-array')) || []; // if it exists in LS then take it else become an empty array
  if(localData!=[]){
    console.log(localData);
    addData(localData);
  }
  else{
    alert('ntg to retrieve from the local storage, feed me daddy im hungry :)');
  }
}

function getTodayDate() { // gpt function to get the date in a specific format
  const today = new Date();
  const dd = String(today.getDate()).padStart(2, '0');
  const mm = String(today.getMonth() + 1).padStart(2, '0'); // January is 0
  const yyyy = today.getFullYear();
  return `${dd}/${mm}/${yyyy}`;
}

document.getElementById('clear-btn').addEventListener('click', ()=>{
  setTimeout(()=>{clearFn()},650);
});

function clearFn(){
  localStorage.clear();
  location.reload();
}