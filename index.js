import express from "express";

const app = express();

// perbedaan route dan middleware

// middleware, yaitu function yang menangani request sebelum dia sampai ke route
app.use((req, res, next) => {
  if (req.url === "/bagas") {
    console.log("Tri Wulandari");
  }
  console.log(req.url);
  next();
});

// route
app.get("/", (_req, res) => {
  res.send("romi");
});

app.listen(3000, () => {
  console.log("berhasil jalan");
});
