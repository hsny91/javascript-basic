// let clock = () => {
//     let date = new Date();
//     let hrs = date.getHours();
//     let mins = date.getMinutes();
//     let secs = date.getSeconds();
//     let period = "AM";
//     if (hrs == 0) {
//       hrs = 12;
//     } else if (hrs >= 12) {
//       hrs = hrs - 12;
//       period = "PM";
//     }
//     hrs = hrs < 10 ? "0" + hrs : hrs;
//     mins = mins < 10 ? "0" + mins : mins;
//     secs = secs < 10 ? "0" + secs : secs;
  
//     let time = `${hrs}:${mins}:${secs}:${period}`;
//     document.getElementById("clock").innerText = time;
  
//   };
  
//   setInterval(clock, 1000);



  // let clock = (pLand,pOrt) => {
  //   var d = new Date();

  //  var datem=d.toLocaleString(pLand, { timeZone: pOrt })
    
  
  //   let time = `${datem}`;
  //   document.getElementById("clock").innerText = time;
  
  // };
  //toLocaleTimeString
  let clock = (pLand,pOrt) => {
    var d = new Date();

   var datem=d.toLocaleTimeString(pLand, { timeZone: pOrt })
    
  
    let time = `${datem}`;
    document.getElementById("clock").innerText = time;
  
};



  setInterval(function() {clock('en-US','America/New_York')}, 1000);