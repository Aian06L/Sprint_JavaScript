
//class contato
class Contato {
   constructor(nome, email, telefone, tipoContato, mensagem) {
       this.nome = nome;
       this.email = email;
       this.telefone = telefone;
       this.tipoContato = tipoContato;
       this.mensagem = mensagem;
   }
   
   // Método para exibir os dados capturados
   exibirDados() {
       return `Nome: ${this.nome}\nE-mail: ${this.email}\nTelefone: ${this.telefone}\nTipo de Contato: ${this.tipoContato}\nMensagem: ${this.mensagem}`;
   }
}

function Post(form) {
   // Captura os dados do formulário
   let data = new Contato(
       form.elements.namedItem("nome").value,
       form.elements.namedItem("email").value, 
       form.elements.namedItem("telefone").value, 
       form.elements.namedItem("tipoContato").value,
       form.elements.namedItem("mensagem").value
   );
   
   // Exibe uma mensagem de confirmação com os dados capturados
   alert(`Obrigado ${data.nome}! Seus dados foram enviados com sucesso.\n\n${data.exibirDados()}`);
   
   // Limpa o formulário após o envio
   form.reset();
   
   // Aqui você poderia integrar com um sistema backend para enviar os dados
   console.log("Dados do formulário:", data);
}

function Enviar() {
   var nome = document.getElementById("nomeid");

   if (nome.value != "") {
       alert('Obrigado sr(a) ' + nome.value + ' os seus dados foram encaminhados com sucesso');
   }
}