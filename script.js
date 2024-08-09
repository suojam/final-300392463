// get the date from the input field
function getDate() {
    var currentInput = document.getElementById(`birthday`).value;
    var settingDate = new Date(currentInput);
    return settingDate;
}

// start the countdown
function start() {

 
    // Set the date we're counting down to
    var interval = setInterval(function(){
        var now = new Date();
        // Find the distance between now and the count down date
        var distance = getDate() - now;
        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance / (1000 * 60 *60 *24));
        var hours = Math.floor(distance % (1000 * 60 *60*24) / (1000 * 60 *60));
        var minutes = Math.floor(distance % (1000 * 60 *60) / (1000 * 60));
        var second = Math.floor(distance % (1000 * 60) / 1000);
        var dicsecs = Math.floor((distance % (1000 * 60))/ 100);
        // Output the result in an element with id="demo"
        document.getElementById(`days`).innerText = days;
        document.getElementById(`hours`).innerText = hours;
        document.getElementById(`minutes`).innerText = minutes;
        document.getElementById(`seconds`).innerText = second;
        document.getElementById(`dicsecs`).innerText = dicsecs;

        // document.getElementById(`days`).style.color = `red`;
        // document.getElementById(`hours`).style.color = `red`;
        // document.getElementById(`minutes`).style.color = `red`;
        // document.getElementById(`seconds`).style.color = `red`;
        // document.getElementById(`dicsecs`).style.color = `red`;


        // If the count down is over, write some text 
        if (distance < 0) {
          clearInterval(interval);
          document.getElementById(`demo`).innerHTML = `<span>Date is Expired!</span>`;
          document.getElementById(`demo`).style.color = `red`;
        } 
    },100);
    

    
    
    // Update the count down every 1 second
    
    
        // Get today's date and time

        
}



