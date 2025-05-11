
document.getElementById('leadForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const email = document.getElementById('email').value;
  const msg = document.getElementById('mensagem');
  const scriptURL = 'https://script.google.com/macros/s/AKfycbzOoO8lKFcicusU-mZ7eQxdhuMRp0R_jdRUuwDocttZs761HL8EidoznQuSlMjlyBqNHQ/exec';

  if (!email.includes('@')) {
    msg.textContent = 'Por favor, insira um email válido.';
    msg.style.color = 'red';
    return;
  }

  fetch(scriptURL, {
  method: 'POST',
  body: new URLSearchParams({ email })
})


    .then(() => {
      msg.textContent = 'Email cadastrado com sucesso!';
      msg.style.color = 'green';
      document.getElementById('leadForm').reset();
    })
    .catch(() => {
      msg.textContent = 'Erro ao enviar. Tente novamente.';
      msg.style.color = 'red';
    });
});
