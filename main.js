let portfolio_title_array = [
    "ITRI Depth Estimation Project",
    "IoT Device Controller: Front-end Website",
    "IoT Device Controller: System Architecture",
    "Smart Life Washing Machine",
    "HLS: NN Accelerator"
];

let portfolio_description_array = [
    "In the self-driving car application, object detection and the distance to the objects are critical. We modified the architecture in \"Digging Into Self-Supervised Monocular Depth Estimation\" to a multiple decoder architecture. The project achieved using only the monocular camera to get the depth information in the meter unit and detect the objects simultaneously.",
    "In this project, I developed a website as the GUI interface, which can let the user control the device's status remotely. After the user presses the \"Confirm\" button, the system will deliver the instructions to change or check the device's status through AWS API Gateway, AWS Lambda, and AWS IoT services.",
    "The illustration above is the system architecture of the \"IoT Device Controller\" project. As illustrated above, I use AWS to construct the back-end system. The system uses AWS API Gateway to provide the API endpoint for the front-end website. When the website calls the API, it will trigger a program deployed in AWS Lambda, then change the device's status by AWS IoT shadow. When the device's status is changed, it will return a message to AWS API Gateway and trigger another program in AWS Lambda by the IoT rule simultaneously. The program will send the information to the device owner.",
    "There are many sharing washing machines in the public area. However, there are some security concerns, and it is not very convenient to use. To solve the problems, we developed the project to make it better. I was in charge of the embedded system and the communication to the cloud in the project. The features of my parts include (1) An interface checking the user information keeps the clothes safe. (2) Communicate with the cloud by MQTT protocol. This feature can provide machine status, letting the manager make sure the machine is working well and help develop a convenient APP or website for the users.",
    "The deep learning model takes lots of time and power to execute. To reduce the energy and time, FPGA could help. HLS is a tool letting the software engineer easily build the customized FPGA device. In this project, I used HLS to build a neural network library consisting of common layers such as the fully connected, max-pooling, ReLU, and convolutional layer. I used my library to build an MNIST model to validate the correctness."
];

let portfolio_imgName_array = [
    "./img/portfolio/depth-estimation.png",
    "./img/portfolio/iot-front-end.png",
    "./img/portfolio/iot-aws.png",
    "./img/portfolio/washingMachine.jpg",
    "./img/portfolio/hls.png"
]

let img_scale_ratio = [ 1.3592404075563698, 1.2255486322891498, 1.2265259255323544, 1.6181778205352153, 1 ];
// let img_scale_ratio = [];

// console.log("hello");
// let img = new Image(), min_img_height = "99999", i = 0;
// for (i = 0 ; i < portfolio_imgName_array.length; i++) {
//     img.src = portfolio_imgName_array[i];
//     let normalized_height = img.height/img.width;
//     img_scale_ratio.push(normalized_height);
//     if (normalized_height < min_img_height) 
//         min_img_height = normalized_height;
// }
// for (i = 0; i < portfolio_imgName_array.length; i++) {
//     img_scale_ratio[i] /= min_img_height;
// }

// console.log(img_scale_ratio);

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