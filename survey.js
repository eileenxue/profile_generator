const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Boilerplate
// rl.question('What do you think of Node.js? ', (answer) => {
//   console.log(`Thank you for your valuable feedback: ${answer}`);

//   rl.close();
// });

const questions = [
  "What's your name? Nicknames are also acceptable :) \n",
  "What's an activity you like doing?\n",
  "What do you listen to while doing that?\n",
  "Which meal is your favourite (eg: dinner, brunch, etc.)\n",
  "What's your favourite thing to eat for that meal?\n",
  "Which sport is your absolute favourite?\n",
  "What is your superpower?\n",
  "In a few words, tell us what you are amazing at!\n"
];

// Questions/Answers
rl.question(questions[0], (answer) => {
  const name = answer;
  rl.question(questions[1], (answer) => {
    const activity = answer;
    rl.question(questions[2], (answer) => {
      const music = answer;
      rl.question(questions[3], (answer) => {
        const meal = answer;
        rl.question(questions[4], (answer) => {
          const food = answer;
          rl.question(questions[5], (answer) => {
            const sport = answer;
            rl.question(questions[6], (answer) => {
              const superpower = answer;
              rl.question(questions[7], (answer) => {
                const amazing = answer;
                // Profile Summary
                console.log('\n--- PROFILE SUMMARY ---\n');
                console.log(`${name} likes ${activity} while listening to ${music}. Their favourite meal is ${meal} specifically ${food}. ${name}'s favourite sport is ${sport} and their superpower would be ${superpower}. ${name} is also amazing at ${amazing}!`);
                rl.close();
              });
            });
          });
        });
      });
    });
  });
});
