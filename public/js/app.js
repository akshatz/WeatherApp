console.log('Client side JS file loaded')

const weatherForm = document.querySelector('form')
const  search = document.querySelector('input')
const messageOne = document.querySelector('#error')
const messageTwo = document.querySelector('#output')

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()
    
    const location = search.value
    messageOne.textContent = 'Loading...'
    messageTwo.textContent = ''
    console.log(messageOne.textContent)
    fetch('http://localhost:3000/weather?address=' + location).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                messageOne.textContent = data.error
            } else {
                messageOne.textContent = data.location
                messageTwo.textContent = data.forecast
            }
        }) 
    })
    

})