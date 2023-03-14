<template>
  <div>
    </div>
  <h1>Currency Converter</h1>
  <div id="converter">
    <div class="currencyOut">You are getting :</div>
    <div class="currencyIn">You give :</div>
  <select class="firstCurrency" id="firstCurrencyId" size="1">
    <option id="AUD__in" value="AUD"></option>
    <option value="AZN__in"></option>
    <option value="GBP__in"></option>
    <option value="AMD__in"></option>
    <option value="BYN__in"></option>
    <option value="BGN__in"></option>
    <option value="BRL__in"></option>
    <option value="HUF__in"></option>
    <option value="GEL__in"></option>
    <option value="DKK__in">1</option>
    <option value="AED__in">1</option>
    <option value="USD__in">1</option>
    <option value="EUR__in">1</option>
    <option value="EGP__in">1</option>
    <option value="INR__in">1</option>
    <option value="IDR__in">1</option>
    <option value="KZT__in">1</option>
    <option value="CAD__in">1</option>
    <option value="QAR__in">1</option>
    <option value="KGS__in">1</option>
    <option value="CNY__in">1</option>
    <option value="MDL__in">1</option>
    <option value="NZD__in">1</option>
    <option value="NOK__in">1</option>
    <option value="PLN__in">1</option>
    <option value="RON__in">1</option>
    <option value="XDR__in">1</option>
    <option value="SGD__in">1</option>
    <option value="TJS__in">1</option>
    <option value="THB__in">1</option>
    <option value="TRY__in">1</option>
    <option value="TMT__in">1</option>
    <option value="UZS__in">1</option>
    <option value="UAH__in">1</option>
    <option value="CZK__in">1</option>
    <option value="SEK__in">1</option>
    <option value="CHF__in">1</option>
    <option value="RSD__in">1</option>
    <option value="ZAR__in">1</option>
    <option value="KRW__in">1</option>
    <option value="JPY__in">1</option>
  </select>
  <select class="twoCurrency" size="1">
    <option selected value="1">1</option>
    <option value="AUD__out">1</option>
    <option value="AZN__out">1</option>
    <option value="GBP__out">1</option>
    <option value="AMD__out">1</option>
    <option value="BYN__out">1</option>
    <option value="BGN__out">1</option>
    <option value="BRL__out">1</option>
    <option value="HUF__out">1</option>
    <option value="GEL__out">1</option>
    <option value="DKK__out">1</option>
    <option value="AED__out">1</option>
    <option value="USD__out">1</option>
    <option value="EUR__out">1</option>
    <option value="EGP__out">1</option>
    <option value="INR__out">1</option>
    <option value="IDR__out">1</option>
    <option value="KZT__out">1</option>
    <option value="CAD__out">1</option>
    <option value="QAR__out">1</option>
    <option value="KGS__out">1</option>
    <option value="CNY__out">1</option>
    <option value="MDL__out">1</option>
    <option value="NZD__out">1</option>
    <option value="NOK__out">1</option>
    <option value="PLN__out">1</option>
    <option value="RON__out">1</option>
    <option value="XDR__out">1</option>
    <option value="SGD__out">1</option>
    <option value="TJS__out">1</option>
    <option value="THB__out">1</option>
    <option value="TRY__out">1</option>
    <option value="TMT__out">1</option>
    <option value="UZS__out">1</option>
    <option value="UAH__out">1</option>
    <option value="CZK__out">1</option>
    <option value="SEK__out">1</option>
    <option value="CHF__out">1</option>
    <option value="RSD__out">1</option>
    <option value="ZAR__out">1</option>
    <option value="KRW__out">1</option>
    <option value="JPY__out">1</option>
  </select>
  <input class="firstCurrencyIn">
  <input class="twoCurrencyIn">
  </div>
  <button id="convert">Convert</button>
  <div id="root"></div>
</template>

<script>
fetch('https://www.cbr-xml-daily.ru/daily_json.js')
  .then(r => r.json())
  .then(data => document.getElementById("AUD__in").innerHTML = (data.Valute.AUD.Name))
</script>
<style scoped>
h1 {
  color: orange;
  padding: 50px;
  text-shadow: 3px 3px 3px black;
  text-align: center;
}
.firstCurrency, .twoCurrency {
  margin: 0 0 0 5vw;
  width: 38.5vw;
  height: 5vh;
  padding: 5px;
  font-size: 25px ;
}
.firstCurrencyIn, .twoCurrencyIn {
  margin: 2vh 0 0 5vw;
  width: 38vw;
  height: 5vh;
}
.currencyOut,.currencyIn {
  width: 38.5vw;
  height: 5vh;
  color: orange;
  text-align: start;
  margin: 0 0 5vh 5vw;
  font-size: 30px;
  text-shadow: 3px 3px 3px black;
}
#converter {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100vw;
  height: 100%;
}
option {
  margin-left: 30px;
}
#convert {
  background-color: orange;
  margin: 5vh 25vw 0 20vw;
  width: 200px;
  height: 5%;
  font-size: 25px;
  border-radius: 20px;
  font-size: 30px;
}
</style>

