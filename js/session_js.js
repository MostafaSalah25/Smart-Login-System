var inputName = document.querySelector('.inputName')
var inputEmail = document.querySelector('.inputEmail') ;
var inputPass = document.querySelector('.inputPass');

var parentSignIn  = document.querySelector('.parentSignIn');
var buttonSignIn = document.querySelector('.buttonSignIn');

var parentSignUp = document.querySelector('span')
var buttonSignUp = document.querySelector('.buttonSignUp');

var textSuccess = document.querySelector('h4') ;
var textError = document.querySelector('.textError');
var textError2 = document.querySelector('.textError2')
var textError3 = document.querySelector('.textError3');

var smartSystem = document.querySelector('.smartSystem');
var home = document.querySelector('.home');

var logOut = document.querySelector('.logOut');

// var usersContainer =[]; 

if ( localStorage.getItem('myUsers')==null ){
    var usersContainer =[]; 
}
else {

    usersContainer = JSON.parse(localStorage.getItem('myUsers' ))
}
function clearInputs() {
    inputName.value=''
    inputEmail.value=''
    inputPass.value=''
}
buttonSignIn.addEventListener('click' , function() {
    logIn();
})
buttonSignUp.addEventListener('click' , convert )

function convert  ()  {
    inputName.classList.remove('d-none') 
    parentSignUp.innerHTML=`<button onclick="signIn();" class="btn buttonSignUp" >Sign In</button>`
    parentSignIn.innerHTML= `<button onclick="signUp();" class=" btn btn-outline-primary w-75 my-4 text-white " >Sign Up</button>`
    textError.classList.add('d-none');
    textError2.classList.add('d-none');
    clearInputs();
}
 

function signIn (){

    inputName.classList.add('d-none')
    parentSignIn.innerHTML= `<button onclick="logIn();" class="btn btn-outline-primary w-75 my-4 text-white " >Log In</button>`
    parentSignUp.innerHTML=` <button onclick="toggle();" class="btn buttonSignUp" >Sign Up</button>`
    textSuccess.classList.add('d-none');
    textError2.classList.add('d-none');
    textError3.classList.add('d-none');
    clearInputs();
}
function toggle (){
    convert();
}


function signUp (){

    for (var i =0 ; i<usersContainer.length ;  i++){ 
    
        
        if ( inputEmail.value  ==  usersContainer[i].email   ){ 

           var newEmail = usersContainer[i].email 
          
            textError3.classList.remove('d-none');
            textSuccess.classList.add('d-none');
            textError2.classList.add('d-none');
        }
    
    }

    if (inputName.value=='' || inputEmail.value=='' ||inputPass.value==''  ){
        textError2.classList.remove('d-none');
        textSuccess.classList.add('d-none');
        textError3.classList.add('d-none');

    }

    else if   (  newEmail!=inputEmail.value  ){

        var user ={
            name: inputName.value ,
            email: inputEmail.value  ,
            pass: inputPass.value
        }
    
        usersContainer.push(user)
        localStorage.setItem('myUsers' , JSON.stringify(usersContainer)  )
    
        textSuccess.classList.remove('d-none');
        textError2.classList.add('d-none');
        textError3.classList.add('d-none');
    }
   

}



function logIn (){

    for (var i =0 ; i<usersContainer.length ;  i++){

        if (inputEmail.value ==  usersContainer[i].email && inputPass.value == usersContainer[i].pass   ){
            
            smartSystem.classList.add('d-none');
            home.classList.remove('d-none');
            textError.classList.add('d-none');
            document.querySelector('.welcome').innerHTML=usersContainer[i].name
            var email =usersContainer[i].email;
           
        }
    }

    if(inputEmail.value =='' || inputPass.value=='' ){
        textError2.classList.remove('d-none');
        textError.classList.add('d-none');
    }

    else if (localStorage.getItem('myUsers')== null){
        textError.classList.remove('d-none');
        textError2.classList.add('d-none');
    }

    else if (email != inputEmail.value ) {
        textError.classList.remove('d-none');
        textError2.classList.add('d-none');
    }
   
}

logOut.addEventListener('click' , function (){
  
    home.classList.add('d-none')
    smartSystem.classList.remove('d-none')
    clearInputs();
    textError.classList.add('d-none');
    textError2.classList.add('d-none');
})






