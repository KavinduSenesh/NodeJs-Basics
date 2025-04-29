// the address of this server connected to the network is:
// URL -> http://localhost:8383
// IP -> 127.0.0.1:8383
const express = require('express');
const app = express();
const PORT = 8383;

// ENDPOINT - HTTP Verbs (method) and routes(or paths)
//The method informs the nature of the request and the route is a further
// subdirectory (basically we direct the request to the body of the code to 
// respond appropriately and these locations or routes are called endpoints). 

// Type 1 - website endpoints (these endpoints are for sending back html
//  and they typically come when a user enters a url in a browser)

app.get("/", (req, res) => {
    res.send('<h1>Homepage</h1>')
})

app.get("/dashboard", (req, res) => {
    res.send("<h1>Dashboard</h1>");
})

// Type 2 - API endpoints (these endpoints are for sending
//  back JSON data and they typically come when a user enters a url in a browser)



app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})

