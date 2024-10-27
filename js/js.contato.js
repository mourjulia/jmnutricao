var form = document.getElementById("my-form");
  
  async function handleSubmit(event) {
    event.preventDefault();
    var status = document.getElementById("my-form-status");
    var data = new FormData(event.target);
    fetch(event.target.action, {
      method: form.method,
      body: data,
      headers: {
          'Accept': 'application/json'
      }
    }).then(response => {
      if (response.ok) {
        status.innerHTML = "Obrigada! Mensagem enviada com sucesso. Aguarde nosso retorno.";
        form.reset()
      } else {
        response.json().then(data => {
          if (Object.hasOwn(data, 'errors')) {
            status.innerHTML = data["errors"].map(error => error["message"]).join(", ")
          } else {
            status.innerHTML = "Oops! Deu erro. Contate nosso suporte no e-mail jainara-moura@gmail.com.br"
          }
        })
      }
    }).catch(error => {
      status.innerHTML = "Oops! Houve um erro.. fale com o Administrador pelo e-mail <a href=' mailto:jainara-moura@gmail.com.br</a>"
    });
  }
  form.addEventListener("submit", handleSubmit)