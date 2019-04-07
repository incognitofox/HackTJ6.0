var commonstores = ["WALMART"];
async function quickstart() {
  // Imports the Google Cloud client library
  const vision = require('@google-cloud/vision');

  // Creates a client
  const client = new vision.ImageAnnotatorClient();

  // Performs label detection on the image file
  const [result] = await client.labelDetection('./resources/busyroad.jpg');
  const labels = result.labelAnnotations;
  console.log('Labels:');
  labels.forEach(label => console.log(label.description));
};

async function ocr()
{
  //document.getElementById('display').innerHTML = "contacting google"
  const vision = require('@google-cloud/vision');

  // Creates a client
  const client = new vision.ImageAnnotatorClient();

  /**
   * TODO(developer): Uncomment the following line before running the sample.
   */
  // const fileName = 'Local image file, e.g. /path/to/image.png';
  // Performs text detection on the local file
  const [result] = await client.textDetection('./resources/costcorec.jpg');
  //const detections = result.textAnnotations;
  const detections = result.textAnnotations;
  return detections;
};

function fildeci(el){
  return el.includes(".") && (el.includes(0)||el.includes(1)||el.includes(2)||el.includes(3)||el.includes(4)||el.includes(5)||el.includes(6)||el.includes(7)||el.includes(8)||el.includes(9));
}

function filDV(el)
{
  var gegen = [0,1,2,3,4,5,6,7,8,9]
  if (el == '.' || el in gegen)
    return true
}

function APIBulk(det)
{
  usefulinfo = det[0].description;
  usefulinfocap = usefulinfo.toUpperCase();
  var detectStore;
  for (var x = 0; x<commonstores.length; x++)
  {
    detectStore = usefulinfocap.indexOf(commonstores[x])// if no store is found, will return -1
  }
}
function findTotal(usefulinfoarr){
  decimalarr = usefulinfoarr.filter(fildeci);
  console.log(decimalarr);
  var finalboy = [];
  for (var x = 0; x<decimalarr.length; x++)
  {
    arrrep = decimalarr[x].split("");
    carrrep = arrrep.filter(filDV);
    cstring = carrrep.join("");
    finalboy.push(cstring);
  }
  //console.log("\n\n\n\n")
  //console.log(finalboy);
  for (var x = 0; x<finalboy.length; x++)
  {
    finalboy[x] = parseFloat(finalboy[x]);
  }
  //console.log(finalboy);
  totalboy = Math.max(...finalboy);
  //console.log("\n\n\n");
  //console.log(totalboy);
  return totalboy;
};

async function main(){
  document.getElementById('display').innerHTML = "fhifdhs"
  process.env.GOOGLE_APPLICATION_CREDENTIALS = "C:\\Users\\Steven\\Documents\\HackTJ\\hackTJ2019-eb250c8f1144.json"
  console.log(process.env)
  document.getElementById('display').innerHTML = "fhifdhs"
  console.log(process.env.GOOGLE_APPLICATION_CREDENTIALS)
  detections = await ocr();

  usefulinfo = detections[0].description.toUpperCase();
  console.log(usefulinfo);
  console.log(usefulinfo);
  usefulinfoarr = usefulinfo.split("\n");
  total = findTotal(usefulinfoarr);
  console.log(total)
  document.getElementById('display').innerHTML = total

}
/*
usefulinfo = detections[0].description;
usefulinfoarr = usefulinfo.split("\n");
console.log(usefulinfoarr);
decimalarr = usefulinfo.filter(filhelp);
console.log(decimalarr);
//APIBulk(detections);
//console.log('Text:');
//detections.forEach(text => console.log(text));
//quickstart();
*/
