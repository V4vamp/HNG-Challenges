const express = require("express");

const app = express();
const PORT = 3030;

app.get('/api', (req, res) => {
    const { slack_name, track } = req.query;

    if (req.query && slack_name && track) {
        const response = {
            slack_name: slack_name,
            current_day: new Date().toLocaleString('en-US', { weekday: 'long' }),
            utc_time: new Date().toISOString(),
            track: track,
            github_file_url: "https://github.com/Benrobo/hngx-be/blob/main/s-1/app.go",
            github_repo_url: "https://github.com/benrobo/hngx-be",
            status_code: 200
        };

        res.json(response);
    } else {
        res.status(400).json({ error: "Missing required query parameters" });
    }
});

// Error handling for other paths
app.all('*', (req, res) => {
    res.status(404).json({ 
        error: "Invalid path" });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
