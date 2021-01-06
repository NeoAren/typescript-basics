// TypeScript Advanced: Index Properties

interface ErrorContainer {
   [key: string]: string;  // ErrorContainer expects string keys with string values
}

const errors: ErrorContainer = {
   email: 'Not a valid email.',
   username: 'Must start with a capital character!'
};

// errors.password = false; // Invalid update

console.log(errors); // { email: 'Not a valid email.', username: 'Must start with a capital character!' }
