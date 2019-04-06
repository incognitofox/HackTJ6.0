var request = require('request');


url = 'http://api.reimaginebanking.com/customers/customerkey/accounts?key=apikey}'
function each_helper(elem) {
  console.log(elem.balance);
}
var params = {
        url: url,
        headers : {
            'content-type':'application/json'
        }
    };
request.get(params, function(e, r, body){
    data = JSON.parse(body)
    data.forEach(each_helper)
    //console.log(data.pop().balance)
    //foo(res.status);
    //bar(res.body); //do something
});

function foo(something){
  console.log(something)
}

function bar(something){
  console.log(something)
}
