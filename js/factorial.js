let enviar=document.getElementById("enviar")
enviar.addEventListener("click", function(e) {
  e.preventDefault();
  let numero = parseInt(document.getElementById('numero').value);
  let resultado = 1;

  if (numero !== ''){
  if (!isNaN(numero)){
    for (let i=numero;i>0;i--){
        resultado=resultado * i;
    } 
    console.log(resultado);
  }else{
    alert('Error el dato no es numero, por favor intentalo nuevamente');
  }
}else{
  alert('ingresa datos');
}
});