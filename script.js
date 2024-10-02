//Manipulação do DOM
const container = document.querySelector('.container');
const qrCodeBtn = document.querySelector('#qr-form button');

const qrCodeInput = document.querySelector('#qr-form input');
const qrCodeImg = document.querySelector('#qr-code img');

//Gerar QR Code
function generateQrCode() {
  const qrCodeInputValue = qrCodeInput.value; //para pegar o valor do input

  if (!qrCodeInputValue) return; //se nao tiver nenhum valor, não vou gerar nenhum qrcode
  qrCodeBtn.innerText = 'Gerando codigo...'; //para modificar o texto do botão
  qrCodeImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrCodeInputValue}`;

  qrCodeImg.addEventListener('load', () => {
    //para criar uma ação de criação de qrcode
    container.classList.add('active'); //para carregar um qrcode de acordo com o que a gente inserir no input e faz load
    qrCodeBtn.innerText = 'Codigo criados...'; //para modificar o conteúdo do botão
  });
}
//Eventos

qrCodeBtn.addEventListener('click', () => {
  generateQrCode();
});
qrCodeInput.addEventListener('keydown', (e) => {
  if (e.code === 'Enter') {
    generateQrCode();
  }
});
//Limpar a área do Qr Code

qrCodeInput.addEventListener('keyup', () => {
  if (!qrCodeInput.value) {
    container.classList.remove('active');
    qrCodeBtn.innerHTML = 'Gerador de QrCode...';
  }
});
