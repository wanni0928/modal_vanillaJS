// const modalContainer = document.querySelector(".modal-container");
const modal = document.querySelector('.js-modal');
// const btnOpen = document.querySelectorAll("js-button-open");
const btnOpen = document.getElementsByClassName("js-button-open")[0];
const btnYes = document.getElementsByClassName("js-button-yes")[0];
const btnNo = document.getElementsByClassName("js-button-no")[0];
const closeBtn = document.getElementsByClassName("js-close")[0];

const modalClassName = modal.className;

// console.dir(modal);
console.log(closeBtn);

btnYes.onclick = function() {
    modal.className = modalClassName + " disable";
    //To Do something when you choose 'yes'
}

btnNo.onclick = function() {
    modal.className = modalClassName + " disable";
    //To Do something when you choose 'no'
}

// console.log(modalClassName.search("disable"));

btnOpen.onclick = function(){
    modal.className = modalClassName + " enable";
}

closeBtn.onclick = function() {
    modal.className = modalClassName + " disable";
}

function toggleModal(){
    if(modal.className.search("disable") > 0){
        modal.className = modalClassName + " enable";
    }else{
        modal.className = modalClassName + " disable";
    }
}

function modalClick(event){
    if(event.target == modal){
        toggleModal();
    }
}
modal.addEventListener("click", modalClick);