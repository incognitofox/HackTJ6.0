const express = require('express')
const app = express()
const port = 3000
var opn = require('opn')
var path = require('path');
var hbs = require('hbs');
var request = require('request');
var apivomit;
var name = "Sibtain Hussain"
app.set('view engine', 'hbs');
//////////////////////////////////////////////////////////////////////////////////

function stockreq () {
    //request.get(params, callback);
	var params = {
    url : "https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=KODK&apikey=5L19AUS6MR529B0G",
    headers :    {
    }};
	request.get(params, function(e,r,body){
	var obj = JSON.parse(body);
  apivomit = obj;
	});
}

stockreq();

app.get('/stockresult', function (req, res) {
  console.log(apivomit);
  apivomit = apivomit['Time Series (Daily)'];
  apivomit = apivomit['2019-04-05'];
  apivomit = apivomit['2. high'];
  res.send(apivomit);
});


app.use('/css', express.static(path.join(__dirname, 'css')))
app.use('/js', express.static(path.join(__dirname, 'js')))

app.get('/home', (req, res) => res.sendFile(__dirname + "\\index.html"))

function allowCrossDomain(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE')
  res.header('Access-Control-Allow-Headers', 'Content-Type')
  next()
}

app.use(allowCrossDomain)
app.use('/', express.static(__dirname + '/public'))

app.get('/register', (req, res) => res.sendFile(__dirname + "\\register.html"))

app.get('/profile', (req, res) => res.render('profile', {balance: "$900",user: (name).toLowerCase()}))

app.get('/vision_endpoint', async function(req, res){
    total = await main();
    res.send(total[0].toString() + " your change was $" + total[1].toString())
});

app.get('/user_endpoint', async function(req, res){
    name = req.query.name;
    res.send()
});

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
  const vision = require('@google-cloud/vision');

  // Creates a client
  const client = new vision.ImageAnnotatorClient();

  /**
   * TODO(developer): Uncomment the following line before running the sample.
   */
  // const fileName = 'Local image file, e.g. /path/to/image.png';
  // Performs text detection on the local file
  const [result] = await client.textDetection("./resources/screenshot.jpg");
  //const detections = result.textAnnotations;
  const detections = result.textAnnotations;
  return detections;
};
var request = require('request');


var account_url_1 = 'http://api.reimaginebanking.com/customers/5ca8cbfe322fa06b67794a72/accounts?key=058f0d09f1c7fb96ee5ab713535c07ce'
var customers = {
  "Dexter Hermiston": "5ca8cbfe322fa06b67794a72",
  "Christina Rowe": "5ca8cbff322fa06b67794a73",
  "Oliver Hane": "5ca8cc00322fa06b67794a74"
}
var customer_id = '5ca8cbfe322fa06b67794a72'
var first = "Dexter"
var last = "Hermiston"
var apikey = '058f0d09f1c7fb96ee5ab713535c07ce'
var total = 0
var account_id = "5ca9487a6759394351bee815"
url = 'http://api.reimaginebanking.com/accounts/5ca9487a6759394351bee815/deposits?key=058f0d09f1c7fb96ee5ab713535c07ce'
function get_accounts(elem) {
  console.log("Time: " + elem.nickname + "\tType: " + elem.type + "\tBalance: " + elem.balance)
  total+=elem.balance
  if(elem.type == "Credit Card"){
    account_id = elem["_id"]
  }
}
function get_id(elem){
  if(elem.first_name == first && elem.last_name == last)
    return elem
}
function get_id_by_name(name){
  allAccountsURL = "http://api.reimaginebanking.com/customers?key=058f0d09f1c7fb96ee5ab713535c07ce"
  response = request.get(allAccountsURL, function (e, r, body){
    data = JSON.parse(body)
    id = data.filter(get_id)
    customer_id = id[0]["_id"]
  });
}
//get_id_by_name()


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

function findNumArr(usefulinfoarr){
  decimalarr = usefulinfoarr.filter(fildeci);
  //console.log(decimalarr);
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
  return finalboy;
}

function findChange(numarr, total){
  for(var x = 0; x<numarr.length; x++)
  {
    var compnum = numarr[x];
    for(var y = 0; y<numarr.length; y++)
    {
      if (numarr[y] + compnum == total)
        return [numarr[y],compnum];
    }
  }
}

function findTotal(usefulinfoarr){
  decimalarr = usefulinfoarr.filter(fildeci);
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
  process.env.GOOGLE_APPLICATION_CREDENTIALS = "C:\\Users\\Admin\\Documents\\HackTJ2019\\HackTJ\\js\\hackTJ2019-eb250c8f1144.json"
  console.log(process.env.GOOGLE_APPLICATION_CREDENTIALS)
  detections = await ocr();
  usefulinfo = detections[0].description.toUpperCase();
  usefulinfoarr = usefulinfo.split("\n");
  total = findTotal(usefulinfoarr);
  numarr = findNumArr(usefulinfoarr);
  changearr = findChange(numarr, total);
  console.log(changearr);
  console.log(total);
  return [total,changearr[0],changearr[1]];
}
var today = new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
var blah = date + " " + time
var balance = 900
function callback(e, r, body){
  data = JSON.parse(body)
  temp_var = data[0].balance
  data.forEach(get_accounts)
  console.log("Final Balance: " + temp_var)
  total = 0
  console.log("hello" + account_id)
}
function get_balance(){
  customer_url = 'http://api.reimaginebanking.com/customers/'+ customer_id + '/accounts?key=' + apikey
  //var temp = 'failed'
  request.get(customer_url, callback);
  //console.log(account_id)
}
get_balance()
balance -=total[0]
function create_account(){
  request.post(account_url_1,
    {form:
      {   type: "Credit Card",
          nickname: blah,
          rewards: 0,
          balance: balance,}
    }, function(e, r, body){
        console.log(url);
        console.log(body);
  });
}
//create_account()

process.env.GOOGLE_APPLICATION_CREDENTIALS = "C:\\Users\\Steven\\Documents\\HackTJ\\hackTJ2019-eb250c8f1144.json"
app.listen(port, () => console.log(`App listening on port ${port}!`))