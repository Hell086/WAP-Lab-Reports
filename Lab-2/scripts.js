const FormInput = document.getElementById('container_add_note')
const NoteInput = document.getElementById('txt_add_note')
const notes = document.querySelector('.notes')

//cold start problem
let counter = parseInt(localStorage.getItem('counter')) || 0

//WAP to count the number of clicks
//Wap to commit key value of note to local storage
//Wap to read from local storage and update the ui initially during page load

for(let j=1; j<=counter; j++)
{   
    //let for bhitra matra define vaxa so it doesn't conflict
    let key = `user${j}`
    let value = localStorage.getItem(key)
    if(value)  //if(value!=null)
        addNoteToDOM(key,value)
}
FormInput.addEventListener('submit', function(e) {
    e.preventDefault();
    ++counter

    localStorage.setItem('counter',counter)
    
    let key = `user${counter}`
    let value = NoteInput.value
    localStorage.setItem(key,value)

    addNoteToDOM(key,value)
    console.log(NoteInput.value)
})

notes.addEventListener('click', function(e)
{   //Helps to delete the list
    if(e.target.classList.contains('btn_delete')){
        const container = e.target.parentElement
        let key = container.getAttribute('data-key')
        localStorage.removeItem(key)

        container.remove()
}
    //e.target j ma click gryo tei return hunxa
}
)
notes.addEventListener('change', function(e) //only applies to checkbox
{   
    //Check box true or false in local storage
    if(e.target.classList.contains('checkbox')){
    const container = e.target.parentElement
    let key = container.getAttribute('data-key')
    localStorage.setItem(`${key}_checked`,e.target.checked)//User 1 already exist
    }
   
}
)


function addNoteToDOM(key, noteName) {
    notes.insertAdjacentHTML('beforeend', `
            <div class="container_new_note" data-key="${key}">
            <input class="checkbox" type="checkbox">  

            <div class="note_name_display">${noteName}</div>

            <button class="btn_delete">Delete</button>
            </div>

    `);
}
//What is local storage data kasari read grni 