
const navMenu=document.getElementById("nav-menu"),
navToggle=document.getElementById("nav-toogle"),
navClose=document.getElementById("nav-close")
/*=============== SHOW MENU ===============*/
if(navToggle)
{
  navToggle.addEventListener('click',() => {
    navMenu.classList.add("show-menu")
  }
  )
}

/*============== MENU HIDDEN ===============*/
if(navClose)
{
  navClose.addEventListener('click',() => {
    navMenu.classList.remove("show-menu")
  }
  )
}

/*=============== REMOVE MENU MOBILE ===============*/
const navlinks=document.querySelectorAll(".nav-link")
function linkAction(){
  const navMenu=document.getElementById("nav-menu")

  navMenu.classList.remove("show-menu")
}
navlinks.forEach(n => n.addEventListener('click',linkAction))
/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader(){
  const header=document.getElementById("header")
  if(this.scrollY >= 80) header.classList.add(scroll-header);
  else Header.classList.remove("scroll-header")
}
window.addEventListener("scroll" , scrollHeader)
/*=============== TESTIMONIAL SWIPER ===============*/
var swiper = new Swiper(".projects-wrapper", {
    loop:"true",
    pagination: {
      el: ".swiper-pagination",
      clickable:"true",
    },
  });
/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
// get all sections that have an id defined
const sections = document.querySelectorAll("section[id]");
// add an event listener listening for scroll
window.addEventListener("scroll", navHighlighter);
function navHighlighter()
{
  // get current scroll position
  let scrollY = window.pageYOffset;
  // Now we loop through sections to get height, top and ID values for each
  sections.forEach(current => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50,
    sectionId = current.getAttribute("id");
    if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight)
      {
        document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add("active-link")
      }
      else
      {
        document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove("active-link")
      }
  })
}



/*===== FONTS =====*/
// var typed = new Typed('#element', {
//   strings: ['<i>HII I am Web devoloper</i> .'],
//   typeSpeed: 50,
// });

// typing text animation script
var typed = new Typed("#element", {
  strings: ["Software Developer", "Full-Stack Developer"],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true
});

var typed = new Typed("#element-2", {
  strings: ["Developer", "Designer"],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true
});


/*===== contact email =====*/

// function sendmail(){
//   var params={
//     name:document.getElementById('name').value,
//     email:document.getElementById('email').value,
//     message:document.getElementById('message').value,
//   };
  

//   const serviceid="service_0qzxf1e";
//   const templateid="template_ob4o84k";
//   emailjs.send(serviceid,templateid,params)
//   .then(
//     res=>{
//       document.getElementById('name').value="";
//       document.getElementById('email').value="";
//       document.getElementById('message').value="";
//       console.log(res);
//       alert("Message Sent Successfully!");

//     }
//   )
//   .catch((err)=>console.log(err));
// }


// scroll reveal js
const sr=ScrollReveal({
  origin:"top",
  distance:'60px',
  duration:2500,
  delay:400,
  // reset:true

})
sr.reveal('.home .intro', { interval: 200 }); // You can adjust the interval value to control the animation timing for multiple elements
sr.reveal('.row', { interval: 200 });

