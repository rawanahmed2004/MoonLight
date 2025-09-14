// document.getElementById('register').onsubmit = function () {
//   let phoneInput = document.getElementById('phone').value;
//   let phReVal = /^\+\d{2,3}\s\d{3}\s\d{3}\s\d{4,}$/g;
//   let validationResult = phReVal.test(phoneInput);
//   console.log(validationResult);
//   validationResult === false
//     ? alert('Incorrect input!')
//     : alert('correct input!');
//   // let nameReVal = /[a-zA-Z]+/gi;
//   // let pasReVal = /\w+\W?/gi;
//   // let emReVal = /\w+@\w+\.(com|net)/gi;
// };

// let phoneNumberRegex = /^\+\d{1,3}\s\d{2}\s\d{3}\s\d{4}$/gi;
// let dateRegex = /^(\d{2}[\/-\s]?){2}\d{2,4}$/g;

// let isVallied = nameRegex.test(userName);

let form = document.getElementById('form');
form.onsubmit = function(e) {
    e.preventDefault();
 let userName = document.getElementById('name').value.trim();
    let nameRegex = /^[a-zA-Z]+(?:\s[a-zA-Z]+)*$/i;
    if(!nameRegex.test(userName)) {
        alert(' Wrong name!');
        return;  }

      let userEmail = document.getElementById('email').value.trim();
    let emailRegex = /^[\w.-]+@[a-zA-Z]+\.(com|org|net)$/i;
    if(!emailRegex.test(userEmail)) {
        alert(' Wrong email!');
        return;
    }
     let userPassword = document.getElementById('password').value;
    let passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[\W_]).{6,}$/;
    if(!passwordRegex.test(userPassword)) {
        alert(' Weak password!');
        return;
    }
      alert(' All inputs are valid!');
    form.submit(); 
};
