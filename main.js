function preload(){
classifier=ml5.imageClassifier('DoodleNet');
}
function setup(){
canvas=createCanvas(345,345);
canvas.center();
background("white");
canvas.mouseReleased(classifyCanvas);
synth=window.speechSynthesis;
}
function draw(){
strokeWeight(9.25);
stroke('purple');
if(mouseIsPressed){
    line(pmouseX,pmouseY,mouseX,mouseY);
}
}

function clearcanvas(){
background("white");
    }
    function classifyCanvas(){
        classifier.classify(canvas,gotresult);
    }
    function gotresult(error,results){
if(error){
    console.error(error);
}
console.log(results);
document.getElementById("label").innerHTML=results[0].label;
document.getElementById("confidence").innerHTML= Math.round(results[0].confidence* 100);
var utterthis=new SpeechSynthesisUtterance(results[0].label);
synth.speak(utterthis);
    }

      
    