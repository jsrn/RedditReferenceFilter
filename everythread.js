function commentAnnoysMe(commentText) {
  var blockList = [
    "hunter2", "broken arms", "trump", "-michael scott", "- michael scott",
    "drumpf", "jumper cables", "/u/warlizard", "switcharoo", "with rice:"
  ];

  for (var i = 0; i < blockList.length; i++) {
    if (commentText.indexOf(blockList[i]) !== -1) { return true; }
  }

  return false;
}

var commentList = document.getElementsByClassName("comment");
var commentsToRemove = [];

for (var i = 0; i < commentList.length; i++) {
  var comment = commentList[i];

  if (commentAnnoysMe(comment.textContent.toLowerCase())) {
    comment.parentNode.removeChild(comment);
  }
}
