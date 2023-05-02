
let tela = document.getElementById("tela");
let textoPuro;
const BTNCRIPTO = document.getElementById('cripto');
const BTNDESCRIPTO = document.getElementById('descripto');

BTNCRIPTO.addEventListener('click', criptografar)
BTNDESCRIPTO.addEventListener('click', descriptografar)


function criptografar() {
  const texto = document.getElementById('texto').value;

  if (!texto) {
    alert("Por favor, insira um texto!");
    return;
  }

  const regex = /[A-Z!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;

  if (regex.test(texto)) {
    alert("O texto não pode conter letras maiúsculas ou caracteres especiais!");
    return;
  }

  const textoPuro = texto.toLowerCase();
  let textoAlterado = textoPuro.replace(/[aeiou]/g, function(letra) {
    if (letra === "e") {
      return "enter";
    }
    if (letra === "i") {
      return "imes";
    }
    if (letra === "a") {
      return "ai";
    }
    if (letra === "o") {
      return "ober";
    }
    if (letra === "u") {
      return "ufat";
    }
    return letra;
  });

  tela.textContent = textoAlterado;
  document.getElementById("Image").style.display = "none";
  document.getElementById("copiar").style.display = "block";
}




function descriptografar() {
  const texto = document.getElementById('texto').value;

  if (!texto) {
    alert("Por favor, insira um texto!");
    return;
  }

  
  const regex = /[A-Z!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;

  if (regex.test(texto)) {
    alert("O texto não pode conter letras maiúsculas ou caracteres especiais!");
    return;
  }

  const textoPuro = texto.toLowerCase();
  let textoAlterado2 = textoPuro.replace(/enter|imes|ai|ober|ufat/g, function(palavra) {
    if (palavra === "enter") {
      return "e";
    }
    if (palavra === "imes") {
      return "i";
    }
    if (palavra === "ai") {
      return "a";
    }
    if (palavra === "ober") {
      return "o";
    }
    if (palavra === "ufat") {
      return "u";
    }
    return palavra;
  });

  tela.textContent = textoAlterado2;
  document.getElementById("Image").style.display = "none";
  document.getElementById("copiar").style.display = "block";
}




function copiarTexto() {
  const texto = document.getElementById("tela").textContent;
  navigator.clipboard.writeText(texto)
    .then(() => alert("Texto copiado para a área de transferência!"))  
}

