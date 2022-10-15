export function formMess() {  // async    // form 1(
  // переменные модалок  // 1 модалка ошибок на сайте
  const $modalFieldAlert = document.getElementById('popUpTextFormAlert');  // let $modalFieldAlert = document.getElementsByClassName('.popUP-form1__text--allert');
  const $btnToAlert = document.getElementById('btnToAlert');  // кнопка вызова Alert
  // модалка ответа с сервера
  const $modalFielMessage = document.getElementById('popUpTextFormMessage');  // let $modalFieldAlert = document.getElementsByClassName('.popUP-form1__text--allert');
  const $btnToMessage = document.getElementById('btnToMessage');  // кнопка вызова Alert

  // переменный функции
  const $formJs = document.getElementById('formMess');
  $formJs.addEventListener('submit', fFormSend); // при отправке формы запускается функция  formSend


  async function fFormSend(e) { //--------------------------------------------------------------------------
    e.preventDefault();          // отключание дeфолтного значения отправки
    // console.log("кнопка отправки сообщения сработала"); 
    let error = fFormValidate($formJs); // formValidate нов функция  //------------- валидация форм--------
    let formData = new FormData($formJs); // отправка сообщения в переменную

    if (error === 0){ // если прошла валидация формы в JS
        $formJs.classList.add('_sending');
        try {  //w Перехват ошибок, "try..catch" , без падение скрипта-- "try..catch"
              let response = await fetch('sendmail.php',{   // отправка сообщения
                method:'POST',
                body: formData
              });
          if (response.ok) {
              let result = await response.json();
              // alert(popupJsFormMess);
              // alert(result.message); // текст ответа
              $modalFielMessage.textContent = result.message;  // ПОЛУЧЕНИЕ ОТВЕТА В ФОРМУ
              // $btnToMessage.click(); 
              // formPreview.innerHTML = '';
              $formJs.reset();// очистка формы
              $formJs.classList.remove('_sending');
             }
            } catch (error) {
              $formJs.classList.remove('_sending');
              // $modalFieldAlert.textContent =  'Ошибка отправки сообщения! Возможно вы распознаны как бот.';
              // $btnToAlert.click();
            } //-- END    ===----
        }else{ 
              // $modalFieldAlert.textContent =  'Заполните обязательные поля и подтвердите ваше согласие.';
              // $btnToAlert.click();
          }
  } //-----END------ formSend END---------------------------------------------------------------------------


  function fFormValidate($formJs) { //------------------------------------------------------------------------------------------------------------------------------------------------------
    let error = 0;
    let $formReq = document.querySelectorAll('._req');  // класс ._req - обезат поле

    for (let index=0 ; index < $formReq.length; index++){
      const input = $formReq[index];
      formRemoveError(input);

        if (input.classList.contains('_email')){

          if (emailTest(input)){formAddError(input);error++;}
        }else{
          if (input.value === ''){
            formAddError(input);
            error++;
          }else if(input.getAttribute('type') === "checkbox" && input.checked === false){
            formAddError(input);
            error++;
          }

        } 
    } // --for--
    return error;
  }// end function formValidate------------------------------------------------------------------------


  function formAddError(input) {        // добавление клаасса еррор---------------------------------------------------------------------------
    input.parentElement.classList.add('_error');
    input.classList.add('_error');  
  }// end function ------------------------------------------------------------------------------------------------

  function formRemoveError(input) {           // удаление клаасса ерро---------------------------------------------------------------------------
    input.parentElement.classList.remove('_error');
    input.classList.remove('_error');
  }// end function ------------------------------------------------------------------------

  function emailTest(input) { // удаление клаасса ерро---------------------------------------------------------------------------
    return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);// простой Регулятор регулярной проверки электронной почты
    // return (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test());
  }// end function ------------------------------------------------------------------------------------------------

} // END formMessExport-------------------------------------------------






