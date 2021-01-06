// TypeScript Advanced: Type Casting and Type Guards

// Type casting: cast variables to another type

// inputField1 could either be HTMLElement or null
const inputField1 = document.querySelector('#some-user-input');

// inputField2 could still be null, but is handled as HTMLElement now (!)
const inputField2 = document.querySelector('#some-user-input')!;

// inputField3 could still be null, but is cast as HTMLInputElement (as syntax)
const inputField3 = document.querySelector('#some-user-input') as HTMLInputElement;

// inputField4 could still be null, but is cast as HTMLInputElement (<> syntax)
const inputField4 = <HTMLInputElement>document.querySelector('#some-user-input');

// Type guard: check primitive types (typeof)

const getLength = (input: number | string) => {
   if (typeof input === 'string') {
      console.log(input.length);
   } else {
      console.log(input);
   }
};

getLength(123);   // 123
getLength('123')  // 3

// Type guard: check object properties (in)

type PlanetType = {
   name: string;
   moons: number;
};

type AsteroidType = {
   name: string;
   discovered: Date;
};

const printAstronomicalInformation = (body: PlanetType | AsteroidType) => {
   console.log('Name: ' + body.name);
   if ('moons' in body) console.log('Moons: ' + body.moons);
   if ('discovered' in body) console.log('Charted: ' + body.discovered);
};

const neptune: PlanetType = { name: 'Neptune', moons: 14 };
const pallas: AsteroidType = { name: 'Pallas', discovered: new Date(1802, 2, 28) };

printAstronomicalInformation(neptune); // 'Name: Neptune Moons: 14'
printAstronomicalInformation(pallas);  // 'Name: Pallas Discovered: 1802-03-28T00:00:00.000Z'

// Type guard: check class instances (instanceof)

class PlanetClass {
   public name: string
   constructor(name: string) {
      this.name = name;
   }
   introduce() {
      console.log(this.name + ' is a planet, an astronomical body orbiting a star.');
   }
   checkGravity() {
      console.log(this.name + ' has gravity.');
   }
}

class AsteroidClass {
   public name: string
   constructor(name: string) {
      this.name = name;
   }
   introduce() {
      console.log(this.name + ' is an asteroid, a minor planet in the main asteroid belt.');
   }
}

const describeAstronomicalBody = (body: PlanetClass | AsteroidClass) => {
   body.introduce();
   if (body instanceof PlanetClass) body.checkGravity();
};

const vesta = new AsteroidClass('Vesta');
const uranus = new PlanetClass('Uranus');

describeAstronomicalBody(vesta);    // 'Vesta is an asteroid, a minor planet in the main asteroid belt.'
describeAstronomicalBody(uranus);   // 'Uranus is a planet, an astronomical body orbiting a star. Uranus has gravity.'
