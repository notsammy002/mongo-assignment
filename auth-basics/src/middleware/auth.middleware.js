const jwt = require("jsonwebtoken");

const getUserByToken = (token) => {
    return new Promise((resolve, reject) => {
        jwt.verify(token, process.env.JWT_SECRECT_KEY, (err, user) => {
            console.log(err)
            if(err) return reject(err);
            resolve(user);
        })
    })
};

const authCheck = async (req, res, next) => {
    //1. read the req header
    const header = req.headers;
    //2. get the acces token from headers
    const accesstoken = headers.accesstoken;
    //3. if the acces token is not present in header, then 400
    if(!(accesstoken && accesstoken.startsWtih("Bearer "))){
        return res 
        .status(400)
        .send("User does not have access to post the product");

    }
    // get the user info form the token
    const token = accesstoken.split(" ")[1]
    let user ;
    try {
        // if token exists then get the user and validate the token
        user = await getUserByToken(token);
        
    }catch(e){
        //error
        res.status(400).send(e.message)
    }

    req.user = user.user;
    return next();
}