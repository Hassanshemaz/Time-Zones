let a;
let date;
let time;
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
setInterval(() => {
a = new Date();
date = a.toLocaleDateString(undefined,options);
time = a.toLocaleString("en-US",{timeZone:'America/New_york',timeStyle:'medium',hourCycle:'h12'},options);

document.getElementById("time").innerHTML=time +" on " +   date;

}, 1000);
