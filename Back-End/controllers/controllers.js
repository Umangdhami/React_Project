const cookie = require("cookie");

const defualtRoute = (req, res) => {
    res.json({data : 'ok', msg : 'not error'})
}

const register =async (req, res) => {

    console.log(req.body);
   
 }

 const login =async (req, res) => {
    try{
        console.log(req.cookie.uid);
    }
    catch(err)
    {
        console.log('er',err);
    }
    var ok;
    if(req.cookie.uid)
    {
         ok = 'done'
    }
    else{
        ok = 'not done'
    }

   res.json(ok)
   
 }
module.exports = {defualtRoute, register, login}