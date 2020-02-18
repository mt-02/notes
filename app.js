const addform = document.querySelector('.add')
const list = document.querySelector('.todo')

   const genetemp = todo =>{
       const html =`
       <li class="list-group-item d-flex justify-content-between align-items-center">
            <span>${todo}</span>
            <i class="fa fa-trash delete" aria-hidden="true"></i>
        </li>
        `
        list.innerHTML += html
   }

    addform.addEventListener('submit', e =>{

    e.preventDefault()
    const todo =addform.add.value.trim()
    
    if(todo.length){
    genetemp(todo);
    addform.reset()
    }

    list.addEventListener('click', e =>{
       if(e.target.classList.contains('delete'))
       e.target.parentElement.remove() 

    })


})