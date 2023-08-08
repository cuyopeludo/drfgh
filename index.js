Cuyo="";
gato="";
Webcam.set({
height:500, width:500, image_format:"png", png_cuality:90

})
camera=document.getElementById("cuyocamara");
Webcam.attach("#cuyocamara");
function fgh() 
{Webcam.snap(function(data_uri) {
    document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';
});
}


console.log("wwQ")    
   classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/SXbAakvwg/model.json", pablo) ;


   function pablo (){
console.log ("pablo") ;

   }

   function speak(){ var synth = window.speechSynthesis;
    
speak_data_1 = "La primera prediccion es " + gato; speak_data_2 = "Y la segunda prediccion es " + cuyo; var utterThis = new SpeechSynthesisUtterance(speak_data_1 + speak_data_2); synth.speak(utterThis); }


function escaner(){
ukio=document.getElementById("captured_image");
classifier.classify(ukio, uju);
 
}




function uju( error, noandabien){
if (error) {
   console.log(error);
} else {
   console.log(noandabien);
document.getElementById("nada").innerHTML=noandabien[0].label;
document.getElementById("hh").innerHTML=noandabien[1].label;
Cuyo= noandabien[0].label;
gato= noandabien[1].label;
speak();
if (noandabien[0].label=="feliz")  {
   document.getElementById("opl").innerHTML="&#128522;";


}
if (noandabien[0].label=="triste")  {
   document.getElementById("opl").innerHTML="&#128532;";

}
if (noandabien[0].label=="enojado")  {
   document.getElementById("opl").innerHTML="&#128548;";

}










}

}