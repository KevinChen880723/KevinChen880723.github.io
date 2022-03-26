window.onload = function() {
    let portfolio_idx = 0;
    let portfolio_title_array = [
        "ITRI Depth Estimation Project",
        "IoT: Device Controller",
        "Smart Life Washing Machine"
    ];

    let portfolio_description_array = [
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est illum quaerat quae pariatur quia, culpa recusandae molestiae aut minima voluptate.",
        "22222222222222",
        "333333333333333 33333333333333333333333333333333 3333333333333333333333333333333333333333333333333333 3333333333333333333333333333333333333 33333333333333333333333333333333"
    ];

    let portfolio_imgName_array = [
        "./img/portfolio/depth-estimation.png",
        "./img/portfolio/iot-front-end.png",
        "./img/portfolio/washingMachine.jpg"
    ]

    let ckmates = document.getElementById("ckmates-icon");
    let itri = document.getElementById("itri-icon");
    let view_toeic_cert = document.getElementById("view-toeic-cert");
    let portfolio_title = document.getElementById("portfolio-title");
    let portfolio_img = document.getElementById("portfolio-img");
    let portfolio_description = document.getElementById("portfolio-description");

    // Initialize some function 
    ckmates.onmouseover = function() {mouseOverCKmates()};
    ckmates.onmouseout = function() {mouseOutCKmates()};
    itri.onmouseover = function() {mouseOverITRI()};
    itri.onmouseout = function() {mouseOutITRI()};
    view_toeic_cert.onmouseover = function() {mouseOverToeicScore()};
    view_toeic_cert.onmouseout = function() {mouseOutToeicScore()};
    document.getElementById("l-botton-container").onclick = function() {left_botton()};
    document.getElementById("r-botton-container").onclick = function() {right_botton()};
    
    // Initialize the contents in the portfolio section.
    portfolio_title.textContent = portfolio_title_array[portfolio_idx];
    portfolio_img.src = portfolio_imgName_array[portfolio_idx];
    portfolio_description.textContent = portfolio_description_array[portfolio_idx];

    // Set the contents of the functions.
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
        document.getElementById("toeic-certificate").style.width = "70%";
    }
    function mouseOutToeicScore() {
        document.getElementById("toeic-certificate").style.width = "0";
    }

    function  left_botton(){
        if (portfolio_idx > 0) portfolio_idx -= 1;
        else portfolio_idx = portfolio_title_array.length - 1;
        portfolio_title.textContent = portfolio_title_array[portfolio_idx];
        portfolio_img.src = portfolio_imgName_array[portfolio_idx];
        portfolio_description.textContent = portfolio_description_array[portfolio_idx];
    }

    function right_botton() {
        if (portfolio_idx < portfolio_title_array.length - 1) portfolio_idx += 1;
        else portfolio_idx = 0;
        portfolio_title.textContent = portfolio_title_array[portfolio_idx];
        portfolio_img.src = portfolio_imgName_array[portfolio_idx];
        portfolio_description.textContent = portfolio_description_array[portfolio_idx];
    }

};