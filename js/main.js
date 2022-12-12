const senha = document.getElementById('senha');
const eye = document.getElementById('eye');

function eyeClick(){

    let inputTypeIsPassword = senha.type == "password"

    if(inputTypeIsPassword){
        showPassword()
    }else{
        hidePassword()
    }
}

function showPassword(){
    senha.setAttribute("type", "text")
    eye.setAttribute("src", "img/openeye.png")

}

function hidePassword(){
    senha.setAttribute("type", "password")
    eye.setAttribute("src", "img/closedeye.png")
}