
Qs = {
    "comment_id1": "1840432242906258",
    "commenter_b1": "@username, stupid assumption. You want to know WHY I loathe him? Because like Drumpf, he bankrupted and stiffed dozens of suppliers, contractors, and small businesses in my town. Almost 50 years later, his failed projects are STILL a cancer on the area. Take infinite seats. Google \"Discovery Bay, Pass Christian, Mississippi\". Take infinite seats",
    "commenter_a1": "Finally a smart reasonable Hollywood Star. It's refreshing to see a star acting adult instead of a two year old throwing a tantrum. HOLLYWOOD ADULT STARS BACK UP Pat Boone surely he's not the only one that knows how to act like an adult",
    "post_message1": "He says the Hollywood liberals and movie studios are 'wrecking' the US image around the world with anti-Trump rants.",
    "comment_id2": "386439124813885",
    "commenter_b2": "Shes done after school programs for kids as well as getting healthier food programs school, so they dont end up being fat lazy slobs like you. You say she hasn't done anything but bitch and whine.... Like you.... Stuffing your fat ass and whining about obama the worst president ever.... He's been trying to fix what the dam republicans did for the last 16years... And the republicans controlling the Senate wouldnt let him. Fucking republicans destroying our country.... Oh and them last 16 years.... The Bushs started these wars for oil, why ??? Cause there in the oil business FACT.... Why you thing gas has been so cheap since there gone..... You fucking racist holy rollers really need to get a clue... Dont even get me started on religion...... All this hate and war bullshit is because of religion!!! I love god, but you republicans think its an excuse to ...",
    "commenter_a2": "Instead of using her time in the offcie to help women of color pull themselves up and create meaningful programs to help, she used her time to whine and complain",
    "post_message2": "What a disgrace...",
    "comment_id3": "10153156989922787",
    "commenter_b3": "Smart woman ;-)",
    "commenter_a3": "Corporatism perpetuates this slavery- it emerged at the dawning of the Emancipation to re-enslave Black Americans. Furthermore, free-trade destroys the remaining freedoms that Black Americans, the indigenous peoples of Western colonies, as well as other people from the middle and lower-classes currently enjoy ie, protective local labour laws, access to affordable medicines, religious freedom, etc. Corporatism breeds Communism. Corporatism and Communism are interdependent because you cannot separate economics from politics and religion (philosophically, this would include the religions of Atheism and Anti-Religion). Both systems are hell-bent on achieving world domination. Keep up the good fight Barbara Lee, with God's help we need to fight Corporatism and Communism with Democracy, Democracy-enabling Religions, and Democracy-upholding Capitalism. God bless you sister. (y)",
    "post_message3": "Black women working full time in California earn, on average, $25,069 less than white men each year. We should all take time to think about how the legacy of slavery & segregation persists in our society. #BHM2015",
    "comment_id4": "10153278015134575",
    "commenter_b4": ":) Exactly",
    "commenter_a4": "If you're going to do BUSINESS in a free society that is supposed to separate religious beliefs from law of the land then we must require you to be tolerant & serve anyone & everyone who walks through your doors. (Remember? Separation of church & state? One of our country's founding principles?) Besides-supporting intolerance & bigotry is an abuse of the word Christian. Jesus would not turn anyone away.",
    "post_message4": "\"If a gay couple was to come and they wanted us to bring pizzas to their wedding, we'd have to say no.\" An Indiana pizzeria finds itself at the center of the debate over the state's religious freedom law.",
    "comment_id5": "10153851068826162",
    "commenter_b5": "Are u sure that all illegals are not paying taxes. I'm sorry to tell you that is wrong. Many illegals pay taxes hoping that one day there may be an amnesty, which they may qualify for.",
    "commenter_a5": "Lalo...every illegal is not on welfare, but EVERY illegal is not paying income tax. Is that better. BTW. If half of the illegal are on welfare and the other half dont pay taxes, you still got a problem any way you slice it.",
    "post_message5": "\"The notion that we're gonna deport 11, 12 million people from this country -- first of all, I have no idea where Mr. Trump thinks the money's gonna come from.\""
}
    
for (let i = 1; i <= 5; i++) {

    let v1 = i;
    let v2 = 'comment_id' + i;
    let v3 = 'post_message' + i;
    let v4 = 'commenter_a' + i;
    let v5 = 'commenter_b' + i;

    // Qualtrics.SurveyEngine.setEmbeddedData('comment_index' + i, v1); 
    // Qualtrics.SurveyEngine.setEmbeddedData('comment_id' + i, Qs[v2]); 
    // Qualtrics.SurveyEngine.setEmbeddedData('post' + i, Qs[v3]); 
    // Qualtrics.SurveyEngine.setEmbeddedData('parent'+ i, Qs[v4]); 
    // Qualtrics.SurveyEngine.setEmbeddedData('target' + i, Qs[v5]); 

    console.log('comment_id' + i + ': ' +  Qs[v2]); 
    console.log('comment_index' + i + ': ' +  v1); 
    console.log('post' + i + ': ' +  Qs[v3]); 
    console.log('parent' + i + ': ' + Qs[v4]); 
    console.log('target' + i + ': ' +  Qs[v5]); 

}





// Qualtrics.SurveyEngine.addOnload(function()
// {

// });

// Qualtrics.SurveyEngine.addOnReady(function() {
    
//     // get number of questions
//     const qnum = parseInt("${e://Field/qnum}")
    
    
//     // get data
// 	const url_data = "https://raw.githubusercontent.com/baruuum/random_files/main/LengthTest.json";
	
// 	fetch(url_data) 
//  	    .then(response => {
//             if (!response.ok) {
//                 throw new Error('HTTP error' + response.status);
//             }
//             return response.json();
//         })
// 	    .then((json) => {
		  	
// 			// console.log(json);
// 		  	const count = Object.values(json).length;

//             for (let i = 1; i <= qnum; i++) {
                
//                 // get random index
//                 const indx = parseInt(Math.random() * count);

//                 // get comment_id
//                 var my_id = json[indx]["comment_id"];

//                 // get post
//                 var my_post = json[indx]["post_message"]; 
//                 my_post = my_post.replace(/"/g, "'");
//                 if (my_post.length === 0) {
//                     my_post = "[This comment contained a link to an external webpage which is not shown here.]"
//                 }
//                 // get parent comment
//                 var my_parent = json[indx]["commenter_a"];
//                 my_parent = my_parent.replace(/"/g, "'");

//                 // get target commetn
//                 var my_target = json[indx]["commenter_b"]; //select a word
//                 my_target = my_target.replace(/"/g, "'");

//                 // send results to Qualtrics
//                 Qualtrics.SurveyEngine.setEmbeddedData('comment_index' + i, indx); 
//                 Qualtrics.SurveyEngine.setEmbeddedData('comment_id' + i, my_id); 
//                 Qualtrics.SurveyEngine.setEmbeddedData('post' + i, my_post); 
//                 Qualtrics.SurveyEngine.setEmbeddedData('parent'+ i, my_parent); 
//                 Qualtrics.SurveyEngine.setEmbeddedData('target' + i, my_target); 
                
//                 // console.log("comment_index" + i)
//                 // console.log("comment_id" + i)
//                 // console.log("post" + i)
//                 // console.log("parent"+ i,)
//                 // console.log("target" + i)

//             }

//             Qualtrics.SurveyEngine.setEmbeddedData("fetch_success_2", 1); 
//             // console.log("true");
            					
// 		})
//         .catch(error => {

//             Qualtrics.SurveyEngine.setEmbeddedData("fetch_success_2", 0); 
//             // console.log("false")
            
//         })
// });

// Qualtrics.SurveyEngine.addOnUnload(function()
// {
// });