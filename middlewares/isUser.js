const {getToken} = require('../firebase')
async function isUser(req, res, next) {
  const token = req.headers.authorization

  if(token){
      // token firebase
     const isAuth = await getToken(token)

      if(!isAuth){
        res.status(403)
        res.json({ error:'Forbidden ! '}) 
      }else{
        next()
      }
     
  }else{
    res.status(403)
    res.json({ error:'Forbidden ! '})
  }

}

module.exports = {isUser}