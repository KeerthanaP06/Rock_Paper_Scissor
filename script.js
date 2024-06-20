
let user_wish=confirm("Hey!! Can we play rock,paper,scissor");
if(user_wish){
    StartGame();
}
else{
    EndGame();
}

function StartGame(){
    while(true){
    let user=prompt("Enter rock,paper or scissor");
    if(isValid(user)){
        const computer =["rock","paper","scissor"];
        let com_choice=computer[Math.floor(Math.random()*3)];
    
        var winner=Whowins(user,com_choice);
          
        if(winner=="Tie game"){
            alert("tie game");
            let user=confirm("Can you try again");
            if(user)
                continue;
            else{
                EndGame();
             break;
            }
        }
         else{
        alert(`${winner} wins`);
        let userWish= confirm("Can you try again");
        if(userWish)
         continue;
     else{
        EndGame(); 
        break;
     }
    }
    }
       else{
         if( invalid_but_want_to_continue()){
        continue;
       }
       else{
        EndGame();
        break;
       }
    }
   
    }
}
    
    function isValid(user){
        if((user=="rock" || user=="paper" || user=="scissor"))
            return true;
        else return false;
    }

    function Whowins(user,computer){
        let winner;
        if(user=="rock" && computer=="paper")
            winner="computer";
        else if(user=="paper" && computer=="rock")
            winner="user";
        else if(user=="rock" && computer=="scissor")
            winner="user";
       else if(user=="scissor" && computer=="rock")
            winner="computer";
        else if(user=="scissor" && computer=="paper")
            winner="user";
        else if(user=="paper" && computer=="scissor")
            winner="computer";
        else 
        winner="Tie game";
    return(
        winner
    );
    }

    function invalid_but_want_to_continue(){
        alert("invalid choice");
       let res= confirm("Do you want to continue");
       return(res);
    }

function EndGame(){
    return(
        alert("It's Okay! We play after some time")
    );
}