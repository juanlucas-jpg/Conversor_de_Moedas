// Cotação de Moedas do Dia.
const USD = 5.16
const EUR = 5.39
const GBP = 6.20

// Obtendo os elementos do DOM
const form = document.getElementById("form");
const amount = document.getElementById("amount");
const currency  = document.getElementById("currency");

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
}
