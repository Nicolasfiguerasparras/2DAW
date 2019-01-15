let frase=prompt("introduce una frase");
let mayus=frase.toUpperCase();

document.write("<h1>")
for (let i = 0 ; i < mayus.length; i++) {
    if(mayus.charAt(i)==" "){
    	document.write("&nbsp;&nbsp;&nbsp;&nbsp;")
    }else{
    	document.write(morse[mayus.charAt(i)]);
    }
};
document.write("</h1>")