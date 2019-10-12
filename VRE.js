var eEReqMet = true;
function testFeature() {
  window.alert("It works asshole");
};

function easterEgg() {
  var devButton = document.getElementById("testButton");
  if (eEReqMet === true) {
    devButton.style.display = "block";
  } else {
    devButton.style.display = "none";
  }
};
