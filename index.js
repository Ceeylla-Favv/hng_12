const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();

const app = express();

app.use(cors({
    origin: "*"
}));

const PORT = process.env.PORT;
const EMAIL = process.env.EMAIL;
const GITHUB_URL = process.env.GITHUB_URL;

app.get("/", (req, res) => 
    {
       return res.status(200).json({email: EMAIL,
        current_datetime: new Date().toISOString(),
        github_url: GITHUB_URL})
});

app.listen(PORT, () => {
    console.log(`server is working at port ${PORT}`)
})