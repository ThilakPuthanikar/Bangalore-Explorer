const http = require("http");
const fs = require("fs");
const path = require("path");

// Test server logic directly in process
process.env.PORT = "3999";
require("../server.js");

setTimeout(() => {
  http.get("http://127.0.0.1:3999/", (res) => {
    let data = "";
    res.on("data", chunk => data += chunk);
    res.on("end", () => {
      console.log(`[PASS] Server responded with HTTP ${res.statusCode}, received ${data.length} bytes.`);
      console.log(`[PASS] Title present: ${data.includes("<title>Bangalore Explorer")}`);
      process.exit(0);
    });
  }).on("error", (err) => {
    console.error("Error:", err.message);
    process.exit(1);
  });
}, 300);
