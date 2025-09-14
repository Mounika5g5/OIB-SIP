document.addEventListener("DOMContentLoaded", () => {
const header=document.querySelector('.right-links');


const home=document.querySelector('.container');
const shop=document.querySelector('.information');
const register=document.querySelector('.signup');
const contact=document.querySelector('.footer');

header.addEventListener('click',(e)=>{
    if(e.target.id==="home"){
       e.preventDefault(); // stop the default "#" jump
       home.scrollIntoView({ behavior: "smooth" });

    }
    if(e.target.id==="shop"){
       e.preventDefault(); // stop the default "#" jump
       shop.scrollIntoView({ behavior: "smooth" });

    }
    if(e.target.id==="register"){
       e.preventDefault(); // stop the default "#" jump
       register.scrollIntoView({ behavior: "smooth" });

    }
    if(e.target.id==="contact"){
       e.preventDefault(); // stop the default "#" jump
       contact.scrollIntoView({ behavior: "smooth" });

    }

});
 
});



