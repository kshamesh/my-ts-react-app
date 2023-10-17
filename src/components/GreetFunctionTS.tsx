/* Introduction to TypeScript and its role in React development.
Benefits of using TypeScript, such as static typing and improved code maintainability.
The importance of catching errors at compile time rather than runtime. */

// Presenting a common problem using JavaScript, such as a type error or an undefined variable.
// Show how TypeScript can prevent such errors.

interface GreetFunctionProps {
  firstName: string;
}

export const GreetFunctionTS = (props: GreetFunctionProps) => {
  return <h1>Hello {props.firstName}</h1>;
};
