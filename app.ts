//  let guess a number For grading system

let percentage: number = 98;

//  Using Conditions

if(percentage >= 90 && percentage <= 99.99){
    console.log("You got A+")
}else if(percentage >= 80 && percentage <= 89.99){
    console.log("You got A")
}else if(percentage >= 70 && percentage <= 79.99){
    console.log("You got B")
}else if(percentage >= 60 && percentage <= 69.99){
    console.log("You got C")
}else if(percentage >= 50 && percentage <= 59.99){
    console.log("You got D")
}else{
    console.log("fail")
}