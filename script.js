function showVideo() {
  const pictures = document.getElementById('pictures');
  const video = document.getElementById('videoPlayer');
  const title = document.getElementById('title');

  // change the title text
  title.textContent = "SYEMPRE IKAW PARIN!!!";

  // hide pictures
  pictures.style.display = "none";

  // show and play video
  video.src = "vid.mp4"; // ✅ put your video filename here
  video.style.display = "block";
  video.play();
}
