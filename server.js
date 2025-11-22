const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors');
const { exec } = require('child_process');
const app = express();
const PORT = 8082;

app.use(cors());
app.use(express.json());
app.use(express.static(__dirname));

// Helper to read JSON file
const readJson = (filename) => {
    const filePath = path.join(__dirname, filename);
    if (!fs.existsSync(filePath)) return [];
    try {
        const data = fs.readFileSync(filePath, 'utf8');
        return JSON.parse(data);
    } catch (e) {
        console.error(`Error reading ${filename}:`, e);
        return [];
    }
};

// Helper to write JSON file
const writeJson = (filename, data) => {
    const filePath = path.join(__dirname, filename);
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
};

// Get all categories
app.get('/api/categories', (req, res) => {
    const categories = readJson('categories.json');
    res.json(categories);
});

// Save categories
app.post('/api/categories', (req, res) => {
    writeJson('categories.json', req.body);
    res.json({ success: true });
});

// Get quizzes for a specific category file
app.get('/api/quiz/:filename', (req, res) => {
    const filename = req.params.filename;
    const data = readJson(filename);
    res.json(data);
});

// Save quizzes to a specific file
app.post('/api/quiz/:filename', (req, res) => {
    const filename = req.params.filename;
    writeJson(filename, req.body);
    res.json({ success: true });
});

// Git Push Endpoint
app.post('/api/push', (req, res) => {
    exec('git add . && git commit -m "Update quiz data via Admin Panel" && git push', (error, stdout, stderr) => {
        if (error) {
            console.error(`Git Error: ${error.message}`);
            return res.status(500).json({ error: error.message });
        }
        console.log(`Git Output: ${stdout}`);
        res.json({ success: true, message: 'Pushed to GitHub successfully!' });
    });
});

app.listen(PORT, () => {
    console.log(`Quiz Server running on http://localhost:${PORT}`);
});
