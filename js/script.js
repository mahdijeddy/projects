// ----------------------------classes------------------------------//
let ui =new UI()

//----------------------------variables-----------------------------//
let changeBtn = document.querySelector("#changebtn");
    changeBtn2 = document.querySelector(".changebtn");
let form = document.querySelector(".form");
    loginForm=document.querySelector('#login')
    signupForm=document.querySelector('#signup')
    alertPlace=document.querySelector('.head')
    userName=document.querySelector('#userName')
    password=document.querySelector('#password')
    loginBtn=document.querySelector('#btn')



// ---------------------------events--------------------------------//
events();
function events() {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
  });

  changeBtn.addEventListener("click", changeForm);
  changeBtn2.addEventListener("click", changeForm2);
  userName.addEventListener('blur',check)
  password.addEventListener('blur',check2)
  
}

// ------------------------functions--------------------------------//
function changeForm() {
  signupForm.style.display="flex"
    loginForm.style.display="none"
    
}
function changeForm2() {
  signupForm.style.display="none"
  loginForm.style.display="flex" 
}

function check(){
  if (userName.value=="") {ui.disagree(userName)
    ui.Alert('لطفا نام کاربری تان را تکمیل کنید')
  }else if (userName.value.length<3 ){ui.disagree(userName)
    ui.Alert('نام کاربری اشتباه وارد شده است')
  }else{
    ui.agree(userName)
  }
}
function check2(){
  if (password.value=="") {ui.disagree(password)
    ui.Alert('پسوردی وارد نشده')
  }else if (password.value.length<5 ){ui.disagree(password)
    ui.Alert('پسورد اشتباه')
  }else{
    ui.agree(password)
  }
}

