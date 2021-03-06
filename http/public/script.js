const ul = document.querySelector('ul')
const input = document.querySelector('input')
const form = document.querySelector('form')

async function load() {
    const res = await fetch('http://localhost:3000/')
        .then((data) => data.json())

    // res.urls.map(({name, url}) => addElement({name, url}))
    res.urls.map(url => addElement(url))
}

load()

function addElement({ name, url }) {
    const li = document.createElement('li')
    const a = document.createElement('a')
    const trash = document.createElement('span')

    a.href = url
    a.innerHTML = name
    a.target = '__blank'

    trash.innerHTML = 'X'
    trash.onclick = () => removeElement(trash)

    li.append(a)
    li.append(trash)
    ul.append(li)
}

function removeElement(el) {
    if (confirm('Tem certeza que deseja deletar?'))
        el.parentNode.remove()
}

form.addEventListener('submit', (event) => {
    event.preventDefault()

    let { value } = input

    if (!value)
        return alert('Preencha o campo')

    const [name, url] = value.split(',')

    if (!url)
        return alert('Formate o texto de maneira correta')

    if (!/^http/.test(url))
        return alert('Digite a url da maneira correta')

    addElement({ name, url })

    input.value = ''
})