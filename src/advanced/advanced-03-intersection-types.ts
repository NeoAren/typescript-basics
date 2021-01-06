// TypeScript Advanced: Intersection Types

// Combination of object types

type MoonType = {
   name: string;
   gravity: number;
};

type StationType = {
   name: string;
   commissioned: Date;
};

type MoonStationType = MoonType & StationType; // Combine Moon and Station types

const triton: MoonStationType = {
   name: 'Triton Station',
   gravity: 0.0794,
   commissioned: new Date(2213, 8, 30)
};

console.log(triton); // { name: 'Triton Station', gravity: 0.0794, commissioned: '2213-9-30T00:00:00.000Z' }

// Intersection of primitive types

type StringOrNumber = string | number;
type NumberOrBoolean = number | boolean;
type NumberOnly = StringOrNumber & NumberOrBoolean; // Intersect StringOrNumber with NumberOrBoolean

let c: NumberOnly;
// c = 'light speed'; // Invalid update
c = 299792458;
console.log(c); // 299792458
