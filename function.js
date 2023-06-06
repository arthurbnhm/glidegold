// L'URL que vous voulez récupérer
var url = "http://example.com/api/data";

// Faire une requête HTTP GET
fetch(url)
  .then(response => response.json())
  .then(data => {
    // Maintenant, `data` est un objet JavaScript que vous pouvez utiliser comme n'importe quel autre objet
    console.log(data);
  });
