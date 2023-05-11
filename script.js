let myLeads = [];
let inputEl = document.getElementById('input-el');
let inputBtn = document.querySelector('#input-btn');
let ulEl = document.getElementById('ul-El');

inputBtn.addEventListener('click' , function(){
        myLeads.push(inputEl.value);
        
        for(let i = 0; i<myLeads.length ; i++){
           ulEl.textContent +=myLeads[i] + " ";
        }
})

