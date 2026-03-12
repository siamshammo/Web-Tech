const typingElement = document.getElementById("typing-text");

const phrases=[
"A Front-End Web Developer",
"An HTML & CSS Enthusiast",
"A JavaScript Learner",
"A Creative Problem Solver"
];

var phraseIndex=0;
var charIndex=0;
var isDeleting=false;
var typingSpeed=80;

function typeText(){

var currentPhrase=phrases[phraseIndex];

if(isDeleting){
typingElement.textContent=currentPhrase.substring(0,charIndex-1);
charIndex--;
typingSpeed=40;
}else{
typingElement.textContent=currentPhrase.substring(0,charIndex+1);
charIndex++;
typingSpeed=80;
}

if(!isDeleting && charIndex===currentPhrase.length){
typingSpeed=1500;
isDeleting=true;
}

if(isDeleting && charIndex===0){
isDeleting=false;
phraseIndex=(phraseIndex+1)%phrases.length;
typingSpeed=400;
}

setTimeout(typeText,typingSpeed);
}

typeText();

const projects=[
{
title:"Portfolio Website",
desc:"Personal portfolio project",
img:"https://via.placeholder.com/300",
link:"#"
},
{
title:"Todo App",
desc:"Simple JavaScript todo list",
img:"https://via.placeholder.com/300",
link:"#"
},
{
title:"Weather App",
desc:"Weather API project",
img:"https://via.placeholder.com/300",
link:"#"
}
];

const container=document.getElementById("projectContainer");

projects.forEach(p=>{
const card=document.createElement("div");
card.className="card";

card.innerHTML=`
<img src="${p.img}">
<h3>${p.title}</h3>
<p>${p.desc}</p>
<a href="${p.link}">View</a>
`;

container.appendChild(card);
});

document.getElementById("contactForm").addEventListener("submit",function(e){

e.preventDefault();

let valid=true;

function error(id,msg){
document.getElementById(id).innerText=msg;
}

let name=document.getElementById("name").value;
let email=document.getElementById("email").value;
let subject=document.getElementById("subject").value;
let message=document.getElementById("message").value;

error("nameError","");
error("emailError","");
error("subjectError","");
error("messageError","");

if(name===""){
error("nameError","Name required");
valid=false;
}

if(!email.includes("@")){
error("emailError","Valid email required");
valid=false;
}

if(subject===""){
error("subjectError","Subject required");
valid=false;
}

if(message===""){
error("messageError","Message required");
valid=false;
}

if(valid){
alert("Form submitted");
}

});

const toggle=document.getElementById("themeToggle");

if(localStorage.getItem("theme")==="dark"){
document.body.classList.add("dark");
}

toggle.onclick=()=>{
document.body.classList.toggle("dark");

if(document.body.classList.contains("dark")){
localStorage.setItem("theme","dark");
}else{
localStorage.setItem("theme","light");
}
};

const topBtn=document.getElementById("topBtn");

window.onscroll=function(){
if(document.documentElement.scrollTop>200){
topBtn.style.display="block";
}else{
topBtn.style.display="none";
}
};

topBtn.onclick=function(){
window.scrollTo({top:0,behavior:"smooth"});
};