contract('CrowdPricer', function(accounts) {
  it("Initial crowdpricer settings should match", function() {
    CrowdPricer.new(
      "my antique", //string _itemDescription
      100,  //uint _admissionDeposit
      10, //uint _confidenceBet
      50, //uint _bounty
      5,  //uint _tolerance
      4,  //uint _minNumProposals
      {
        from: accounts[0],
        value: 1000
      }
    ).then(function(cp) {
       cp.itemDescription.call().then(function(itemDescription) {
          assert.equal(itemDescription, "my antique", "itemDescription doesn't match!");
          return cp.admissionDeposit.call();
        }).then(function(admissionDeposit) {
          assert.equal(admissionDeposit.valueOf(), 100, "admissionDeposit should be 100!");
          return cp.confidenceBet.call();
        }).then(function(confidenceBet) {
          assert.equal(confidenceBet.valueOf(), 10, "confidenceBet should be 10!");
          return cp.bounty.call();
        }).then(function(bounty) {
          assert.equal(bounty.valueOf(), 50, "bounty should be 50");
          return cp.tolerance.call();
        }).then(function(tolerance) {
          assert.equal(tolerance.valueOf(), 5, "tolerance should be 5");
          return cp.minNumProposals.call();
        }).then(function(minNumProposals) {
          assert.equal(minNumProposals.valueOf(), 4, "minNumProposals should be 4");
          return cp.initiatorDeposit.call();
        }).then(function(initiatorDeposit) {
          assert.equal(initiatorDeposit.valueOf(), 1000-50, "initiatorDeposit should be 950");
          return cp.maxNumProposals.call();
        }).then(function(maxNumProposals) {
          assert.equal(maxNumProposals.valueOf(), 8, "maxNumProposals should be 8");
        });
    });
  });
});
