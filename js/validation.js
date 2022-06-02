//form validation- checkout page//


const postcode = document.getElementById('post')
const form = document.getElementById('form')
const errorElement = document.getElementById('error')


form.addEventListener('submit', (e) => {
    let messages =[]
    if (postcode.value.length > 4) {
        messages.push('Invalid postcode entered. 4 digits only.')
    }

    }
})

