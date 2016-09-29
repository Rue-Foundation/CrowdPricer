module.exports = function(deployer) {
  deployer.deploy(CrowdPricer,
    "my antique", //string _itemDescription
    100,  //uint _admissionDeposit
    10, //uint _confidenceBet
    50, //uint _bounty
    5,  //uint _tolerance
    4,  //uint _minNumProposals
    {
      value: 1000
    });
};
