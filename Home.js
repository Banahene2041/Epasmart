const onlineClassLink = document.querySelector(".phone-online-class");
const onlineSublinks = document.querySelector('.online-sublinks');
const accessPortalClassLink = document.querySelector(".phone-access-portal");
const accessSublinks = document.querySelector(".access-sublinks");
const burger = document.querySelector(".fabars")
const phoneLinks = document.querySelector('.phone-links')

onlineClassLink.addEventListener('click',function(e){
    e.preventDefault()
     if (onlineSublinks.style.display === "block") {
       onlineSublinks.style.display = "none";
     } else {
       onlineSublinks.style.display = "block";
     }
})

accessPortalClassLink.addEventListener("click", function (e) {
  e.preventDefault()
  if (accessSublinks.style.display === "block") {
    accessSublinks.style.display = "none"
  } else {
    accessSublinks.style.display = "block"
  }
})

burger.addEventListener('click',()=>{
    phoneLinks.classList.add('show-phone-links');
})

phoneLinks.addEventListener('click',(e)=>{
    if (e.target.classList.contains("show-phone-links")) {
      phoneLinks.classList.remove("show-phone-links");
    }
})