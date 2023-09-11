const express = require("express");

const app = express();
const PORT = 3030;

app.use(express.json());


app.get('/api', (req, res) => {
    const { slack_name, track } = req.query;

    if (req.body && slack_name && track) {
        const response = {
            slack_name: slack_name,
            current_day: new Date().toLocaleString('en-US', { weekday: 'long' }),
            utc_time: new Date().toISOString(),
            track: track,
            github_file_url: "https://github.com/V4vamp/HNG-Challenges/blob/main/Stage-1-BE/app.js",
            github_repo_url: "https://github.com/V4vamp/HNG-Challenges",
            status_code: 200
        };

        res.json(response);
    } else {
        res.status(400).json({ error: "Missing required query parameters" });
    }
});


app.all('*', (req, res) => {
    res.status(404).json({ 
        error: "Invalid path" });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
