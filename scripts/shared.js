
let backdroup = document.querySelector('.backdroup')
let modal = document.querySelector('.modal')
let selectPlanBtn = document.querySelectorAll('.plan button')
let modalCloseBtn = document.querySelector('.modal__action--negative')

console.log(selectPlanBtn)

for(let i = 0; i < selectPlanBtn.length; i++) {
    selectPlanBtn[i].addEventListener('click', () => {
        modal.style.display = 'block'
        backdroup.style.display = 'block'

    })
}



backdroup.addEventListener('click', closeModal)
modalCloseBtn.addEventListener('click', closeModal)




function closeModal() {
    backdroup.style.display = 'none'
    modal.style.display = 'none'
}   









