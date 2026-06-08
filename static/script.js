let recentRecommendations = [];
const imageInput =
  document.getElementById("imageInput");

const previewImage =
  document.getElementById("previewImage");

imageInput.addEventListener("change", function(event){

  const selectedFile =
    event.target.files[0];

  if(selectedFile){

    previewImage.src =
      URL.createObjectURL(selectedFile);

    previewImage.style.display =
      "block";
  }

});
function setEmotion(emotion){
{
document.getElementById("emotionText")
let description = "";

if(emotion.includes("Happy")){

  description =
    "You seem cheerful and energetic today.";

}
else if(emotion.includes("Sad")){

  description =
    "You may need some calm and comforting music.";

}
else if(emotion.includes("Angry")){

  description =
    "Try relaxing and releasing stress positively.";

}
else{

  description =
    "You appear calm and balanced today.";

}

document.getElementById("emotionDescription")
  .textContent = description;
  .textContent = emotion;
  emotionHistory.push(emotion);
  localStorage.setItem(
  "emotionHistory",
  
  JSON.stringify(emotionHistory)
  
);
recentRecommendations = songs;

document.getElementById("recentSongs")
  .innerHTML =
  recentRecommendations
    .map(song => `<li>${song}</li>`)
    .join("");
    
document.getElementById("emotionCount")
  .textContent =
  "Total Emotions Tracked : " +
  emotionHistory.length;
document.getElementById("historyList")
  .innerHTML =
  emotionHistory
    .map(item => `<li>${item}</li>`)
    .join("");
   
  document.getElementById("resultBox");

if(emotion.includes("Happy")){

  resultBox.style.background =
    "#facc15";

}

else if(emotion.includes("Sad")){

  resultBox.style.background =
    "#3b82f6";

}

else if(emotion.includes("Angry")){

  resultBox.style.background =
    "#ef4444";

}

else{

  resultBox.style.background =
    "#22c55e";

}
   

  let songs = [];

  if(emotion.includes("Happy")){

    songs = [
      "Blinding Lights",
      "Levitating",
      "Perfect"
    ];

  }

  else if(emotion.includes("Sad")){

    songs = [
      "Someone You Loved",
      "Let Her Go",
      "Fix You"
    ];

  }

  else if(emotion.includes("Angry")){

    songs = [
      "Believer",
      "Warriors",
      "Centuries"
    ];

  }

  else{

    songs = [
      "Night Changes",
      "Photograph",
      "Yellow"
    ];

  }

  document.getElementById("songList")
    .innerHTML = songs
    .map(song => `<li>${song}</li>`)
    .join("");
}

}
function clearHistory(){

  localStorage.removeItem(
  "emotionHistory"
);
  emotionHistory = [];

  document.getElementById("historyList")
    .innerHTML = "";
document.getElementById("emotionCount")
  .textContent =
  "Total Emotions Tracked : 0";
}
function loadHistory(){

  let savedHistory =
    localStorage.getItem("emotionHistory");

  if(savedHistory){

    emotionHistory =
      JSON.parse(savedHistory);

    document.getElementById("historyList")
      .innerHTML =
      emotionHistory
        .map(item => `<li>${item}</li>`)
        .join("");

    document.getElementById("emotionCount")
      .textContent =
      "Total Emotions Tracked : " +
      emotionHistory.length;
  }
}

loadHistory();