import { book } from "./booking";
if (!book(2)) throw new Error("fail");
console.log("OK");
