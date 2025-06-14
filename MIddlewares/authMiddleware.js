const jwt = require('jsonwebtoken');
const User = require('../Models/auth-model.js');
async function authMiddleware (req, res, next) {
   const  token=req.header('Authorization');
    if (!token) {
      return res.status(401).json({ message: 'Unauthorized' });
    }
    
    const jwtToken= token.replace('Bearer ', '').trim();
    try {
    const isVerified = jwt.verify(jwtToken, process.env.JWT_SECRET_KEY);
    if (!isVerified) {
      return res.status(401).json({ message: 'Unauthorized from verification' });
    }
    const userdata =await User.findOne({email:isVerified.email}).select({password:0});
    console.log('userdata', userdata);
    req.user = userdata;
    req.token = token;
    req.userId = userdata._id
   next();
  } catch (error) {
    return res.status(401).json({ message: 'Unauthorized' });
  }
}
module.exports = authMiddleware; 