import express from "express"

const app = express()

app.get("/", (req, res) => {
    res.send("Server Reached Successfully!")
})

app.listen(8081, () => {
    console.log("Server Started Successfully!")
})