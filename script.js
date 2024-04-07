function calcularIdade() {
    var dataNascimento = new Date(document.getElementById("birthdate").value);
    var hoje = new Date();
    
    var diffAnos = hoje.getFullYear() - dataNascimento.getFullYear();
    var diffMeses = hoje.getMonth() - dataNascimento.getMonth();
    var diffDias = hoje.getDate() - dataNascimento.getDate();
  
    if (diffMeses < 0 || (diffMeses === 0 && hoje.getDate() < dataNascimento.getDate())) {
      diffAnos--;
    }
  
    var idade = diffAnos;
    document.getElementById("result").innerText = "Sua idade é " + idade + " anos.";
  }
  