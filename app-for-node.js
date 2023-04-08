const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question('Чи подобається вам програмування на JavaScript? (y/n) ', (answer1) => {
    rl.question('Чи знаєте ви, що таке змінні та як їх використовувати? (y/n) ', (answer2) => {
        rl.question('Чи бажаєте ви дізнатися більше про JavaScript? (y/n) ', (answer3) => { 
            console.log(`Ваші відповіді:\n1. ${answer1}\n2. ${answer2}\n3. ${answer3}`);
            rl.close();
        });
    });
});