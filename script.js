

// Loader

setTimeout(()=>{

loader.style.display="none"

},2000)





// Scroll button

function scrollToAbout(){

document.getElementById("about").scrollIntoView()

}




// Counter

let n=localStorage.getItem("visit")

if(!n){

n=1

}

else{

n++

}

localStorage.setItem("visit",n)

counter.innerHTML="Visitors "+n




// Chat AI basic

function send(){

let m=msg.value

let t=chatText



if(m.includes("who")){

t.innerHTML="Jebin is cyber security student"

}

else if(m.includes("project")){

t.innerHTML="He builds servers and AI"

}

else{

t.innerHTML="Ask about Jebin"

}

}




// Particles

particlesJS("particles-js",{

particles:{

number:{value:100},

size:{value:3}

}

})
