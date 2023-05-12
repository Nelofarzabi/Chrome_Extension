let myLeads = [];
let inputEl = document.getElementById('input-el');
let inputBtn = document.querySelector('#input-btn');
let ulEl = document.getElementById('ul-El');

inputBtn.addEventListener('click' , function(){
        myLeads.push(inputEl.value);
        inputEl.value=" ";
        renderLeads();
})
    function renderLeads(){
        let listItems = "";
        for(let i = 0; i < myLeads.length ; i++){
        // listItems += "<li>" + "<a target='_blank' href='" + myLeads[i] + "'>" + myLeads[i] +"</a>" + "</li>";
        listItems += `
            <li>
                <a target='_blank' href='${myLeads[i]}'>
                ${myLeads[i]}
                </a>
            </li>
        `
        
            }
        ulEl.innerHTML = listItems;
    }

