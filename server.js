// the address of this server connected to the network is:
// URL -> http://localhost:8383
// IP -> 127.0.0.1:8383
const express = require("express");
const app = express();
const PORT = 8383;

let data = ['james']

// Middleware to parse JSON request body
app.use(express.json());
app.use((req, res, next) => {
    console.log("Request received:", req.method, req.url);
    next(); // Call the next middleware or route handler
})

// ENDPOINT - HTTP Verbs (method) and routes(or paths)
//The method informs the nature of the request and the route is a further
// subdirectory (basically we direct the request to the body of the code to
// respond appropriately and these locations or routes are called endpoints).

// Type 1 - website endpoints (these endpoints are for sending back html
//  and they typically come when a user enters a url in a browser)

app.get("/", (req, res) => {
    console.log("Home endpoint hit");
    res.send(`
            <body style="background-color: lightblue; color: black; font-family: Arial, sans-serif;">
                <h1>DATA: </h1>
                <p>${JSON.stringify(data)}</p>
                <a href="/dashboard"> Dashboard </a>
            </body>
            <script>console.log('This is my script')</script>
            `); 
});

app.get("/dashboard", (req, res) => {
  res.send(`
    <body>
    <h1>Dashboard</h1>
    <a href="/"> Home </a>
    <body/>
    `);
});

// Type 2 - API endpoints (these endpoints are for sending
//  back JSON data and they typically come when a user enters a url in a browser)

app.get("/api/data", (req, res) => {
  console.log("API data endpoint hit");
  res.status(599).send(data);
});

app.post("/api/data", (req, res) => {
  const newData = req.body; // Assuming the data is sent in the request body
  console.log("New data received:", newData);
  data.push(newData.name)
  res.sendStatus(201); // Send a success response
});

app.delete("/api/data", (req, res) => {
    data.pop()
    console.log("Data deleted:", data);
    res.sendStatus(200); // Send a success response
})

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
