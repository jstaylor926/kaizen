export const lordify = (firstName: any, land: any) => {
    if (!firstName) {
        throw new Error("A firstName is required to lordify");
    }

    if (!land) {
        throw new Error("A lord must have a land");
    }

    return `${firstName} of ${land}`;
};

console.log(lordify("Kelly", "Sonoma")); // Kelly of Sonoma

const person = (firstName: any, lastName: any) => ({
    first: firstName,
    last: lastName
});

console.log(person("Flad", "Hanson"));

const lordify2 = ({ firstname }: any) => {
    console.log(`${firstname} of Canterbury`);
};

const regularPerson = {
    firstname: "Bill",
    lastname: "Wilson",
    spouse: {
        firstname: "Phil",
        lastname: "Wilson"
    }
};

// lordify2(regularPerson); // Bill of Canterbury

// const lordify3 = ({ spouse: { firstname }}: any) => {
//     console.log(`${firstname} of Canterbury`);
// };

// lordify3(regularPerson); // Phil of Canterbury

// const name = "Tallac";
// const elevation = 9738;
// const print = function () {
//     console.log(`Mt. ${this.name} is ${this.elevation} feet tall`);
// };

// const funHike = { name, elevation, print };

// funHike.print(); // Mt. Tallac is 9738 feet tall


// //Defining object methods
// const skier = {
//     name,
//     sound,
//     powderYell() {
//       let yell = this.sound.toUpperCase();
//       console.log(`${yell} ${yell} ${yell}!!!`);
//     },
//     speed(mph) {
//       this.speed = mph;
//       console.log("speed:", mph);
//     }
//   };