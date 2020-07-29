function everyThird(req, res, next) {
    var cutString ="";
    const stringToCut = req.body["string_to_cut"]
    console.log(stringToCut, req.body);
    for(var x = 0; x < stringToCut.length; x++){
        if(x % 3 === 0){
            cutString+=stringToCut[x];
        }
    }
    req.body = {"return_string": cutString};
    next();
}

module.exports = everyThird;