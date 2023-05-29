class Vacaction {
  constructor(destination, length) {
    this.destination = destination;
    this.length = length;
  }

  print() {
    console.log(`${this.destination}은(는) ${this.length}일 걸리네요.`);
  }
}

const trip = new Vacaction("북한", 4);

console.log(trip.print());
