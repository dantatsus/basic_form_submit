// İşlemler:

/* 
1. Formu Seç
2. Input Bilgisini UL içerisine ekle
3. Form içindeki Bilgiyi Sıfırla
4. Eğer forma bilgi girilmezse kullaniciyi uyar
*/


let userFormDOM = document.querySelector("#userForm")
userFormDOM.addEventListener('submit', formHandler)
const alertDOM = document.querySelector("#alert")

const alertFunction = (title, message, className="warning") => `<div class="alert alert-${className} alert-dismissible fade show" role="alert">
  <strong>${title}</strong> ${message}.
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>`

function formHandler(event){
    event.preventDefault()
    const USER_NAME = document.querySelector('#username')
    const SCORE = document.querySelector('#score')

    if (USER_NAME.value && SCORE.value){
        addItem(USER_NAME.value, SCORE.value)
        USER_NAME.value = ""
        SCORE.value = ""
    }else {
        alertDOM.innerHTML = alertFunction(
            "Baslik bilgisi", 
            "Eksik bilgi girdiniz!",
            "danger"
        )
    }
}

let userListDOM = document.querySelector("#userList")
const addItem = (username, score) => {
    let liDOM = document.createElement('li')
    liDOM.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center')
    liDOM.innerHTML = `${username}
    <span class="badge text-bg-primary rounded-pill">${score}</span>`
    userListDOM.append(liDOM)
}
