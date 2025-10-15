//change 5 to the total number of questions
//RNL 10/15/2025: updated the total number of questions to 10
var total=10
var question=new Array()
for (i=1;i<=total+1;i++){
temp="choice"+i+"=new Array()"
eval(temp)
}
var solution=new Array()

/*Below lists the phrases that will be randomly displayed if the user correctly answers the question. You may extend or shorten this list as desired*/
var compliments=new Array()
compliments[0]="Excellent!"
compliments[1]="Wow, you're really rocking!"
compliments[2]="You must have studied hard. Good job!"
compliments[3]="Right on."
compliments[4]="Correct!"
compliments[5]="Great Job!"
compliments[6]="Good work!"


/*Below lists the questions, its choices, and finally, the solution to each question. Folow the exact format below when editing the questions. You may have as many questions as needed. Check doc at http://javascriptkit.com/script/script2/comboquiz.htm for more info
*/
// RNL 10/15/2025: Modified original 5 questions and added five more related to 7th Grade Comp Sci lesson development
question[1]="Which of the following is the BEST definition of an algorithm?"
choice1[1]="A type of computer chip."
choice1[2]="A set of step-by-step instructions to solve a problem."
choice1[3]="A popular programming language for video games."
choice1[4]="A website for sharing photos."

question[2]="Which of these is a real-world example of an algorithm?"
choice2[1]="A recipe for baking a cake."
choice2[2]="The final baked cake."
choice2[3]="The oven you use to bake."
choice2[4]="A picture of the cake."

question[3]="Imagine you have an algorithm for your morning routine. Which step would come first?"
choice3[1]="Eat breakfast."
choice3[2]="Brush your teeth."
choice3[3]="Wake up."
choice3[4]="Get dressed."

question[4]="When a GPS like Google Maps finds the fastest way to your friend's house, it is using..."
choice4[1]="A really big map."
choice4[2]="A keyboard."
choice4[3]="The internet's main wire."
choice4[4]="An algorithm."

question[5]="Why is the order of steps important in an algorithm?"
choice5[1]="It's not important; you can do them in any order."
choice5[2]="It makes the algorithm look better."
choice5[3]="It ensures you get the correct result every time."
choice5[4]="It helps the computer run faster."

question[6]="What does a computer do when it "runs" an algorithm?"
choice5[1]="It moves around the room."
choice5[2]="It asks a person for the answer."
choice5[3]="It follows the instructions in the algorithm exactly."
choice5[4]="It guesses what to do next."

question[7]="If you are building a LEGO set using the instruction booklet, the booklet is like..."
choice5[1]="The LEGO bricks."
choice5[2]="The finished LEGO model."
choice5[3]="The box it came in."
choice5[4]="An algorithm."

question[8]="Which of the following problems could be solved with an algorithm?"
choice5[1]="Deciding your favorite color."
choice5[2]="Sorting a list of names alphabetically."
choice5[3]="Feeling happy or sad."
choice5[4]="Guessing a random number."

question[9]="A computer program is essentially..."
choice5[1]="The computer's power cord."
choice5[2]="The physical screen and keyboard."
choice5[3]="An algorithm written in a language the computer understands."
choice5[4]="A person who tells the computer what to do."

question[10]="What is a "bug" in a computer science algorithm?"
choice5[1]="An insect inside the computer."
choice5[2]="An error in the instructions that causes a wrong result."
choice5[3]="A feature that makes the program better."
choice5[4]="The person who wrote the algorithm."

solution[1]="b"
solution[2]="a"
solution[3]="c"
solution[4]="d"
solution[5]="c"
solution[6]="c"
solution[7]="d"
solution[8]="b"
solution[9]="c"
solution[10]="b"


