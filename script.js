document.addEventListener("DOMContentLoaded", function() {
    //var typedText = document.getElementById("typed-text");
    var output01 = document.getElementById("output01");
    var output02 = document.getElementById("output02");
    var output03 = document.getElementById("output03");
    var output04 = document.getElementById("output04");
    var output05 = document.getElementById("output05");
    var output06 = document.getElementById("output06");
    var output07 = document.getElementById("output07");
    var output08 = document.getElementById("output08");
    var output09 = document.getElementById("output09");
    var output10 = document.getElementById("output10");

    // Start typing animation
    setTimeout(function() {
        typeCommand(output03, textToType);
    }, 2000); // Delay before typing starts (adjust as needed)

    // Text to type
    var textToType = " show users";

    // Type command
    function typeCommand(element, text) {
       var i = 0;
       var typingInterval = setInterval(function() {
           if (i < text.length) {
               element.textContent += text.charAt(i);
               i++;
           } else {
               clearInterval(typingInterval);
               // After typing is complete, remove the "hidden" class from the next element
               var nextElementId = element.id.replace("output0", "output3");
               var nextElement = document.getElementById(nextElementId);
               if (nextElement) {
                   nextElement.classList.remove("hidden");
               }
           }
       }, 100); // Typing speed (adjust as needed)
       }

    // Show command "show users"
    setTimeout(function() {
        output01.classList.remove("hidden");
    }, 500);

    // Show command output
    setTimeout(function() {
        output02.classList.remove("hidden");
    }, 1000);

    // Show command output2
    setTimeout(function() {
        output03.classList.remove("hidden");
    },1500);

    // Show command output3
    setTimeout(function() {
        output04.classList.remove("hidden");
    }, 3500);

    // Show command output4
    setTimeout(function() {
        output05.classList.remove("hidden");
    }, 3500);

    // Show command output5
    setTimeout(function() {
        output06.classList.remove("hidden");
    }, 3500);

    // Show command output6
    setTimeout(function() {
        output07.classList.remove("hidden");
    }, 4000);

    // Show command output6
    setTimeout(function() {
        output08.classList.remove("hidden");
    }, 4500);

    // Show command output6
    setTimeout(function() {
        output09.classList.remove("hidden");
    }, 5000);

    // Show command output6
    setTimeout(function() {
        output10.classList.remove("hidden");
    }, 5500);

});
