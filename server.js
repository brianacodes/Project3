const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const path = require("path");
const twilioClient = require('./twilioClient');
const PORT = process.env.PORT || 3001;
const app = express();
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://127.0.0.1/reactsostext";

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Connect to the Mongo DB
mongoose.connect(MONGODB_URI, { useNewUrlParser: true });

// Route: API --> 
app.post('/api/sendMessage', function(req, res) {
  twilioClient.sendSms('+17204955546', req.body.message);
  res.send('Message Sent')
});

// Add routes, both API and view
app.use(routes);

// // POST Route (/signup): Sign Up >> API 
// // POST Route (/login): Login >> API
// // POST Route (/message): Portal: Send Msg >> API >> Twilio >> Phone
// // GET Route (/message): Portal: Temp. Msgs >> API >> Portal



// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
