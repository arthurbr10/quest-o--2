let mensagem = document.getElementById('mensagem');
let iniciar = document.getElementById('iniciar');
let parar = document.getElementById('parar');
let intervalo;

iniciar.addEventListener('click', function() {
  
    intervalo = setInterval(function() {
        let valorAtual = mensagem.value;
        let primeiroCaractere = valorAtual.substring(0, 1);
        let restoMensagem = valorAtual.substring(1);
        mensagem.value = restoMensagem + primeiroCaractere;
    }, 100); 
});

parar.addEventListener('click', function() {
  
    clearInterval(intervalo);
});