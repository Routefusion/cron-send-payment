const rf = require('routefusion-sdk').Instance({
  RF_CLIENT_ID: process.env.RF_CLIENT_ID,
  RF_SECRET: process.env.RF_SECRET,
  RF_BASE_URL: process.env.RF_BASE_URL // will default to sandbox
});

exports.CreateTransferRoutefusion = (req, res) => {
  let PubSubData = JSON.parse(Buffer.from(req.data, 'base64')
  console.log("DATA", PubSubData)
  let transferData = {
    beneficiary_id: PubSubData.beneficiary_id,
    source_amount: PubSubData.transfer_amount,
    auto_complete: true,
    source_currency: "USD"
  };
  
  rf.createTransfer(transferData)
    .then(resp => {
      console.log(resp);
    })
    .catch(err => {
      console.log(err)
    })

};