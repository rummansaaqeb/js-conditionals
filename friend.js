const marks = 90;
const friendMarks = 80;

if(marks > 80){
    if(friendMarks >= 80){
        console.log("Go for a lunch")
    }
    if(friendMarks < 80 && friendMarks >= 60){
        console.log("Good luck next time")
    }
    if(friendMarks < 60 && friendMarks >= 40){
        console.log("Keep your friend's message unseen")
    }
    if(friendMarks < 40){
        console.log("Block Your Friend")
    }
}
else{
    if(marks <= 80){
        console.log("Go to home and sleep and act sad")
    }
}