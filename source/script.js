const sign = document.querySelector('#help');
const newForm = document.querySelector('#newForm');
const form = document.querySelector('.form-peice ');
const signForm = document.querySelector('.signup')
const loginForm = document.querySelector('.login-form');
const brand = document.querySelector('.brand');
const loginContainer = document.querySelector('#login-form');
const inputs = document.querySelectorAll('.input');
const label = document.querySelectorAll('#active');

inputs.forEach((input) => {
    input.addEventListener('click', () => {
     label.forEach((label) => {
    label.classList.add('active')
     })
   })
   
})

    sign.addEventListener('click', () => {
        if (form.classList.contains("switched")) {
            form.classList.remove("switched");
            signForm.classList.add('right')
            brand.style.right = '120px';
            brand.style.minHeight = '590px';
            loginContainer.style.width = '100%'
        }
    })

    newForm.addEventListener('click', () => {
        if (form.classList.contains("switched")) {
            form.classList.remove("switched");
        } else {
            form.classList.add("switched");
            signForm.classList.remove('right')
            signForm.classList.add('left')
            brand.style.right = '0';
            brand.style.minHeight = '540px'
        }
    })