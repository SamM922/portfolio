var dropbox = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < dropbox.length; i++) {
  dropbox[i].addEventListener("click", function() {
    this.classList.toggle("collapsibleActive");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}