function validation() {
  if (FirstName()) {
    if (LastName()) {
      if (Email()) {
        if (Password()) {
            alert("yes")
          return true
        }
      }
    }
  }
  return false
}

function FirstName () {
  const first = document.getElementsByName('fname')[0].value
  const FirstName = first.length

  if (FirstName == 0) {
    document.querySelector('.error-msg-f').style.display = 'block'
    document.querySelector('.error-f').style.visibility = 'visible'
    return false
  }
  return true
}

function LastName () {
  const last = document.getElementsByName('lname')[0].value
  const LastName = last.length

  if (LastName == 0) {
    document.querySelector('.error-msg-l').style.display = 'block'
    document.querySelector('.error-l').style.visibility = 'visible'
    return false
  }
  return true
}

function Email () {
  const email = document.getElementsByName('email')[0]
  const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

  if (email.value.match(mailformat)) {
    return true
  }
  document.querySelector('.error-msg-e').style.display = 'block'
  document.querySelector('.error-e').style.visibility = 'visible'
  return false
}

function Password () {
  const pass = document.getElementsByName('password')[0].value
  const password = pass.length

  if (password == 0) {
      alert("enter the password");
    document.querySelector('.error-msg-p').style.display = 'block'
    document.querySelector('.error-p').style.visibility = 'visible'
    return false
  }
  return true
}
