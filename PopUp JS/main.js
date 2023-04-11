    var nomeDigitado = prompt('Digite seu nome completo:');
      if (nomeDigitado.trim() !== '') {
        var nome = nomeDigitado.split(' ')[0];
        alert(nome + ', obrigada por utilizar nosso site!');
      } else {
        var insistir = prompt('Você não digitou seu nome. Por favor, digite seu nome completo:');
        var nome = insistir.split(' ')[0];
        alert(nome + ', obrigada por utilizar nosso site!');
      }