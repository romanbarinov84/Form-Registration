//Чтобы форма не отправлялась
const $regForm = document.getElementById("registration-form");
$regForm.addEventListener("submit", (event) =>{
  event.preventDefault()

  //Получаем элементы
  const $mailInp = document.getElementById("email").value;
  const $passwordInp = document.getElementById("password").value;
  const $confirmPasswordInp = document.getElementById("confirm-password").value;
  const $errorMessage = document.getElementById("error-message");

//Регулярное выражение для имейл
const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
 // Регулярное выражение для пароля (минимум 6 символов, включая буквы и цифры)
 const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;


 try{
    //если выражение не соответствует введенному email
    if(!emailRegex.test($mailInp)){
        $errorMessage.textContent = "Неверный формат email"
        throw new Error("Неверный формат email");
    }
    //Если пароль не соответствует 
    if(!passwordRegex.test($passwordInp)){
        $errorMessage.textContent = "Пароль должен содержать минимум 6 символов, включая буквы и цифры"
        throw new Error("Пароль должен содержать минимум 6 символов, включая буквы и цифры");
    }
    if($passwordInp !== $confirmPasswordInp ){
        $errorMessage.textContent = "Пароли не совпадают"
        throw new Error("Пароли не совпадают")
    }
    //Сохраняем в LocalStorage
    const user = {$mailInp,$passwordInp};
    localStorage.setItem("user", JSON.stringify(user));
    
    //Сообщение об успешной регистрации
    $errorMessage.textContent = "Регистрация прошла успешно!";
    $errorMessage.style.color = "green";
    $regForm.reset()
 }
 
catch (error) {
   // Выводим сообщение об ошибке
   $errorMessage.textContent = error.message;
   $errorMessage.style.color = "red";
}
})

