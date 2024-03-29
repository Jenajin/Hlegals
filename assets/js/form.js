//ФОРМИА ДЛЯ КОНТАКТІВ (ВАЛІДАЦІЯ ТА ЗБІР ДАНИХ)
function formContact() {
  const btnSubmit = document.querySelector('.form-btn')
  const form = document.querySelector('.contact-form')
  const nameInput = form.name
  const textAreaIput = form.text
  const telInput = form.tel
  const emailInput = form.email

  const inputs = [
    {
      name: 'Ім`я',
      inputEl: nameInput,
      validationRules: [isName],
      isValide: false,
    },

    {
      name: 'Повідомлення',
      inputEl: textAreaIput,
      validationRules: [isTextarea],
      isValide: false,
    },

    {
      name: 'Номер телефону',
      inputEl: telInput,
      validationRules: [isNumbPhone],
      isValide: false,
    },

    {
      name: 'Електронна адреса',
      inputEl: emailInput,
      validationRules: [isEmail],
      isValide: false,
    }
  ]

  // функції перевірки умов
  function isName(value, element) {
    const isValide = value ? value.trim().length > 1 : false

    if (!isValide) {
      error(element, 'Ввведіть будь ласка своє ім`я')
      return false
    }

    successfully(element)
    return true
  }

  function isTextarea(value, element) {
    const isValideEmty = value ? value.trim() : false
    const isValideLength = value ? value.trim().length > 20 : false

    if (!isValideEmty) {
      error(element, 'Введіть будь ласка текст')
      return false
    }
    if (!isValideLength) {
      error(element, 'Текст повинен бути не менше 20 символів')
      return false
    }

    successfully(element)
    return true
  }

  function isNumbPhone(value, element) {
    const isValide = value ? is.nanpPhone(value) : false

    if (!isValide && !emailInput.value) {
      error(element, 'Введіть будь ласка номер телефону')
      return false
    }

    successfully(element)
    return true
  }

  function isEmail(value, element) {
    const isValide = value ? is.email(value) : false

    if (!telInput.value && !isValide) {
      error(element, 'Будь ласка адрес електронної пошти')
      return false
    }

    successfully(element)
    return true
  }

  // функції повідомлення про помилку або успішність
  function successfully(element) {
    const er = element.parentNode.querySelector('small');
    er.innerText = ''
  }

  function error(element, message) {
    const er = element.parentNode.querySelector('small')
    er.innerText = message
    er.style.color = 'red'
  }

  // функція загальної валідації
  function validation() {
    const arrValide = []

    inputs.forEach(el => {
      el.validationRules.map(func => {
        arrValide.push(func(el.inputEl.value, el.inputEl))
      })
    })

    if (arrValide.every(el => el === true)) {
      const data = {} // зберігання даних заповнення форми
      inputs.forEach(el => {
        data[el.name] = el.inputEl.value
      })

      form.submit() // відправляємо форму на сервер
      console.log(data)
    }
  }

  // івенти
  nameInput.addEventListener('input', (e) => {
    successfully(e.target)
  })

  textAreaIput.addEventListener('input', (e) => {
    successfully(e.target)
  })

  telInput.addEventListener('input', (e) => {
    successfully(e.target)
  })

  emailInput.addEventListener('input', (e) => {
    successfully(e.target)
  })

  btnSubmit.addEventListener('click', (e) => {
    e.preventDefault()
    validation()
  })

}
formContact()