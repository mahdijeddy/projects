// ----------------------------classes------------------------------//
let ui = new UI();

//----------------------------variables-----------------------------//
let changeBtn = document.querySelector("#changebtn");
changeBtn2 = document.querySelector(".changebtn");
let form = document.querySelector(".form");
loginForm = document.querySelector("#login");
signupForm = document.querySelector("#signup");
alertPlace = document.querySelector(".head");
userName = document.querySelector("#userName");
password = document.querySelector("#password");
loginBtn = document.querySelector("#btn");
//lsignup form
Name = document.querySelector("#Name");
passwordSignup = document.querySelector("#Password");
phone = document.querySelector("#ph");
Email = document.querySelector("#Email");
btn2 = document.querySelector(".btn2");





// ---------------------------events--------------------------------//
events();
function events() {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
  });

  changeBtn.addEventListener("click", changeForm);
  changeBtn2.addEventListener("click", changeForm2);
  userName.addEventListener("blur", check);
  password.addEventListener("blur", check2);
  //signup form
  Name.addEventListener("blur", check3);
  passwordSignup.addEventListener("blur", check4);
  phone.addEventListener("blur", check5);
  Email.addEventListener("blur", check6);
  //btns
  loginBtn.addEventListener("click", check7);
  btn2.addEventListener("click", check7);
  
}

// ------------------------functions--------------------------------//
function changeForm() {
  signupForm.style.display = "flex";
  loginForm.style.display = "none";
}
function changeForm2() {
  signupForm.style.display = "none";
  loginForm.style.display = "flex";
}

function check() {
  if (userName.value == "") {
    ui.disagree(userName);
    ui.Alert("لطفا نام کاربری تان را تکمیل کنید");
  } else if (userName.value.length < 3) {
    ui.disagree(userName);
    ui.Alert("نام کاربری اشتباه وارد شده است");
  } else {
    ui.agree(userName);
  }
}
function check2() {
  if (password.value == "") {
    ui.disagree(password);
    ui.Alert("پسوردی وارد نشده");
  } else if (password.value.length < 5) {
    ui.disagree(password);
    ui.Alert("پسورد اشتباه");
  } else {
    ui.agree(password);
  }
}
//signupform

function check3() {
  if (Name.value == "") {
    ui.disagree(Name);
    ui.Alert("نام خود را وارد کنید");
  } else if (Name.value.length < 2) {
    ui.disagree(Name);
    ui.Alert("نام صحیح نمیباشد ");
  } else {
    ui.agree(Name);
  }
}
function check4() {
  console.log(passwordSignup.value.length);
  if (passwordSignup.value == "") {
    ui.disagree(passwordSignup);
    ui.Alert("پسورد خود را وارد کنید");
  } else if (
    passwordSignup.value.length < 8 ||
    passwordSignup.value.length > 12
  ) {
    ui.disagree(passwordSignup);
    ui.Alert("رمز بین 8 تا 12 کاراکتر باشد");
  } else {
    ui.agree(passwordSignup);
  }
}
function check5() {
  if (phone.value == "") {
    ui.disagree(phone);
    ui.Alert("شماره تلفن خود را وارد کنید");
  } else if (phone.value.length != 11) {
    ui.disagree(phone);
    ui.Alert("شماره اشتباه");
  } else {
    ui.agree(phone);
  }
}
function check6() {
  if (Email.value == "") {
    ui.disagree(Email);
    ui.Alert("ایمیل خود را وارد کنید");
  } else if (
    Email.value.indexOf("gmail.com") > 1 ||
    Email.value.indexOf("yahoo.com") > 1 ||
    Email.value.indexOf("info.com") > 1
  ) {
    ui.disagree(Email);
    ui.agree(Email);
  } else {
    ui.Alert("ایمیل اشتباه");
    ui.disagree(Email);
  }
}
function check7() {
  let Err=document.querySelectorAll('.error')
  if (Err.length>=0) {
    ui.Alert('فرم را تکمیل نکرده اید')
  }
   
}
