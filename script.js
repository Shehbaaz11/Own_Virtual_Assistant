 let btn = document.querySelector("#btn");
 let content=document.querySelector("#content");

 function speak(text){
    let text_speak =new SpeechSynthesisUtterance(text);
    text_speak.rate=1;
    text_speak.pitch=1;
    text_speak.volume=1;
    text_speak.lang="hi-GB"
    window.speechSynthesis.speak(text_speak);
 }

 function wishME(){
  let day = new Date();
  let hours = day.getHours();

 if(hours>=0 && hours<12){
    speak("good morning sir")
 }
 else if(hours>12 && hours<16){
    speak("good afternoon sir")
 }
 else{
    speak("good evening sir")
 }
 }
 window.addEventListener('load',()=>{
   //  wishME();
 })

let speechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
let recognition = new speechRecognition();
recognition.onresult=(event)=>{
    console.log(event);
    let currentIndex = event.resultIndex;
   let transcript=event.results[currentIndex][0].transcript
   content.innerText=transcript;
   takeCommand(transcript.toLowerCase());
}
btn.addEventListener("click",()=>{
    recognition.start();
    btn.style.display="none";
    voice.style.display="block";
})

  function takeCommand(message){
   btn.style.display="flex";
   voice.style.display="none";

   if(message.includes("hello") || message.includes("hey")){
      speak("hello sir,what can i help you?");
   }
   else if( message.includes("who are you")){
      speak("i am virtual assistant,Created by shehbaaz sir")
   }
   else if( message.includes("open youtube")){
      speak("Opening youtube");
      window.open("https://www.youtube.com/")
   }
   else if( message.includes("open google")){
      speak("Opening Google");
      window.open("https://www.google.com/")
   }
   else if( message.includes("open discord")){
      speak("Opening discord");
      window.open("https://www.google.com/")
   }

   else if( message.includes("open linkden")){
      speak("Opening linkden");
      window.open("https://www.linkedin.com/feed/?trk=guest_homepage-basic_google-one-tap-submit")
   }
 
   else if( message.includes("open calculator")){
      speak("Opening calculator");
      window.open("calculator://")
   }

   else if( message.includes("open setting")){
      speak("Opening setting app");
      window.open("Settings://")
   }
   else if( message.includes("time")){
      let time = new Date().toLocaleString(undefined,{hour:"numeric",minute:"numeric"})

      speak(time);
      
   }
 
   





  else{
 let finaltext="this is what i found on internet regarding" + message.replace("shipra","") ||
 message.replace("sufra","") || message.replace("supra","")
 speak(finaltext)
 window.open(`https://www.google.com/search?q=${message.replace("supra","")}`)

  }



}
 
