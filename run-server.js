const express = require('express');

const app = express();


app.get('/', (req, res) => {
    res.send("server online");
});

app.get('/user', (req, res) => {
    res.send(
        {
            balances:[
                {
                    network:"ETH",
                    symbol:"ETH",
                    address:"0x1eB909A73858D8F1e3809684c0fb80b9e5495357",
                    balance:0.031348861609659481
                }
            ],
            nfts:[
                {
                    id:"10411",
                    name:"pixipet",
                    url:"https://etherscan.io/token/0x4e76c23fe2a4e37b5e07b5625e17098baab86c18?a=10411"
                    attributes:[
                        {
                            name:"shitty",
                            value:"+190",
                        },
                        {
                            name:"lasers",
                            value:"true",
                        }
                    ]
                }
            ]
        });
});


app.listen(3000, () => console.log('Example app is listening on port 3000.'));