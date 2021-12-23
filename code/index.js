
import "./index.css";
import image from "./logo.png";

let root = document.getElementById("root");

let navbar=document.createElement("div");
navbar.id="navbar"

let logo =document.createElement("img");
logo.src=image;

let Name=document.createElement("h1");
Name.innerText="Notepad";
navbar.append(logo,Name);

let box = document.createElement("div");
box.id="box"

let div1=document.createElement("div");
let paragraph=document.createElement("p");
paragraph.id="paragraph";
div1.append(paragraph);
box.append(div1);

let div2=document.createElement("div");
let textarea=document.createElement("TEXTAREA")
textarea.id="inputtext";
div2.append(textarea);
box.append(div2);




root.append(navbar,box);
let inputpara=document.getElementById("inputtext");
inputpara.addEventListener("input",gettext);

let outputpara=document.getElementById("paragraph");
outputpara.innerText="input note"


 function gettext() {
     outputpara.innerText=inputpara.value;
 }
