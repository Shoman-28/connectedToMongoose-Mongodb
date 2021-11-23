module.exports= function(req, res, next){
    if(req.user.role!=="admin")return res.stattus(403).send('Forbidden');
    next();
}