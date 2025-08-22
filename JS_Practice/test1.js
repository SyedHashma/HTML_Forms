//Hours
// If hour is between 6AM and 12PM: Good Morning 
// If hour is between 1PM and 4PM: Good Afternoon 
//Otherwise Good Evening
let time=3;
let greet;
if(time>=6 && time<=12)
    greet='Good Morning';
if(time>=1&& time<=4)
    greet='Good Afternoon';
else
    greet='Good Evening';
console.log(greet)
