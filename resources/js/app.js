import '../css/app.css'

const email = document.querySelector('.email')
const notif = document.querySelector('.notif')
email.addEventListener('click', async () => {
   await navigator.clipboard.writeText(email.innerHTML)
    alert('Email copiée')
})
