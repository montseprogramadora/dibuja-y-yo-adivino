function preload(){
    classifier=ml5.imageClassifier("DoodleNet");
}
function setup(){
var canvas=createCanvas(280,210);
canvas.center();
background("aqua");
canvas.mouseReleased(clasificar);
}
function draw(){
    stroke(0);
    if(mouseIsPressed){
        line(pmouseX,pmouseY,mouseX,mouseY);
    }
}
function borrar(){
    background("aqua");
}
function clasificar(){
    classifier.classify(canvas,resultados);
}
function resultados(error,datos){
    if(error){
        console.error(error);
    }
    console.log(datos);
    document.getElementById("objeto").innerHTML="es un? "+ datos[0].label;
    document.getElementById("seguridad").innerHTML="estoy segura un:"+Math.round(datos[0].confidence*100)+"%";
}