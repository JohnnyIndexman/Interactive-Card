const form = document.querySelector('form')
const confirm = document.querySelector('#confirm')
const contin = document.querySelector('#continue')
const newError = document.querySelectorAll('.error')
const input = document.querySelectorAll('input');
const blank = document.querySelectorAll('.blank')
const successful = document.querySelector('.success')
const card_num = document.querySelector('#number')
const card_name = document.querySelector('#name')
const card_date = document.querySelector('#date')
const card_cvc = document.querySelector('#back-num')
const cardName = document.querySelector('#card-name')
const number = document.querySelector('#card-num')
const day = document.querySelector('#card-day')
const month= document.querySelector('#card-month')
const cvc = document.querySelector('#cvc')
const date1 = document.querySelector('#date1')
const date2 = document.querySelector('#date2')

/*function for form submission*/

form.addEventListener('submit', (e) =>{
    e.preventDefault()


    if(cardName.value.trim() === ''){
                newError[0].textContent = 'field is required.'
                newError[0].style.display = 'block'
        
    }else if(number.value.length < 16){
                newError[1].textContent = "Wrong format. Numbers should not be less than 16."
                newError[1].style.display = 'block'
        
    }
    else if(day.value.trim() === '' || day.value.length < 2 || day.value.trim() > 12){
                blank[0].style.display = 'block'
                blank[0].textContent = `Can't be blank.`
        
    }

    else if(month.value.trim() ==='' || month.value.length <2) {
                blank[1].style.display = 'block'
                blank[1].textContent = `Can't be blank.` 
    }
    else if(cvc.value.trim() ==='' || cvc.value.length <3){
                blank[2].style.display = 'block'
                blank[2].textContent = `Can't be blank.`
    }
    else{
        window.location = '#success'
        successful.style.display = 'block'
        form.classList.add('hidden')
    }
})

/*success return function*/

contin.addEventListener('click', (e) =>{
    e.preventDefault()

    window.location = '#form'
    successful.style.display = 'none'
    form.classList.remove('hidden')
    blank.forEach(b =>{
        b.style.display = 'none'
    })
    newError.forEach(n =>{
        n.style.display = 'none'
    })
})

/*input function*/
cardName.addEventListener('change', (e) =>{
        card_name.textContent = cardName.value
    })

number.addEventListener('change', (e) =>{
        card_num.textContent = number.value
    })

cvc.addEventListener('change', (e) =>{
        card_cvc.textContent = cvc.value
    })

day.addEventListener('change', (e) =>{
        date1.textContent = day.value
    })

month.addEventListener('change', (e) =>{
        date2.textContent = month.value
    })