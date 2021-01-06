// TypeScript Advanced: Function Overloads

type CombinableType = string | number;

function combineValues(a: string, b: string): string;
function combineValues(a: number, b: number): number;
function combineValues(a: CombinableType, b: CombinableType) {
   if (typeof a === 'string' || typeof b === 'string') {
      return a.toString() + b.toString();
   }
   return a + b;
}

const result1 = combineValues('Hello', ' World!');
console.log(result1.split(' ')); // [ 'Hello', 'World!' ]

const result2 = combineValues(0, 42);
console.log(result2); // 42
