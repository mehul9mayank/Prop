(function(window) {
  var speakWord = "Goodbye";
  var speakGoodBye = {};
  
  speakGoodBye.speak = function(name) {
    console.log(speakWord + " " + name);
  };
  
  window.speakGoodBye = speakGoodBye;
})(window);
