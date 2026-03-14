// Cotação de Moedas do Dia.
const USD = 5.16
const EUR = 5.39
const GBP = 6.20

// Obtendo os elementos do DOM
const form = document.querySelector("form");
const amount = document.getElementById("amount");
const currency  = document.getElementById("currency");
const footer = document.querySelector("main  footer");
const description = document.getElementById("description");
const result = document.getElementById("result");


// Configurando o imput amount para receber somente numeros
amount.addEventListener("input", () => {
  const hasCharactersRegex = /\D+/g
  amount.value = amount.value.replace(hasCharactersRegex, "")
})

// Capturando o evento de submit do formulário
form.onsubmit = (event) => {
  event.preventDefault()
  switch (currency.value) {
    case "USD":
      convertCurrency(amount.value, USD, "US$")
      break;
    case "EUR":
      convertCurrency(amount.value, EUR, "€")
      break;
    case "GBP":
      convertCurrency(amount.value, GBP, "£")
      break;
    default:
      break;
  }
}

// Função para converter o valor para reais
function convertCurrency(amount, price, symbol){
 
  try {
    // Exibe a cotação da moeda selecionada
    description.textContent = `${symbol}1 = ${formatCurrencyBRL(price)}`
    
    //Calcula o valor total da conversão
    let total = amount * price

    // Verifica se o resultado não é um número
    if(isNaN(total)) {
      return alert("Por favor, insira um valor numérico válido.")
    }

    // Formata o valor total para o formato de moeda brasileira e remove o símbolo "R$" para exibir somente o valor numérico
    total = formatCurrencyBRL(total).replace("R$", "")

    // Exibe o resultado da conversão
    result.textContent = `${total} Reais`

    // Aplica a classe que exibe o footer para mostrar o resultado
    footer.classList.add("show-result")
  }
  catch (error) {
    // Remove a classe que exibe o footer para esconder o resultado
    footer.classList.remove("show-result")
    console.error(error)
    alert("Ocorreu um erro ao converter a moeda, tente novamente mais tarde.")
  }
}

// Adicionando formatação de moeda brasileira
function formatCurrencyBRL(value) {
  return Number(value).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL"
  })
}