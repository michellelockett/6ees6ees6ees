class HoneyMakerBee extends Bee {
  constructor(job, honeyPot) {
    super();
    this.age = 10;
    this.job = 'make honey';
    this.color = 'yellow';
    this.honeyPot = 0;
  }

  makeHoney() {
    this.honeyPot ++;
  }

  giveHoney() {
    this.honeyPot --;
  }
};
