const Discord = require("discord.js");
const prefix = "!";

const bot = new Discord.Client({disableEveryone: true})

// var con_fig = {
// 	host: "",
// 	user: "",
// 	password: process.env.MY_SQL,
// 	database: "",
// 	port: 3306
// };

// var con;

// function handleDisconnect() {
// con = mysql.createConnection(con_fig);
// con.connect(function(err) {              // The server is either down
//     if(err) {                                     // or restarting (takes a while sometimes).
//       console.log('error when connecting to db:', err);
//       setTimeout(handleDisconnect, 2000); // We introduce a delay before attempting to reconnect,
//     }                                     // to avoid a hot loop, and to allow our node script to
//   }); 	

// process.on('uncaughtException', function (err) {
//     console.log(err);
	
// }); 
	


// con.on('error', function(err) {
//     console.log('db error', err);
//     if(err.code === 'PROTOCOL_CONNECTION_LOST') { // Connection to the MySQL server is usually
//       handleDisconnect();                         // lost due to either server restart, or a
//     } else {                                      // connnection idle timeout (the wait_timeout
//        throw err;                                 // server variable configures this)
//     }
// });
//        }
// handleDisconnect();
	

bot.on("ready", async () => {



	console.log(`${bot.user.username} is ready!`);
	
	bot.user.setPresence({ status: 'online', game: { name: '!speak' } });



	try {

		let link = await bot.generateInvite(["ADMINISTRATOR"]);

		console.log(link);

	}	catch(e) {

		console.log(e.stack);

	}
//


});

bot.on("message", async message => {
    
    let messageArray = message.content.split(" ");

    let command = messageArray[0];

    let args = messageArray.slice(1);

    
    


    


        
    
    
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;

if(command === `${prefix}speak`){

        message.channel.send(`Greetings, ${message.author}`);
                 



         return;



    }
//Direct command
    //Put your name of the command here.
    if(command === `${prefix}AS`){

        //Put the text in the response here.
        message.channel.send(`TThis work is about exploring the premise of people's ability to retain vastly different things despite going through a shared experience. In the context of this project, the target audience is a niche one consisting of my Programming for Artists class. The bot uses randomized quotes that have stuck out to me from various reading assignments, my professor, and my peers.  These quotes are prompted by my peers' user inputs that will provoke reflection over everyone's differing experiences to the shared subject matter and give insight into how the individual goes about retaining certain pieces of info over the other. 
The quote bank being chosen by what was memorable to me and sharing it with my peers is my small entry into what will hopefully lead to a bigger discussion of what we will take out of the class. It marks a conclusive end to the semester as well as takes part in a large discussion of how what we all remember about the same experiences tells us about ourselves.`);
                 



         return;



    }
    //Random Command
    //Put your name of the command here.
    if(command === `${prefix}professor`){

        //Number of random quotes minus 1
        var number = 4;

        //random variable
        var random = Math.floor(Math.random()*number);

        //Array of random quotes
        var quote = ["Hey gang!", "It's professor not teacher.", "This is your democracy at play.", "That sounds fun, let's do it.", "Who's they?"]

        //Put the text in the response here.
        message.channel.send(quote[random]);
                 



         return;



    }

     if(command === `${prefix}Ranciere`){

        //Number of random quotes minus 1
        var number = 4;

        //random variable
        var random = Math.floor(Math.random()*number);

        //Array of random quotes
        var quote = ["The spectator must be removed from the position of observer caJmly examining the spectacle offered to her.", "'Good' theatre is one that uses its separated reality in order to abolish it.", "Intellectual emancipation is the verification of the equality of intelligence.", "Distance is not an evil to be abolished, but the normal condition of any communication","Even if the playwright or director doe not know what she wants the spectator to do ',' she at least knows one thing: she knows that she must do one thing - overcome the gulf separating activity from pa sivity. "]

        //Put the text in the response here.
        message.channel.send(quote[random]);
                 



         return;
     }
 if(command === `${prefix}Bishop`){

        //Number of random quotes minus 1
        var number = 4;

        //random variable
        var random = Math.floor(Math.random()*number);

        //Array of random quotes
        var quote = ["The continued prevalence of analog film reels and projected slides in the mainstream art world seems to say less about revolutionary aesthetics than it does about commercial viability.", "Faced with the infinite resources of the Internet selection has emerged as a key operation: We build new files from existing components rather than creating from scratch." , "Yet another exampleWith the rise of the Web, writing has met its photography."]
        //Put the text in the response here.
        message.channel.send(quote[random]);
                 



         return;



    }

//Random Command
    //Put your name of the command here.
    if(command === `${prefix}student`){

        //Number of random quotes minus 1
        var number = 4;

        //random variable
        var random = Math.floor(Math.random()*number);

        //Array of random quotes
        var quote = ["I feel like I don't fully understand the program to...", "Sorry, I haven't gotten any sleep.", "My code isn't working.", "The computer doesn't like me.",]

        //Put the text in the response here.
        message.channel.send(quote[random]);
                 



         return;



    }
    }
);    
bot.login(process.env.BOT_TOKEN);
