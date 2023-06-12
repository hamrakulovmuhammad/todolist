let tbody = document.querySelector('tbody')
let form = document.forms.form
let Name = document.querySelector('.name')
let Age = document.querySelector('.age')
let modal_bg = document.querySelector('.modal_bg')
let change_name = document.querySelector('.change_name')
let change_age = document.querySelector('.change_age')
let form_change = document.querySelector('.form_change')
let change = document.querySelector('.change')


console.log(Name);
let date = new Date
date = date.getFullYear()
let data = []
let list


function reload(params) {
    let tr = document.createElement('tr')
    let num = document.createElement('td')
    let names = document.createElement('td')
    let year = document.createElement('td')
    let icons = document.createElement('td')
    let edit = document.createElement('img')
    let delet = document.createElement('img')

    tr.classList.add('tr')
    num.classList.add('num')
    names.classList.add('names')
    year.classList.add('year')
    icons.classList.add('icons')
    edit.classList.add('edit')
    delet.classList.add('delet')

    for (let item of data) {
        num.innerHTML = item.num
        names.innerHTML = item.name
        year.innerHTML = item.age
        edit.src = "img/edit.png"
        delet.src = "img/delete.png"

        tbody.append(tr)
        tr.append(num, names, year, icons)
        icons.append(edit, delet)

        delet.onclick = () => {
            data = data.filter(el => el.id !== item.id)
            tr.remove()
        }

        edit.onclick = () => {
            modal_bg.style.display = 'block'
            for (let elem of data) {
                change_name.value = elem.name
                change_age.value = elem.age
            }
        }
    }

    change.onclick = () => {
        tr.remove()
    }
}
form_change.onsubmit = (event) => {
    event.preventDefault();
    modal_bg.style.display = 'none'
    let list = {
        id: Math.floor(Math.random() * 100) + 1,
        num: data.length + 1,
        name: change_name.value,
        age: change_age.value
    }

    if (change_name.value.length !== 0 && change_age.value.length !== 0) {
        data.push(list)
    }
    reload()
}

form.onsubmit = (event) => {
    event.preventDefault();
    let list = {
        id: Math.floor(Math.random() * 100) + 1,
        num: data.length + 1,
        name: Name.value,
        age: Age.value
    }

    if (Name.value.length !== 0 && Age.value.length !== 0) {
        data.push(list)
    }
    console.log(data);
    reload()
}

