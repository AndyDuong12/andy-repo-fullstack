const express = require("express");
const app = express();
const port = process.env.PORT || 5001;

// http://localhost:5001/form should return a form with input elements for username, email, and submit button

// http://localhost:5001/submit should return all the data the user entered

// To parse incoming request bodies with 'application/x-www-form-urlencoded' payloads.
/* This is a middleware function in Express.
    extended: true --> allowing for parsing of nested objects.
    (e.g. user[name]=Andy&user[age]=21 --> { user: {name: 'Andy', age: 21} } )
*/
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.get("/", (req, res) => {
  res.status(200);
  res.set({ "Content-Type": "text/html" });
  res.send("Form exercise");
});

// /form
app.get("/form", (req, res) => {
  res.status(200);
  res.set({ "Content-Type": "text/html" });
  res.write('<form action="/submit" method="post">');

  // Name
  res.write('<label for="name">Name: </label>');
  res.write('<input type="text" name="name" id="name"><br />');

  // Email
  res.write('<label for="email">Email: </label>');
  res.write('<input type="email" name="email" id="email"><br />');

  // Comments
  res.write('<label for="comments">Comments: </label>');
  res.write('<input type="text" name="comments" id="comments"><br />');

  // Newsletter
  res.write("<p>Newsletter:</p>");
  res.write(
    '<input type="radio" name="newsletter" id="yes" value="Yes, sign me up for the newsletter.">'
  );
  res.write(
    '<label for="yes">Yes, sign me up for the newsletter.</label><br />'
  );
  res.write(
    '<input type="radio" name="newsletter" id="no" value="No, thank you.">'
  );
  res.write('<label for="no">No, thank you.</label><br />');

  // Submit button
  res.write('<input type="submit">');
  res.write("</form></body></html>");
  res.end();
});

// /submit
app.post("/submit", (req, res) => {
  res.status(200);
  res.set({ "Content-Type": "text/html" });

  res.write(`<p>Name: ${req.body.name}`);
  res.write(`<p>Email: ${req.body.email}`);
  res.write(`<p>Comments: ${req.body.comments}`);
  res.write(`<p>Newsletter: ${req.body.newsletter}`);
  res.end();
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
