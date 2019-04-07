var request = require('request');


// url = 'http://api.reimaginebanking.com/customers/5ca8cbfe322fa06b67794a72/accounts?key=058f0d09f1c7fb96ee5ab713535c07ce'
var customer_id = '5ca8cbfe322fa06b67794a72'
var first = "Dexter"
var last = "Hermiston"
var apikey = '058f0d09f1c7fb96ee5ab713535c07ce'
url = 'http://api.reimaginebanking.com/accounts/5ca9487a6759394351bee815/deposits?key=058f0d09f1c7fb96ee5ab713535c07ce'
function get_accounts(elem) {
  // if(elem.date != null){058f0d09f1c7fb96ee5ab713535c07ce
  //   console.log(elem.date + ": " + elem.balance)
  // }
  console.log("Name: " + elem.nickname + "\tType: " + elem.type + "\tBalance: " + elem.balance)

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
    console.log(id)
    customer_id = id[0]["_id"]
  });
}
get_id_by_name()
console.log(customer_id)
function create_balance(){
//   var payload = {
//   "transaction_date": "2019-04-06",
//   "medium": "balance",
//   "amount": 12.30
// };

  request.post(url,
    {form:
      { amount: 12,
        transaction_date: "2019-04-06",
        medium: "balance"}
    }, function(e, r, body){
    console.log(url);
    console.log(body);
  });
}
//create_balance();
function get_balance(){
  customer_url = 'http://api.reimaginebanking.com/customers/'+ customer_id + '/accounts?key=' + apikey
  console.log(customer_url)
  request.get(customer_url, function(e, r, body){
      data = JSON.parse(body)
      data.forEach(get_accounts)
  });
}
get_balance()
function foo(something){
  console.log(something)
}

function bar(something){
  console.log(something)
}
