// ================= Typing Animation =================

var typed = new Typed("#typing", {
    strings: [
        "Web Developer",
        "Python Programmer",
        "Frontend Developer",
        "MERN Stack Learner"
    ],
    typeSpeed: 80,
    backSpeed: 50,
    backDelay: 1000,
    loop: true
});

// ================= Custom Cursor =================

const cursor = document.querySelector(".cursor");

let mouseX = 0;
let mouseY = 0;
let currentX = 0;
let currentY = 0;

document.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;

    document.body.style.setProperty("--x", mouseX + "px");
    document.body.style.setProperty("--y", mouseY + "px");
});

function animateCursor(){

    currentX += (mouseX-currentX)*0.15;
    currentY += (mouseY-currentY)*0.15;

    cursor.style.left=currentX+"px";
    cursor.style.top=currentY+"px";

    requestAnimationFrame(animateCursor);

}

animateCursor();

// ================= Cursor Hover =================

document.querySelectorAll("a,.btn,.btn2,.card").forEach(item=>{

    item.addEventListener("mouseenter",()=>{

        cursor.style.width="40px";
        cursor.style.height="40px";
        cursor.style.background="#ffffff";

    });

    item.addEventListener("mouseleave",()=>{

        cursor.style.width="20px";
        cursor.style.height="20px";
        cursor.style.background="#00c3ff";

    });

});

// ================= Loading Screen =================

window.addEventListener("load",()=>{

    setTimeout(()=>{

        document.getElementById("loader").classList.add("loader-hide");

    },1800);

});

// ================= Particles =================

particlesJS("particles-js",{

particles:{

number:{value:80},

color:{value:"#00c3ff"},

shape:{type:"circle"},

opacity:{value:0.5},

size:{value:3},

move:{
enable:true,
speed:2
},

line_linked:{
enable:true,
color:"#00c3ff",
opacity:0.3
}

},

interactivity:{

events:{

onhover:{
enable:true,
mode:"repulse"
}

}

}

});

// ================= Scroll Reveal =================

const sr=ScrollReveal({

distance:"80px",

duration:1800,

delay:200,

reset:false

});

sr.reveal(".hero-left",{origin:"left"});
sr.reveal(".hero-right",{origin:"right"});
sr.reveal("#about",{origin:"bottom"});
sr.reveal("#skills",{origin:"bottom"});
sr.reveal("#projects",{origin:"bottom"});
sr.reveal("#contact",{origin:"bottom"});

// ================= Magnetic Buttons =================

const buttons=document.querySelectorAll(".btn,.btn2");

buttons.forEach(btn=>{

btn.addEventListener("mousemove",(e)=>{

const rect=btn.getBoundingClientRect();

const x=e.clientX-rect.left-rect.width/2;

const y=e.clientY-rect.top-rect.height/2;

btn.style.transform=`translate(${x*0.2}px,${y*0.2}px)`;

});

btn.addEventListener("mouseleave",()=>{

btn.style.transform="translate(0,0)";

});

});

// ================= 3D Cards =================

const cards=document.querySelectorAll(".card");

cards.forEach(card=>{

card.addEventListener("mousemove",(e)=>{

const rect=card.getBoundingClientRect();

const x=e.clientX-rect.left;

const y=e.clientY-rect.top;

const rotateY=((x/rect.width)-0.5)*20;

const rotateX=((0.5-y/rect.height))*20;

card.style.transform=
`perspective(1000px)
rotateX(${rotateX}deg)
rotateY(${rotateY}deg)
scale(1.05)`;

});

card.addEventListener("mouseleave",()=>{

card.style.transform=
"perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)";

});

});

// ================= Skills Animation =================

const bars=document.querySelectorAll(".progress span");

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

const width=entry.target.getAttribute("style").match(/\d+/)[0];

entry.target.style.width=width+"%";

}

});

});

bars.forEach(bar=>{

const width=bar.style.width;

bar.style.width="0";

bar.setAttribute("style",width);

observer.observe(bar);

});