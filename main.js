let portfolio_title_array = [
    "ITRI Depth Estimation Project",
    "IoT Device Controller: Front-end Website",
    "IoT Device Controller: System Architecture",
    "Smart Life Washing Machine",
    "HLS: NN Accelerator"
];

let portfolio_description_array = [
    "In the self-driving car application, object detection and the distance to the objects are critical. We modified the architecture in \"Digging Into Self-Supervised Monocular Depth Estimation\" to a multiple decoder architecture. The project achieved using only the monocular camera to get the depth information in the meter unit and detect the objects simultaneously.",
    "In the \"IoT Device Controller\" project, I developed a website as the GUI interface let the user control the device status. After the user presses the \"Confirm\" button, the system will deliver the instructions to control the device through AWS API Gateway, AWS Lambda, and AWS IoT services.",
    "Raspberry Pi could be an IoT device that lets the user control the GPIOs by Python code. I didn't have the Raspberry Pi back then, so I wrote the Python code on the PC to simulate the device. As illustrated above, the program shows the new status when the user changes the device status.",
    "333333333333333 33333333333333333333333333333333 3333333333333333333333333333333333333333333333333333 3333333333333333333333333333333333333 33333333333333333333333333333333",
    "The deep learning model takes lots of time and power to execute. To reduce the energy and time, FPGA could help. HLS is a tool letting the software engineer easily build the customized FPGA device. In this project, I used HLS to build a neural network library consisting of common layers such as the fully connected, max-pooling, ReLU, and convolutional layer. I used my library to build an MNIST model to validate the correctness."
];

let portfolio_imgName_array = [
    "./img/portfolio/depth-estimation.png",
    "./img/portfolio/iot-front-end.png",
    "./img/portfolio/iot-aws.png",
    "./img/portfolio/washingMachine.jpg",
    "./img/portfolio/hls.png"
]

// let img_scale_ratio = [ 1.7560975609756098, 1, 2.16260162601626, 2.1105691056910567 ];
let img_scale_ratio = [];

console.log("hello");
let img = new Image(), min_img_height = "99999", i = 0;
for (i = 0 ; i < portfolio_imgName_array.length; i++) {
    img.src = portfolio_imgName_array[i];
    let normalized_height = img.height/img.width;
    img_scale_ratio.push(normalized_height);
    if (normalized_height < min_img_height) 
        min_img_height = normalized_height;
}
for (i = 0; i < portfolio_imgName_array.length; i++) {
    img_scale_ratio[i] /= min_img_height;
}

console.log(img_scale_ratio);

window.onload = function() {
    let portfolio_idx = 0;
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
    portfolio_img.style.width = 100 / img_scale_ratio[portfolio_idx] + "%";
    portfolio_img.style.padding = "0% " + ((100 - (100 / img_scale_ratio[portfolio_idx])) / 2) + "%";
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
        portfolio_img.style.width = 100 / img_scale_ratio[portfolio_idx] + "%";
        portfolio_img.style.padding = "0% " + ((100 - (100 / img_scale_ratio[portfolio_idx])) / 2) + "%";
        portfolio_description.textContent = portfolio_description_array[portfolio_idx];
    }

    function right_botton() {
        if (portfolio_idx < portfolio_title_array.length - 1) portfolio_idx += 1;
        else portfolio_idx = 0;
        portfolio_title.textContent = portfolio_title_array[portfolio_idx];
        portfolio_img.src = portfolio_imgName_array[portfolio_idx];
        portfolio_img.style.width = 100 / img_scale_ratio[portfolio_idx] + "%";
        portfolio_img.style.padding = "0% " + ((100 - (100 / img_scale_ratio[portfolio_idx])) / 2) + "%";
        portfolio_description.textContent = portfolio_description_array[portfolio_idx];
    }

};