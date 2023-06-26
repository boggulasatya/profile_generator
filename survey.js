const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
const profile = {};
rl.question('What do you think of Node.js?', (answer) => {
  profile.nodejsOpinion = answer;

  rl.question('What is your name? Nicknames are also acceptable:', (answer) => {
    profile.name = answer;

    rl.question('What is an activity you like doing?', (answer) => {
      profile.activity = answer;

      rl.question('What do you listen to while doing that?', (answer) => {
        profile.music = answer;

        rl.question('Which meal is your favourite (eg: dinner, brunch, etc.)', (answer) => {
          profile.meal = answer;

          rl.question('Which sport is your absolute favourite?', (answer) => {
            profile.sport = answer;

            rl.question('What is your superpower? In a few words, tell us what you are amazing at!', (answer) => {
              profile.superpower = answer;


              const profileParagraph = `Name: ${profile.name}\nActivity: ${profile.activity}\nMusic: ${profile.music}\nFavorite Meal: ${profile.meal}\nFavorite Food: ${profile.food}\nFavorite Sport: ${profile.sport}\nSuperpower: ${profile.superpower}`;

              console.log(`Thank you for your valuable feedback: ${answer}`);
              console.log("profile:");
              console.log(profileParagraph);
  
              rl.close();
            });
          });
        });
      });
    });
  });
});
