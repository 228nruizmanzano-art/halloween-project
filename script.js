function bold(word){
  return`<span class="user-input">${word}</span>`;
}
let noun1 = prompt("Enter a noun.");
let creature = prompt("Enter the name of a spooky creature");
let adjective2 = prompt("Enter an adjective.");
let teacher = prompt("Enter the name of a teacher");
let adjective3 = prompt("Enter an adjective.");
let adjective4 = prompt("Enter an adjective.");
let creature2 = prompt("Enter the name of a spooky creature");
let friend = prompt("Enter the name of a friend");
let friend2 = prompt("Enter the name of another friend");
let friend3 = prompt("Enter the name of a third friend");



let story = 
`It was a dark,${bold(noun1)} Halloween night, and the wind was blowing through the trees. 
I decided to go trick-or-treating with my friends. I put on my favorite Halloween costume, 
which was a${bold(adjective2)}${bold(creature)} that looked extremely${bold(adjective3)}. 

As I walked down the street, I heard strange noises coming from behind the houses. 
Suddenly, my teacher,${bold(teacher)}, jumped out from behind a tree dressed as a 
${bold(adjective4)}${bold(creature2)}! I was so surprised that I almost dropped all of my candy!

After we finished trick-or-treating, we met up with${bold(friend)},${bold(friend2)}, and ${bold(friend3)}. 
We decided to go to our school because we heard there was a mysterious Halloween surprise waiting for us.

When we arrived, the school was completely dark. We walked into the classroom and 
found a giant pile of candy on${bold(teacher)}'s desk. But there was one problem! 
We had to do math to figure out how to share all the candy equally.

After a long night of solving math problems, we finally divided the candy. 
We laughed, ate our favorite treats, and told scary stories until it was time to go home.

It was definitely the strangest Halloween night ever, but it was also one of the best! 
I can't wait to see what happens next Halloween!`;

<img src="/ai-generated-9099293_640.jpg" alt="Halloween Image">

let madLibOutputDiv = document.getElementById("madLibOutput");

madLibOutputDiv.innerHTML = `<p>${story}</p>`;
