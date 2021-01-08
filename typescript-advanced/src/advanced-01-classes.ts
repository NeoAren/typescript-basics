// TypeScript Advanced: Classes

abstract class SpaceShip {

   public readonly name: string;
   public captain: string;
   public navy: string;
   protected pdc: number;
   protected torpedoes: number;

   static maxG = 15;

   protected constructor(name: string, captain: string, navy: string, pdc: number, torpedoes: number) {
      this.name = name;
      this.captain = captain;
      this.navy = navy;
      this.pdc = pdc;
      this.torpedoes = torpedoes;
   }

   broadcast(message: string) {
      console.log(`This is Captain ${this.captain} of the ${this.navy} ${this.name}. ${message}`);
   }

   abstract describe(): void;

   abstract status(): void;

   fire(pdc: number = 0, torpedoes: number = 0) {
      this.pdc = Math.max(0, this.pdc - pdc);
      this.torpedoes = Math.max(0, this.torpedoes - torpedoes);
      console.log(`Firing!`);
   }

   static getMaxG() {
      console.log(`The maximum acceleration survivable for the crew is ${SpaceShip.maxG}g-s.`);
   }

}

class Battleship extends SpaceShip {

   private railgun: number = 50;

   constructor(name: string, captain: string, navy: string) {
      super(name, captain, navy, 100000, 100);
   }

   describe() {
      console.log(`The ${this.navy} ${this.name} battleship is the toughest of it's kind, and can bring the real pain.`);
   }

   status() {
      console.log(`PDCs at: '${this.pdc}', torpedoes at: '${this.torpedoes}' and railgun at: '${this.railgun}'.`);
   }

   fire(pdc: number = 0, torpedoes: number = 0, railgun: number = 0) {
      this.pdc = Math.max(0, this.pdc - pdc);
      this.torpedoes = Math.max(0, this.torpedoes - torpedoes);
      this.railgun = Math.max(0, this.railgun - railgun);
      console.log(`Firing!`);
   }

}

class Frigate extends SpaceShip {

   constructor(name: string, captain: string, navy: string) {
      super(name, captain, navy, 50000, 20);
   }

   describe() {
      console.log(`The ${this.navy} ${this.name} frigate is a small and fast interceptor, always hitting where it hurts.`);
   }

   status() {
      console.log(`PDCs at: '${this.pdc}' and torpedoes at: '${this.torpedoes}'.`);
   }

   evade() {
      console.log('Incoming fire evaded!');
   }

}

class Behemoth extends SpaceShip {

   private spinning: boolean = false;
   private static instance: Behemoth;

   private constructor(name: string, captain: string, navy: string) {
      super(name, captain, navy, 1000000, 50);
   }

   static get() {
      if (!Behemoth.instance) {
         Behemoth.instance = new Behemoth('Behemoth', 'Camina Drummer', 'OPAS');
      }
      return Behemoth.instance;
   }

   get spin() {
      return this.spinning;
   }

   set spin(value: boolean) {
      if (value !== this.spinning) {
         this.spinning = value;
      }
   }

   describe() {
      console.log(`The ${this.navy} ${this.name} is a genuine space-monster, with a spinnable drum.`);
   }

   status() {
      console.log(`PDCs at: '${this.pdc}' and torpedoes at: '${this.torpedoes}'.`);
   }

}

const donnager = new Battleship('Donnager', 'Theresa Yao', 'MCRN');
const agathaking = new Battleship('Agatha King', 'Michael Souther', 'UNN');
const ravi = new Frigate('Ravi', 'McBride', 'UNN');
const behemoth = Behemoth.get();

SpaceShip.getMaxG();

donnager.describe();
donnager.broadcast('Stick to your current course or you will be fired upon.');
donnager.fire(0, 16, 0);
donnager.status();

agathaking.describe();
agathaking.broadcast('Fire at will at the hybrid pods!');
agathaking.fire(70000, 23);
agathaking.status();

ravi.describe();
ravi.broadcast('To all ships in the vicinity: do not approach.');
ravi.fire(2000);
ravi.evade();
ravi.status();

behemoth.describe();
behemoth.broadcast('We have spin gravity onboard. All your wounded are welcome here.');
behemoth.fire(10000);
behemoth.status();

console.log(behemoth.spin);
behemoth.spin = true;
console.log(behemoth.spin);
