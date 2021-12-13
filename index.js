const express = require('express');
const app = express();
const web3js = require("@solana/web3.js");
const francium_sdk = require("francium-sdk");

const port = process.env.PORT || 4000

var fr = new francium_sdk.default({
    connection: new web3js.Connection('https://free.rpcpool.com')
});

// Get User Farm Positions
//
app.get('/farmPositions/:address', (req,res) =>  {
    var address = req.params.address;
    fr.getUserFarmPosition(new web3js.PublicKey(address))
    .then(function (result) {
        console.log(result);
        res.send(result);
    });
});

// Get User Lending Pool
//
app.get('/lendingPositions/:address', (req,res) =>  {
    var address = req.params.address;
    fr.getUserLendingPosition(new web3js.PublicKey(req.params.address))
    .then(function (result) {
        console.log(result);
        res.send(result);
    });
});

app.get('/', (req,res) => res.send('FUC - Francium Unofficial Companion'));

app.listen(port, () => {
  console.log(`⚡️ [FUC server]: Server is running at http://localhost:${port}`);
});