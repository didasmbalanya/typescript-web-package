import { User } from "./models/User";

const user = new User({ name: "Jask" });

user.on("change", () => console.log("User was changed"));

user.set({ name: "joey" });


console.log('\n\n>>>>>>>>>>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<<<<\n\n')
console.log(user)
console.log('\n\n>>>>>>>>>>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<<<<\n\n')

