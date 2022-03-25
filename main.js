window.onload = function() {
    let ckmates = document.getElementById("ckmates-icon");
    let itri = document.getElementById("itri-icon");
    let view_toeic_cert = document.getElementById("view-toeic-cert")
    ckmates.onmouseover = function() {mouseOverCKmates()};
    ckmates.onmouseout = function() {mouseOutCKmates()};
    itri.onmouseover = function() {mouseOverITRI()};
    itri.onmouseout = function() {mouseOutITRI()};
    view_toeic_cert.onmouseover = function() {mouseOverToeicScore()};
    view_toeic_cert.onmouseout = function() {mouseOutToeicScore()};
    
    function mouseOverCKmates() {
        document.getElementById("ckmates-description").style.opacity = "1";
        document.getElementById("ckmates-description").style.padding = "20px";
        document.getElementById("ckmates-description").style.height = "100%";
        document.getElementById("ckmates-description").style.border = "solid #aaa 2px";
    }
    function mouseOutCKmates() {
        document.getElementById("ckmates-description").style.opacity = "0";
        document.getElementById("ckmates-description").style.padding = "0px 20px";
        document.getElementById("ckmates-description").style.height = "0";
        document.getElementById("ckmates-description").style.border = "solid #aaa 0px";
    }

    function mouseOverITRI() {
        document.getElementById("itri-description").style.opacity = "1";
        document.getElementById("itri-description").style.padding = "20px";
        document.getElementById("itri-description").style.height = "100%";
        document.getElementById("itri-description").style.border = "solid #aaa 2px";
    }
    function mouseOutITRI() {
        document.getElementById("itri-description").style.opacity = "0";
        document.getElementById("itri-description").style.padding = "0px 20px";
        document.getElementById("itri-description").style.height = "0";
        document.getElementById("itri-description").style.border = "solid #aaa 0px";
    }
    
    function mouseOverToeicScore() {
        // document.getElementById("toeic-certificate").style.opacity = "1";
        document.getElementById("toeic-certificate").style.width = "70%";
    }
    function mouseOutToeicScore() {
        // document.getElementById("toeic-certificate").style.opacity = "0";
        document.getElementById("toeic-certificate").style.width = "0";
    }

};