// TypeScript Advanced: Interfaces

interface ShipFireInterface {
   (rounds: number): void;
}

interface ShipInterface {
   readonly name: string;
   navy?: string;
}

interface FrigateInterface extends ShipInterface {
   fire: ShipFireInterface;
}

class FrigateClass implements FrigateInterface {

   public readonly name: string;
   public navy?: string;

   constructor(name: string, navy?: string) {
      this.name = name;
      if (navy) this.navy = navy;
   }

   fire(rounds: number) {
      const display = this.navy ? this.navy + ' ' : '';
      console.log(`The ${display}${this.name} fired '${rounds}' PDC rounds.`);
   }

}

let ship: FrigateInterface;

ship = new FrigateClass('Anubis');

ship.fire(1000);
