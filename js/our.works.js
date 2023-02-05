console.log("Connected to our-works.html");

function changeLMP() {
  console.clear();
  const lmpFrontPath = "../images/lmpfront.png";
  const lmpBackPath = "../images/lmpback.png";
  document.getElementById("imgid").src = lmpFrontPath;
  document.getElementById("imgid2").src = lmpBackPath;
  console.info("Changing image to " + lmpFrontPath);
  console.info("Changing image to " + lmpBackPath);
}

function changeODG() {
  console.clear();
  const odgFrontPath = "../images/odgfront.png";
  const odgBackPath = "../images/odgback.png";
  document.getElementById("imgid").src = odgFrontPath;
  document.getElementById("imgid2").src = odgBackPath;
  console.info("Changing image to " + odgFrontPath);
  console.info("Changing image to " + odgBackPath);
}

function changeNewAge() {
  console.clear();
  const ngFrontPath = "../images/ngfront.png";
  const ngBackPath = "../images/ngback.png";
  document.getElementById("imgid").src = ngFrontPath;
  document.getElementById("imgid2").src = ngBackPath;
  console.info("Changing image to " + ngFrontPath);
  console.info("Changing image to " + ngBackPath);
}

function changeRDM() {
  console.clear();
  const rdmFrontPath = "../images/rdmfront.png";
  const rdmBackPath = "../images/rdmback.png";
  document.getElementById("imgid").src = rdmFrontPath;
  document.getElementById("imgid2").src = rdmBackPath;
  console.info("Changing image to " + rdmFrontPath);
  console.info("Changing image to " + rdmBackPath);
}
