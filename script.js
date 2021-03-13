const favoriteButton = document.getElementById("favor"); 

                    //    For Cart Button

const cartButtonApple = document.getElementsByClassName("buton")[0];

const cartButtonOrange = document.getElementsByClassName("buton")[2];

const cartButtonPineapple = document.getElementsByClassName("buton")[4];

const cartButtonWatermelon = document.getElementsByClassName("buton")[6];

const cartButtonLemon = document.getElementsByClassName("buton")[8];

                        //  For Favorite Button

const favorButtonApple = document.getElementsByClassName("buton")[1];

const favorButtonOrange = document.getElementsByClassName("buton")[3];

const favorButtonPineapple = document.getElementsByClassName("buton")[5];

const favorButtonWatermelon = document.getElementsByClassName("buton")[7];

const favorButtonLemon = document.getElementsByClassName("buton")[9];

const ol = document.querySelector("ol");

const ul = document.querySelector("ul");


                //   For Favorite Button

 favorButtonApple.addEventListener("click", function() {
    let div = document.createElement("div");
    let appleImage = document.createElement("img");
    appleImage.src = "apple.jpg";
    div.appendChild(document.createTextNode("Apple"));
    ul.appendChild(appleImage);
    ul.appendChild(div);
    
   
 }) 

 favorButtonOrange.addEventListener("click", function() {
    let div = document.createElement("div");
    let orangeImage = document.createElement ("img");
    orangeImage.src = "orange.jpg";
    div.appendChild(document.createTextNode("Orange"));
    ul.appendChild(orangeImage);
    ul.appendChild(div);
 }) 

 favorButtonPineapple.addEventListener("click", function() {
    let div = document.createElement("div");
    let pineappleImage = document.createElement ("img");
    pineappleImage.src = "pineapple.jpg";
    div.appendChild(document.createTextNode("Pineapple"));
    ul.appendChild(pineappleImage);
    ul.appendChild(div);
 }) 

 favorButtonWatermelon.addEventListener("click", function() {
    let div = document.createElement("div");
    let watermelonImage = document.createElement ("img");
    watermelonImage.src = "watermelon.jpg";
    div.appendChild(document.createTextNode("Watermelon"));
    ul.appendChild(watermelonImage);
    ul.appendChild(div);
 }) 
 
 favorButtonLemon.addEventListener("click", function() {
    let div = document.createElement("div");
    let lemonImage = document.createElement ("img");
    lemonImage.src = "lemon.jpg";
    div.appendChild(document.createTextNode("Lemon"));
    ul.appendChild(lemonImage);
    ul.appendChild(div);
 }) 
 
                
                // For Cart Button

cartButtonApple.addEventListener("click", function() {
    let li = document.createElement("li");
    li.appendChild(document.createTextNode("Apple"));
    ol.appendChild(li);
    cartButtonApple.classList.toggle("done");
    // let replaceElement = document.createElement("button");
    // replaceElement.textContent = "Added to cart";
    // cartButtonApple.replaceChild(replaceElement,cartButtonApple);
    // cartButtonApple.appendChild(document.createTextNode("Added to Cart"));
})

cartButtonOrange.addEventListener("click", function() {
    // console.log ("ADDED!!!");
    let li = document.createElement("li");
    li.appendChild(document.createTextNode("Orange"));
    ol.appendChild(li);
})

cartButtonPineapple.addEventListener("click", function() {
    // console.log ("ADDED!!!");
    let li = document.createElement("li");
    li.appendChild(document.createTextNode("Pineapple"));
    ol.appendChild(li);
})

cartButtonWatermelon.addEventListener("click", function() {
    // console.log ("ADDED!!!");
    let li = document.createElement("li");
    li.appendChild(document.createTextNode("Watermelon"));
    ol.appendChild(li);
})

cartButtonLemon.addEventListener("click", function() {
    // console.log ("ADDED!!!");
    let li = document.createElement("li");
    li.appendChild(document.createTextNode("Lemon"));
    ol.appendChild(li);
})