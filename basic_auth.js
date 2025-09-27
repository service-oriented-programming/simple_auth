const express = require("express");
const app = express();

const USERNAME = "admin";
const PASSWORD = "12345";

function basicAuth(req, res, next) {
  const authHeader = req.headers["authorization"];
  if (!authHeader) {
    res.setHeader("WWW-Authenticate", 'Basic realm="Secure Area"');
    return res.status(401).send("Authentication required.");
  }

  const base64Credentials = authHeader.split(" ")[1];
  const credentials = Buffer.from(base64Credentials, "base64").toString("ascii");
  const [username, password] = credentials.split(":");

  if (username === USERNAME && password === PASSWORD) {
    return next();
  } else {
    return res.status(403).send("Access denied.");
  }
}

app.get("/secure", basicAuth, (req, res) => {
  res.send("You have accessed a protected resource 🎉");
});

app.get("/", (req, res) => {
  res.send("Welcome! Visit first public resource.");
});

app.get("/public", (req, res) => {
  res.send("Welcome! Visit second public resource.");
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});