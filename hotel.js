/* The script is placed inside an immediately invoked function expression
   which helps protect the scope of variables */

//PART ONE: GENERATE A RANDOM ROOM RATE. Write a function called genRand() that has no paremeters that will return a room rate between 100 and 400. HINT: You should hit a number within this range within 10 tries.
  function genRand(){
      for (var x = 1; x <=10; x++){
          return Math.ceil(Math.random() * 300) + 100;
          }  
  }


  // PART TWO: CALCULATE AND RETURN THE EXPIRY DETAILS FOR THE OFFER. Write a function called offerExpires that has one parameter a Date object. The function should return a string in the format "OFFER EXPIRES NEXT "WeekDay" (Date Month Year)". The date should be one week from today's date
var today = new Date("March 5, 2019");

    function offerExpires(today){
        
        switch(today.getMonth)
        {
        case 0: return  "January"; break;
        case 1: return "February"; break;
        case 2: return "March"; break;
        case 3: return "April"; break;
        case 4: return "May"; break;
        case 5: return "June"; break;
        case 6: return "July"; break;
        case 7: return "August"; break;
        case 8: return "September"; break;
        case 9: return "October"; break;
        case 10: return "November"; break;
        case 11: return "December"; break;
        }
        
        switch(today.getDay)
    {
        case 0: return "Sunday"; break;
        case 1: return "Monday"; break;
        case 2: return "Tuesday"; break;
        case 3: return "Wednesday"; break;
        case 4: return "Thursday"; break;
        case 5: return "Friday"; break;
        case 6: return "Saturday"; break;
    }  
        return "OFFER EXPIRES NEXT " + today.getDay() +"<br> (" + today.getDate() + " " + today.getMonth() + " " + today.getFullYear() + ")";
}

  
//PART THREE: CALL THE FUNCTIONS AND WRITE INFO TO WEBPAGE

//Call getRand() function to get random room rate and write it to the special rate section on the webpage
document.getElementById("specialRate").innerHTML = genRand();
    
//create a new Date object
var dayTwo = new Date();

//Call the function passing the date object to it and write it to the offer ends section on the webpage
document.getElementById("offerEnds").innerHTML = offerExpires(today);



