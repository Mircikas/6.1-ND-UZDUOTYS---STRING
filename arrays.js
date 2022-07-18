// --- Pirma užduotis ---

// let a = "Denzel"
// let b = "Washington"


//     if (a.length > b.length){
//         console.log("Trumpesnis žodis: " + b);
//     } else console.log("Trumpesnis žodis: " + a);


// --- Antra užduotis ---

// let a = "Denzel";
// let b = "Washington";

// console.log((a.toUpperCase()) + " " + (b.toLowerCase()))

// --- Trečia užduotis ---

// let a = "Denzel";
// let b = "Washington";

// let c = a.charAt(0) + b.charAt(0);


// console.log(c)

// --- Ketvirta užduotis ---

// let a = "Denzel";
// let b = "Washington";

// let c = a.slice(-3) + " " + b.slice(-3);    // dar "a.substring" funkcija naudoja!!!

// console.log(c);

// --- Penkta užduotis ---

// let a = "An American in Paris"

// console.log(a.replace(/a/gi, "*" ))   // (/blue|house|car/gi (g - (tik nurodytos raides, jeigu didziosios tai tik didziosios) gi - visos raides nesvarbu mazosios ar didziosios)  - Regex


// --- Šešta užduotis ---

// let a = "An American in Paris"
// let b = "Breakfast at Tiffany's"
// let c = "2001: A Space Odyssey"
// let d = "It's a Wonderful Life"

// console.log(a.replace(/[aeiyou]/gi, " "))
// console.log(b.replace(/[aeiyou]/gi, " "))
// console.log(c.replace(/[aeiyou]/gi, " "))
// console.log(d.replace(/[aeiyou]/gi, " "))

// --- Septinta užduotis ---

// let a = "Star Wars: Episode "+ " ".repeat( Math.ceil(Math.random() * 10))+(Math.ceil (Math.random() * 7)+1) + " - A New Hope"

// console.log(a)

// console.log("Serija " + a.charAt(a.length - 14))

// --- Aštunta užduotis ---

// let a = "Don't Be a Menace to South Central While Drinking Your Juice in the Hood";

// console.log(a.split(" ")); // kabutese nurodom per koki simboli ar raide splitinam - siuo atveju per tarpa splitinam

// let b = a.split(" ");
// let skaitliukas = 0;

// for(let i = 0; i < b.length ; i++ ){
//     let word = b[i];
//     if(word.length <= 5){
//         skaitliukas++;
//     }
// }
// console.log(skaitliukas);


// let a2 = "Tik nereikia gąsdinti Pietų Centro, geriant sultis pas save kvartale";
// let b2 = a2.split(" ");

// console.log(b2);

// for (let i = 0; i < b2.length; i++) {
//     const word2 = b2[i];
//     if(word2.length <= 5){
//         skaitliukas++;
//     }
// }
// console.log(skaitliukas)


// --- Devinta užduotis ---

// let a = Math.random().toString(36).replace(/[^a-z]+/g, '').substring(0, 3)  // paimta formile is: https://stackoverflow.com/questions/1349404/generate-random-string-characters-in-javascript
// console.log(a)

// console.log(toString(36))



// Parašyti kodą, kuris generuotų atsitiktinį stringą iš lotyniškų mažųjų raidžių. Stringo ilgis 3 simboliai.