var request = require('request');


url = 'http://api.reimaginebanking.com/customers/5ca8cbfe322fa06b67794a72/accounts?key=058f0d09f1c7fb96ee5ab713535c07ce'
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
