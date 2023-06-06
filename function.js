window.function = async function () {
  var url = "https://www.gold.fr/get-gs-price/?id=gold&format=json"; 
  var response = await fetch(url);
  var data = await response.json();
  return { 
    value_eur: data.value_eur, 
    value_dol: data.value_dol 
  };
}
