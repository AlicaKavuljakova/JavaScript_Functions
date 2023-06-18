console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
function printOdds(count){
    if(count>0){
for(let i=0;i<=count;i++){
    if(i%2!=0){
        console.log(`${i} is odd`)
    }}
}
}
printOdds(10)
// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");
function checkAge(userName="student",age=0){
let above16=`Congrats ${userName}, you can drive!`;
let below16=`Sorry ${userName}, but you need to wait until you're 16.`;
if(age>16){
    console.log(above16);
}
else{console.log(below16)}
}
checkAge("ali",15)
checkAge("ali",21)
checkAge("",15)
checkAge("ali")

// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");
function Quadrant(x,y){
    let quad=0;
    if(x>0 && y>0){
quad=1;
    }
    else if(x>0 && y<0){
        quad=2;
    }
    else if(x<0 && y<0){
        quad=3;
    }
    else if(x<0 && y>0){
        quad=4;
    }
    console.log(`${x} and ${y} lay in ${quad}`)
}
Quadrant(1,1)
Quadrant(-1,1)
Quadrant(-1,-1)
Quadrant(1,-1)
// Exercise 4 Section
console.log("EXERCISE 4:\n==========\n");
let checkTriangle=(a,b,c)=>{
    let message="These values do ";
    if(a+b>c || a+c>b || b+c>a){
        if(a==b && b==c){
            message+="create an equilateral triangle"
        }
else if(a==b || b==c || a==c){
    message+="create an isosceles triangle"
}
else{message+= "create a scalene triangle";}
    }
    else{
        message+="not create a triangle"
    }
    console.log(message)
}
checkTriangle(2,2,2)
checkTriangle(5,1,)
checkTriangle(2,3,4)
checkTriangle(5,5,9)

// Exercise 5 Section
console.log("EXERCISE 5:\n==========\n");
function LogData(planLimit,day,usage){
    let message="";
    let average=(planLimit/30).toFixed(2);
    let daysRem=30-day;
    let userAve=(usage/day).toFixed(2);
    let exceed=(userAve*30-planLimit).toFixed(1);
    let stayBelow=((planLimit-usage)/daysRem).toFixed(2);
    if(usage>= planLimit){
message="You do not have any data left";
    }
    else {
message=`${day} days used, ${daysRem} days remaining
Average daily use: ${average} GB/day
You are EXCEEDING your average daily use (${userAve} GB/day),
continuing this high usage, you'll exceed your data plan by
${exceed} GB.
To stay below your data plan, use no more than ${stayBelow} GB/day.`
    }
    console.log(message);
}
LogData(100,15,56)