
// add 

var addbox =document.getElementById("addbox");
var addclose =document.getElementById("addclose");
addclose.addEventListener("click",function(){

     addbox.style.display="none";
console.log("close")


})


// slider image




var left=document.getElementById("left")
var right=document.getElementById("right")
var imgcontainer = document.getElementById("imgcontainer")


left.addEventListener("click",function(){
  
          imgcontainer.scrollBy({
        left: -1000,
        behavior: "smooth"
       

     })

     })


     right.addEventListener("click",function(){
  
          imgcontainer.scrollBy({
        left: +1000,
        behavior: "smooth"
    

     })

     })

// sidenav


  const sidenav = document.getElementById("sidenav");
  const openBtn = document.getElementById("menu");
  const closeBtn = document.getElementById("close");

  openBtn.addEventListener("click", () => {
    sidenav.style.right = "0"; // Slide in
  });

  closeBtn.addEventListener("click", () => {
    sidenav.style.right = "-50%"; // Slide out
  });











  



var left = document.getElementById("ld");
var right = document.getElementById("rd");
var dresscontainer = document.getElementById("dresscontainer");

let scrollInterval; // shared between both left & right

// LEFT HOVER — Scroll leftward
left.addEventListener("mouseenter", function () {
  scrollInterval = setInterval(function () {
    dresscontainer.scrollBy({
      left: -10, // scroll to the left
      behavior: "auto"
    });
  }, 10);
});

left.addEventListener("mouseleave", function () {
  clearInterval(scrollInterval); // stop scrolling
});

// RIGHT HOVER — Scroll rightward
right.addEventListener("mouseenter", function () {
  scrollInterval = setInterval(function () {
    dresscontainer.scrollBy({
      left: +10, // scroll to the right
      behavior: "auto"
    });
  }, 10);
});

right.addEventListener("mouseleave", function () {
  clearInterval(scrollInterval); // stop scrolling
});





// header vist
var mostwanted = document.getElementById("mostwanted")
var dresscontainer= document.getElementById("dresscontainer")

mostwanted.addEventListener("click",function(){


       dresscontainer.scrollIntoView({behavior: "smooth" });


})
var newarrival =document.getElementById("newarrival")
var newdress=document.getElementById("newcontainer")
newarrival.addEventListener("click",function(){
   newdress.scrollIntoView({behavior:"smooth"});



})




// search function 

 var search = document.getElementById("search");
 var container=document.getElementById("dressbox");
 var productlist=container.querySelectorAll("div");

 search.addEventListener("keyup",function(event){
  var entervalue = event.target.value.toUpperCase()
 


  for( var count=0;count<productlist.length;count=count+1)
      {

             var productname =productlist[count].querySelector("h1").textContent
          if(productname.toUpperCase().indexOf(entervalue)<0)
          {
            productlist[count].style.display="none";

          }
          else{

            productlist[count].style.display= "block";
          }



      }
        







 })





