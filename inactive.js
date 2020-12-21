const user = {
    name: "Qasim Asad",
    age: "25",
    city: "san francisco",
    lastActivity: new Date().getTime()
}

const inactiveFirstStage = () => {
    console.log("User has been inactive for the past 1-2 minutes");
}

const inactiveSecondStage = () => {
    console.log("User has been inactive for the past 3-4 minutes");
}

const inactiveThirdStage = () => {
    console.log("User has been inactive for the past 5-6 minutes");
}

const milliInOne = 60000;

// this is the main method that acts like a worker and runs every 1 minute
setInterval(function(){
    // please write your code here
    const difference = Date.now() - user.lastActivity;

    if(difference >= milliInOne && difference <= milliInOne * 2){
        inactiveFirstStage();
    }else if(difference >= milliInOne * 2 && difference <= milliInOne * 3){
        inactiveSecondStage();
    }else if(difference >= milliInOne * 4 && difference <= milliInOne * 5){
        inactiveThirdStage();
    }else{
        user.lastActivity = new Date().getTime();
        inactiveFirstStage();
    }

}, milliInOne);