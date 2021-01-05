//

const add = (n1: number, n2: number, show: boolean = false, message: string = '') => {
   const result = n1 + n2;
   if (show) console.log(message + result);
   return result;
};

add(7.0, 8, true, 'The result is: ');
