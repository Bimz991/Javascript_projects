const btnE1 = document.querySelector(".btn")
const inputE1 = document.getElementById("input")
const copyIconE1 = document.querySelector(".fa-copy")

btnE1.addEventListener
  ("click", () => {
  createPassword()
  })
copyIconE1.addEventListener("click", () => {
  copyPassword(){
    inputE1.select();
    inputE1.setSelectionRange(0, 9999);
    navigator.clipboard.writeText(inputE1.value);
  }
})
  function createPassword() {
  const chars = "zxcvbnmasdfghjklqwertyuioZXCVBNMASDFGHJKLQWERTYUIO123456789!@#$%^&*(){}[]:"
  const PasswordLength = 14;
  let Password = ""
  for (let index = 0; index < PasswordLength; index++) {
    const randomNum = Math.floor(Math.random() * chars.length);
    Password += chars.substring(randomNum, randomNum + 1);
    
    
  }
    inputE1.value = Password;
  }
