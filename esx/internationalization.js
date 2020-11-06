/* jshint esversion: 6 */

// in German,  "ä" sorts with "a"
// in Swedish, "ä" sorts after "z"
var list = ["ä", "a", "z"];
var l10nDE = new Intl.Collator("de");
var l10nSV = new Intl.Collator("sv");
l10nDE.compare("ä", "z") === -1;
l10nSV.compare("ä", "z") === +1;
console.log(list.sort(l10nDE.compare));
console.log(list.sort(l10nSV.compare));

var l10nEN = new Intl.NumberFormat("en-US");
var l10nDE = new Intl.NumberFormat("de-DE");
var l10nBR = new Intl.NumberFormat("pt-BR");

var formatedNumber = l10nBR.format(2350);
console.log(formatedNumber);

// currency format brazil
var currencyBR = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL"
});
var price = currencyBR.format(2.50);
console.log(price);

// date time format
var dateBR = new Intl.DateTimeFormat("pt-BR");
var myDate = dateBR.format(new Date("2018-12-19"));
console.log(myDate);