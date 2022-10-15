let texto = document.getElementById('texto');
texto.addEventListener('click',function(){
        alterar(this);
});

function alterar(elemento){
    elemento.innerText = prompt('Digite a alteração')
    if(elemento.innerText == ""){
        elemento.remove();
    }
}