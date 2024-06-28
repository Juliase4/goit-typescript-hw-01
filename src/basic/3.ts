// Створіть змінну, яка може містити або рядок, або число (union type)? Також, оголосіть змінну, яка може містити лише одне з двох можливих рядкових значень: 'enable' або 'disable' (literal type).

let mixedType: string | number;
mixedType = "hello"; // OK
mixedType = 12; // OK
// mixedType = true; // Error: Type 'true' is not assignable to type 'mixedType'

type EnableOrDisable = "enable" | "disable";
let literal: EnableOrDisable;
literal = "enable"; // OK
literal = "disable"; // OK
// literal = "qweqwe"; // Error: Type '"qweqwe"' is not assignable to type 'EnableOrDisable'.
