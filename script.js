function myFunction() {
    const x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
    let burger = document.getElementById("burger");
    let close = document.getElementById("close");
  /*  if (burger.style.display === "block" || burger.style.display === ""){ 
      burger.style.display = "none";
      close.style.display = "block";
    } else {
      burger.style.display = "block";
      close.style.display = "none";
    }*/
    /*  if (burger.style.display === "none"){ 
        burger.style.display = "block";
        close.style.display = "none";
      } else {
        burger.style.display = "none";
        close.style.display = "block";
      }*/
      if(burger.getAttribute("src")=== "menuB.PNG"){
        burger.setAttribute("src","fermer.PNG");
      } else {
        burger.setAttribute("src", "menuB.PNG");
      }

}
