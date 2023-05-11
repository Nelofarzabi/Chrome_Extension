let myLeads = [];
let inputEl = document.getElementById('input-el');
let inputBtn = document.querySelector('#input-btn');
let ulEl = document.getElementById('ul-El');

inputBtn.addEventListener('click' , function(){
        myLeads.push(inputEl.value);
        renderLeads();
        
})


function renderLeads(){
    let listItems = "";
    for(let i = 0; i < myLeads.length ; i++){
    listItems += "<li>" + myLeads[i] + "</li>";
         }
    ulEl.innerHTML = listItems;
}

