const prompt = require('prompt-sync')();
const name = prompt('What is your name?');{


console.log(`Hello ${name} it's time for an adventure. Do you want a happy ending or
a tragic ending to your adventure?`);
}

const path = prompt(`Enter "happy" or "tragic"`).toLowerCase();

if (path === `happy`){
    console.log(`Really ${name}? happy? That sounds pretty boring but sure`);
    
    const rich = prompt("Do you want to be rich? Answer with.'yes' or 'no'").toLowerCase();
    switch (rich) {
        case 'yes':
            console.log("Great, here is a lottery ticket");
            // for
            return;
        case 'no':
            console.log("Then you really don't want happiness");
            return;
        default:
        console.log("Happiness doesnt come to those who cant follow instructions.");
            return;
    }
                }

        
  

    //

} else if (path === `tragic`)
    console.log(`I like the way you think, ${name}!`);
       const dir = prompt("Do you want to go left or right?").toLowerCase();
    if (dir === 'left') {
        
    console.log("You run into a sumo wrestler who is blacked out from binge drinking and mistakes you for a sumo mat. You run to the nearest building - a casino. Sad news, you have a gambling addiction you've been trying to over come. The slot machines tempt you");
        
    }else if (dir === 'right'){
        console.log(`You walk into a casino and hear someone from across the aisle "Hey ${name},someone told me you won a big jackpot of $100 earlier, lets hit up the roulette table. You follow your friend over to the roulette table and keep placing your bet on red`);
    
    }
    for(let moneyCasino = 0; moneyCasino < 5; moneyCasino++)
        console.log(`${moneyCasino} You lose $20`);
    console.log(`You lose your last $20. You are now broke and don't have any way back home. You fall asleep on a bench and a drunk driver runs you over with their car. RIP ${name}`);
    



 
     


    

 




 







    
    















 

 









 


    






