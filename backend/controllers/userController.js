const userDefault = function(req,res){
    res.send("<h1 align='center'> User default page </h1>")
}

const userHome = function(req,res){
    res.send("<h1 align='center'> User Home page </h1>")
}

module.exports = {userDefault,userHome}