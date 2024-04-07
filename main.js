// Homework 1
let text = "Lorem salom ipsum dolor sit amet consectetur saLom adipisicing elit. Rerum modi sit veniam, maiores SALOM temporibus voluptas ipsam salom blanditiis nulla SALom sint beatae. Ad, neque! Voluptas, obcaecati salOm laborum!";

let textBase = text.toLowerCase().split(' ');

let salom = 0;

for (let salomNumber = 0; salomNumber < textBase.length; salomNumber++) {
    
    if (textBase[salomNumber] === "salom") {
        salom++
    }
};

console.log(salom);


// Homework 2
let letter = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores unde perferendis consectetur laudantium consequuntur quae necessitatibus esse voluptas, cumque iure commodi ut enim iste! Sequi, neque esse explicabo praesentium asperiores laboriosam harum ex quia similique provident voluptatibus commodi, nisi veritatis deleniti quae, laborum corporis maxime illum atque? Cumque cupiditate earum dolore, sapiente qui temporibus! Tempora necessitatibus eum culpa voluptates cupiditate accusantium sequi eius quasi ut, eos atque quod optio, assumenda a, nisi facilis. Veritatis, dolores adipisci voluptatem aliquid aliquam saepe alias nisi fugiat exercitationem ab esse sapiente excepturi qui odio vel officia perspiciatis sunt delectus suscipit. Ipsam in molestias harum?";

let letterBase = letter.toLowerCase().split('')

let s = 0
let a = 0
let l = 0
let o = 0
let m = 0

for (let letterNumber = 0; letterNumber < letterBase.length; letterNumber++) {

    if (letterBase[letterNumber] === "s") {
        s++
    }
    if (letterBase[letterNumber] === "a") {
        a++
    }
    if (letterBase[letterNumber] === "l") {
        l++
    }
    if (letterBase[letterNumber] === "o") {
        o++
    }
    if (letterBase[letterNumber] === "m") {
        m++
    }
}

console.log('S:',s, 'A:',a, 'L:',l, 'O:',o, 'M:',m);

let minimal = Math.min(s,a,l,o,m)
console.log(minimal);

let repeat = "salom".repeat(minimal)
console.log(repeat);