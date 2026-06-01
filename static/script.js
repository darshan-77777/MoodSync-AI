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

  document.getElementById("emotionText")
    .textContent = emotion;

}