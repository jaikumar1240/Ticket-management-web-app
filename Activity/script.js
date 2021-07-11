//making changes
let allFilters=document.querySelectorAll(".filters");
let ticketContainer=document.querySelector(".ticket-container");
let openModal=document.querySelector(".open-modal");
let closeModal=document.querySelector(".close-modal");
let ticketModalOpen=false;
let istexttype=false;

for(let i=0;i<allFilters.length;i++){
    allFilters[i].addEventListener("click",selectFilter);
}
function selectFilter(e){
let filterselected=e.target.classList[1];
console.log(filterselected);
if(ticketContainer.classList.length>1){
    ticketContainer.classList.remove(ticketContainer.classList[1]);
}
ticketContainer.classList.add(filterselected);
}
openModal.addEventListener("click",openTicketModal);
closeModal.addEventListener("click",closeTicketModal);
function closeTicketModal(e){
    console.log("closed");
}
function openTicketModal(e){
    if(ticketModalOpen){
        return;
    }
    let ticketModal=document.createElement("div");
    ticketModal.classList.add("ticket-modal");
    ticketModal.innerHTML= `<div class="ticket-text" contentEditable= "true" spellcheck= "false">Enter Your Text !</div>
    <div class = "tickets-filter">
        <div class="ticket-filter red selected-filter" ></div>
        <div class="ticket-filter green"></div>
        <div class="ticket-filter blue"></div>
        <div class="ticket-filter yellow"></div>
    </div>`;
    document.querySelector("body").append(ticketModal);
    ticketModalOpen=true;
    let tickettext=document.querySelector(".ticket-text");
    tickettext.addEventListener("keypress",handlekeyPress);

    let ticketfilter=ticketModal.querySelectorAll(".ticket-filter");
    for(let i=0;i<ticketfilter.length;i++){
        ticketfilter[i].addEventListener("click",function(e){
            if(e.target.classList.contains("selected-filter")){
                return;
            }
            document.querySelector(".selected-filter").classList.remove("selected-filter");
            e.target.classList.add("selected-filter");
        })
    }
}
function handlekeyPress(e){
    if(!istexttype){
        istexttype=true;
        e.target.textContent="";
    }
}
function closeTicketModal(e){
    if(ticketModalOpen){
        document.querySelector(".ticket-modal").remove();
        ticketModalOpen=false;
        istexttype=false;
    }
}