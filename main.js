window.onload = function() {
    console.log("hello");
    let ckmates = document.getElementById("ckmates-icon");
    let itri = document.getElementById("itri-icon");
    ckmates.onmouseover = function() {mouseOverCKmates()};
    ckmates.onmouseout = function() {mouseOutCKmates()};
    itri.onmouseover = function() {mouseOverITRI()};
    itri.onmouseout = function() {mouseOutITRI()};
    
    function mouseOverCKmates() {
        document.getElementById("ckmates-description").style.opacity = "1";
        document.getElementById("ckmates-description").style.padding = "20px";
        document.getElementById("ckmates-description").style.height = "100%";
    }
    function mouseOutCKmates() {
        document.getElementById("ckmates-description").style.opacity = "0";
        document.getElementById("ckmates-description").style.padding = "0px 20px";
        document.getElementById("ckmates-description").style.height = "0";
    }

    function mouseOverITRI() {
        document.getElementById("itri-description").style.opacity = "1";
        document.getElementById("itri-description").style.padding = "20px";
        document.getElementById("itri-description").style.height = "100%";
    }
    function mouseOutITRI() {
        document.getElementById("itri-description").style.opacity = "0";
        document.getElementById("itri-description").style.padding = "0px 20px";
        document.getElementById("itri-description").style.height = "0";
    }
    console.log("end");
};