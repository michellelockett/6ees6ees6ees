class ForagerBee extends Bee {
  constructor(job, canFly, treasureChest) {
    super();
    this.age = 10;
    this.color = 'yellow';
    this.canFly = true;
    this.treasureChest = [];
    this.job = 'find pollen';
  }

  forage() {
    this.treasureChest.push('treasure');
  }
};

