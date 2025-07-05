import express from "express"


const app = express()

const PORT = 8080

app.get("/", (req,res)=>{
    res.send("Hello traveler")
})

app.listen(process.env.PORT || PORT, ()=>{
    console.log(`Server spinning on port ${PORT}`);
})