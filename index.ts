import inquirer from "inquirer"

const quiz: {
    Question_1: string;
    Question_2: string;
    Question_3: string;
    Question_4: string;
    Question_5: string;
} = await inquirer.prompt([
    {
        name: "Question_1",
        type: "list",
        message: "1. Who developed and designed TypeScript?",
        choices: ["Microsoft" , "Amazon" , "Oracle" , "Typescript" ]
    },
    {
        name: "Question_2",
        type: "list",
        message: "2. When was the first time TypeScript was made public?",
        choices: ["Dec 2012" ,"October 2012", "October 2013" ," November 2013"]
    },
    {
        name: "Question_3",
        type: "list",
        message: "3. Which of the following is a filename extension for typescript?",
        choices: [".ts" , ".nod" , ".txt" , ".tt "],
    },
    {
        name: "Question_4",
        type: "list",
        message: "4. The following are backported features of typescript, except?",
        choices:["Classes" , "Methods" , "Modules" , "Arrow"]
    },
    {
        name: "Question_5",
        type: "list",
        message: "A typescript can be installed or managed through?",
        choices:["void" , "space" ,"npm" , "tag"]
    }
]);

let score: number = 0 ;

switch(quiz.Question_1){
    case "Microsoft":
        console.log("1. Correct!");
        ++score;
        break;
        default:
            console.log("1.Incorrect!");     
}

switch(quiz.Question_2){
    case "October 2012":
        console.log("2. Correct!");
        ++score;
        break;
        default:
            console.log("2.Incorrect!");     
}

switch(quiz.Question_3){
    case ".ts":
        console.log("3. Correct!");
        ++score;
        break;
        default:
            console.log("3.Incorrect!");     
}

switch(quiz.Question_4){
    case "Methods":
        console.log("4. Correct!");
        ++score;
        break;
        default:
            console.log("4.Incorrect!");     
}

switch(quiz.Question_5){
    case "npm":
        console.log("5. Correct!");
        ++score;
        break;
        default:
            console.log("5.Incorrect!");     
}
console.log(`Score: ${score}`);
