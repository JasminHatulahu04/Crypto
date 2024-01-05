    const options = {
        headers: {
          'x-access-token': 'coinrankingc6235302d1827060a15e26ceaac8aad90e8553b46a58b336',
        },
      };
      
      fetch('https://api.coinranking.com/v2/coins', options)
      .then((response) => {
        if(response.ok) {
            response.json().then((json) => {
                console.log(json.data.coins)

                let coins = json.data.coins

                if(coins.length > 0) {
                    var cryptoCoins = ""
                }



                coins.forEach((coin) => {
                    cryptoCoins += `<tr>`;
                    cryptoCoins += `<td> ${coin.btcPrice} </td>`;
                    cryptoCoins += `<td> ${coin.rank} </td>`;
                    cryptoCoins += `<td> ${coin.tier} </td>`;
                    cryptoCoins += `<td> ${coin.name} </td>`;
                    cryptoCoins += `<td> ${Math.round(coin.price)} $</td>`;
                    cryptoCoins += `<td> ${coin.symbol} </td>`;`<tr>`;
                })
                document.querySelector('.data').innerHTML = cryptoCoins
            })
        }
      }).catch((error) => {
        console.log(error)
      })


