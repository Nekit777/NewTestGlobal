function validation (form) {
  var userName = form.userName.value,
      lastName = form.lastName.value,
      bithday = form.bithday.value,
      gender = form.gender.value,
      country = form.country.value,
      email = form.email.value,
      password = form.password.value,
      address = form.address.value,
      dataNotes = form.dataNotes.value;


  var pat = /[0-9a-z_-]+@[0-9a-z_-]+\.[a-z]{2,5}/i;


  if(userName == '' || userName == ' ') {
    errorName.innerHTML = 'Вы не ввели имя';
    // errorName.style.color = 'red';
    // userName.style.border = '1px solid red';
    document.getElementById('userName').classList.add('errorBorder');
    errorName.classList.add('error');
    return false;
  }
  else if (lastName == '' || lastName == ' ') {
    errorLastName.innerHTML = 'Вы не ввели фамилию';
    document.getElementById('lastName').classList.add('errorBorder');
    errorLastName.classList.add('error');
    return false;
  }

  if ( email == '' || email == ' ') {
    errorEmail.innerHTML = 'Вы не ввели email';
    document.getElementById('email').classList.add('errorBorder');
    errorEmail.classList.add('error');
    return false;
  }

  else if (pat.test(email) == false){
    errorEmail.innerHTML = 'Не правильный емейл!';
    document.getElementById('email').classList.add('errorBorder');
    errorEmail.classList.add('error');
    return false;
  }


  else if (password == '' || password == ' ') {
    errorPassword.innerHTML = 'Вы не ввели пароль';
    document.getElementById('password').classList.add('errorBorder');
    errorPassword.classList.add('error');
    return false;
  }

  else if (bithday == '' || bithday == ' ') {
    errorBithday.innerHTML = 'Вы не ввели дату рождения';
    document.getElementById('bithday').classList.add('errorBorder');
    errorBithday.classList.add('error');
    return false;
  }


  else if (!gender) {
    errorGender.innerHTML = 'Вы не выбрали пол';
    errorGender.classList.add('error');
    return false;
  }


  else if (country == 'Country*') {
    errorCountry.innerHTML = 'Вы не ввели страну';
    errorCountry.classList.add('error');
    return false;
  }

  else if (address == '' || address == ' ') {
    errorAddress.innerHTML = 'Вы не ввели адрес';
    document.getElementById('address').classList.add('errorBorder');
    errorAddress.classList.add('error');
    return false;
  }

  else {
    alert('Validation passed.');
    return true;
  }



}
