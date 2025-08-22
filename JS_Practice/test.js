// If a customer has more than 100 points 
// They are considered as 'gold' customer otherwise they are 'silver' customer

let points=190;

let type;
if(points>100) {
 type='Gold';
} else {
    type='silver';
}
console.log(type);