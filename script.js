// Preço flutuante
let price = document.getElementById('price');
let coinPrice = 0.000001;

function fluctuatePrice() {
  // Simula a flutuação do preço
  coinPrice = (Math.random() * 0.0001).toFixed(6);
  price.textContent = coinPrice;
}

// Chama a função de flutuação a cada 2 segundos
setInterval(fluctuatePrice, 2000);

// Função de interação para o botão de compra
function buyAnxietyCoin() {
  alert("You bought AnxietyCoin. Hope you're ready for the panic!");
  // Gera uma sensação de decisão apressada
  price.style.color = '#ff0000'; // muda a cor para vermelho
  setTimeout(() => {
    price.style.color = '#ffff00'; // muda para amarelo, para aumentar a "ansiedade"
  }, 1000);
}
