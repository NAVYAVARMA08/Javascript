// alter 
 function showMessage() {
    let message = "Hello!";
    alert(message);
  }
  showMessage(); // Displays: Hello!
  alert(message);

//  RestParameters 
 function showName(firstName, lastName, ...titles) {
    console.timeLog(firstName + ' ' + lastName); // "Julius Caesar"
    console.log(titles[0]); // "Consul"
     console.log(titles.length); // 2
   }
  
   showName("Julius", "Caesar", "Consul", "Imperator");
  
// query selector


