const express = require("express");
const app = express();
const PORT = 3000;
const db = require('./config/db');
// const db = require('./db');

const roadmapRoutes = require("./routes/roadmap");

app.use(express.json());
// app.use(express.static('./frontend', { index: false }));
const path = require('path');

app.use(express.static(path.join(__dirname, '../Frontend')));

// ── This FIRST ──
app.use("/api", roadmapRoutes);

// ── ALL YOUR ROUTES AFTER ──

app.post('/api/signup', (req, res) => {
  const { name, email, password } = req.body;
  const query = 'INSERT INTO users (name, email, password) VALUES (?, ?, ?)';
  db.query(query, [name, email, password], (err, result) => {
    if (err) {
      res.json({ success: false, message: 'Email already exists' });
    } else {
      res.json({ success: true, message: 'User created successfully', userId: result.insertId });
    }
  });
});

app.post('/api/login', (req, res) => {
  const { email, password } = req.body;
  const query = 'SELECT * FROM users WHERE email = ? AND password = ?';
  db.query(query, [email, password], (err, result) => {
    if (result.length > 0) {
      res.json({ success: true, message: 'Login successful', userId: result[0].id, name: result[0].name });
    } else {
      res.json({ success: false, message: 'Invalid email or password' });
    }
  });
});

app.post('/api/profile', (req, res) => {
  const { userId, emoji, education, city, interests, goals } = req.body;
  const query = 'INSERT INTO profiles (user_id, emoji, education, city, interests, goals) VALUES (?, ?, ?, ?, ?, ?)';
  db.query(query, [userId, emoji, education, city, interests, goals], (err, result) => {
    if (err) {
      res.json({ success: false, message: 'Error saving profile' });
    } else {
      res.json({ success: true, message: 'Profile saved successfully' });
    }
  });
});

app.get('/api/get-profile', (req, res) => {
  const userId = req.query.userId;
  const query = 'SELECT * FROM profiles WHERE user_id = ?';
  db.query(query, [userId], (err, result) => {
    if (err) {
      res.json({ exists: false });
    } else if (result.length > 0) {
      res.json({
        exists:    true,
        emoji:     result[0].emoji,
        education: result[0].education,
        city:      result[0].city,
        goals:     result[0].goals,
        interests: result[0].interests
      });
    } else {
      res.json({ exists: false });
    }
  });
});

app.post('/api/roadmap-history', (req, res) => {
  const { userId, careerGoal, categoryMatched } = req.body;
  const query = 'INSERT INTO roadmap_history (user_id, career_goal, category_matched) VALUES (?, ?, ?)';
  db.query(query, [userId, careerGoal, categoryMatched], (err, result) => {
    if (err) {
      res.json({ success: false, message: 'Error saving history' });
    } else {
      res.json({ success: true, message: 'History saved successfully' });
    }
  });
});

app.post('/api/feedback', (req, res) => {
  const { userId, q1RoadmapAccurate, q2CollegesRelevant, q3EasyToNavigate, q4JobsRelevant, q5FeatureSuggestion } = req.body;
  const query = 'INSERT INTO feedback (user_id, q1_roadmap_accurate, q2_colleges_relevant, q3_easy_to_navigate, q4_jobs_relevant, q5_feature_suggestion) VALUES (?, ?, ?, ?, ?, ?)';
  db.query(query, [userId, q1RoadmapAccurate, q2CollegesRelevant, q3EasyToNavigate, q4JobsRelevant, q5FeatureSuggestion], (err, result) => {
    if (err) {
      res.json({ success: false, message: 'Error saving feedback' });
    } else {
      res.json({ success: true, message: 'Feedback saved!' });
    }
  });
});

// app.get("/", (req, res) => {
//   res.sendFile(__dirname + "/frontend/welcome.html");
// });

// app.get('/profile.html', (req, res) => {
//   res.sendFile(__dirname + '/frontend/profile.html');
// });

// app.get('/dashboard.html', (req, res) => {
//   res.sendFile(__dirname + '/frontend/dashboard.html');
// });

// app.get('/auth.html', (req, res) => {
//   res.sendFile(__dirname + '/frontend/auth.html');
  
// });



app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../Frontend/pages/welcome.html"));
});

app.get('/welcome.html', (req, res) => {
  res.sendFile(path.join(__dirname, "../Frontend/pages/welcome.html"));
});

app.get('/profile.html', (req, res) => {
  res.sendFile(path.join(__dirname, "../Frontend/pages/profile.html"));
});

app.get('/dashboard.html', (req, res) => {
  res.sendFile(path.join(__dirname, "../Frontend/pages/dashboard.html"));
});

app.get('/auth.html', (req, res) => {
  res.sendFile(path.join(__dirname, "../Frontend/pages/auth.html"));
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});