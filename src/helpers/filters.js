import Vue from "vue";

Vue.filter("dateConvFull", function(value) {
 const milliseconds = value * 1000
 const dateObject = new Date(milliseconds)
 /* const humanDateFormat = dateObject.toLocaleString() //2019-12-9 10:30:15
console.log(dateObject) */

const day=dateObject.toLocaleString("en-US", {weekday: "long"}) ;// Monday

 const time=dateObject.toLocaleString("en-US", { timeStyle: "short"});
console.log( )
 // 10 AM


 return `${time} ,${day} (GMT+1)`
});

Vue.filter("dayConvFull", function(value) {
    const milliseconds = value * 1000
    const dateObject = new Date(milliseconds)
    /* const humanDateFormat = dateObject.toLocaleString() //2019-12-9 10:30:15
   console.log(dateObject) */
   
   const day=dateObject.toLocaleString("en-US", {weekday: "long"}) ;// Monday
      
   
    return `${day}`
   });

   Vue.filter("wkdayConvFull", function(value) {
    const milliseconds = value * 1000
    const dateObject = new Date(milliseconds)
    /* const humanDateFormat = dateObject.toLocaleString() //2019-12-9 10:30:15
   console.log(dateObject) */
   
   const time=dateObject.toLocaleString("en-US", { timeStyle: "short"});
   console.log( )
      
   
    return `${time}`
   });