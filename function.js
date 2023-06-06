window.function = function () {
  var url = "https://www.gold.fr/get-gs-price/?id=gold&format=json";
  var response = fetch(url).then(response => response.json());
  return {
    value_eur: response.value_eur,
    value_dol: response.value_dol
  };
}
