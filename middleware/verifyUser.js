import jwt from "jsonwebtoken";

const verifyUser = (req, res, next) => {
  const token = req.headers.authorization;
  if (token) {
    jwt.verify(token, process.env.JWT_SECRET_KEY, (err, user) => {
      if (err) res.status(403).json({ message: "Token is not valid" });
      else {
        req.user = user;
        next();
      }
    });
  }
};

export default verifyUser;
