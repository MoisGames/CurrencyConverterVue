<template>
  <h1>Currency Converter</h1>
  <div id="converter">
    <div class="currencyOut">You are getting :</div>
    <div class="currencyIn">You give :</div>
  <select class="firstCurrency" id="firstCurrencyId" size="1">
    <option id="AUD__in"></option>
    <option value="2">100</option>
    <option value="3">100</option>
    <option value="4">100</option>
    <option value="5">100</option>
    <option value="6">100</option>
    <option value="7">001</option>
    <option value="8">100</option>
    <option value="9">100</option>
    <option value="10">100</option>
  </select>
  <select class="twoCurrency" size="1">
    <option selected value="1">1</option>
    <option value="AUD__out">1</option>
    <option value="3">1</option>
    <option value="4">1</option>
    <option value="5">1</option>
    <option value="6">1</option>
    <option value="7">1</option>
    <option value="8">1</option>
    <option value="9">1</option>
    <option value="10">1</option>
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

