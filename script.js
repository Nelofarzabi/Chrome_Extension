let myLeads = [];
let inputEl = document.getElementById('input-el');
let inputBtn = document.querySelector('#input-btn');
let ulEl = document.getElementById('ul-El');
let deleteBtn = document.getElementById("delete-btn");

 
 let leadsFromLocalStorage =JSON.parse(localStorage.getItem("myLeads")) ;
 

console.log(leadsFromLocalStorage);
if(leadsFromLocalStorage){
    myLeads=leadsFromLocalStorage;
    renderLeads();
}

deleteBtn.addEventListener("dblclick" , function(){
    localStorage.clear();
    myLeads=[];
    renderLeads();
})


inputBtn.addEventListener('click' , function(){
        myLeads.push(inputEl.value);
        inputEl.value=" ";
        localStorage.setItem("myLeads" , JSON.stringify(myLeads));
        renderLeads();

        console.log(localStorage.getItem("myLeads"))
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



