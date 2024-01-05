const options = {
    headers: {
      'x-access-token': 'coinrankingc6235302d1827060a15e26ceaac8aad90e8553b46a58b336',
    },
  };
  fetch('https://api.coinranking.com/v2/coins', options)
  .then((response) => {
    if(response.ok) {
        response.json().then((json) => {
            // console.log(json.data.coins)
            const coins = json.data.coins
            const top_coins = coins.slice(0, 9)
            let coins_html = `<div class="row">`
            top_coins.forEach(m => coins_html += `
            <div class="col-4">
            <div class="card mb-5  border-2 rounded">
            <div class="card-body bg-secondary rounded">
                <h5 class="card-title bg-secondary ps-2 fs-4">${m.name}</h5>
                <p class="card-text text-warning text-primary ps-2">
                ${Math.round(m.price)} $ 
                <br />
                ${m.symbol}
                </p>
            </div>
            </div>
            </div>
            `)
            document.querySelector('.famous').innerHTML = coins_html
        })
        coins_html += `</div>`

        return coins_html
    }
  }).catch((error) => {
    console.log(error)
  });