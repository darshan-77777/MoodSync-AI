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
    .textContent = emotion;

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