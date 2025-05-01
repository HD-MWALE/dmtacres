// app.js
const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2/promise');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

app.use(bodyParser.json());

// 1. CRUD for site_sections
app.get('/sections', async (req, res) => {
  const [rows] = await pool.query('SELECT * FROM site_sections');
  res.json(rows);
});

app.post('/sections', async (req, res) => {
  const { section, subsection, image_url } = req.body;
  const [result] = await pool.query(
    'INSERT INTO site_sections (section, subsection, image_url) VALUES (?, ?, ?)',
    [section, subsection, image_url]
  );
  res.status(201).json({ id: result.insertId, section, subsection, image_url });
});

app.put('/sections/:id', async (req, res) => {
  const { section, subsection, image_url } = req.body;
  await pool.query(
    'UPDATE site_sections SET section=?, subsection=?, image_url=? WHERE id=?',
    [section, subsection, image_url, req.params.id]
  );
  res.json({ id: req.params.id, section, subsection, image_url });
});

app.delete('/sections/:id', async (req, res) => {
  await pool.query('DELETE FROM site_sections WHERE id=?', [req.params.id]);
  res.status(204).send();
});

// 2. CRUD for site_content
app.get('/content', async (req, res) => {
  const [rows] = await pool.query('SELECT * FROM site_content');
  res.json(rows);
});

app.post('/content', async (req, res) => {
  const { section_id, content, language } = req.body;
  const [result] = await pool.query(
    'INSERT INTO site_content (section_id, content, language) VALUES (?, ?, ?)',
    [section_id, content, language]
  );
  res.status(201).json({ id: result.insertId, section_id, content, language });
});

app.put('/content/:id', async (req, res) => {
  const { content, language } = req.body;
  await pool.query(
    'UPDATE site_content SET content=?, language=?, updated_at=NOW() WHERE id=?',
    [content, language, req.params.id]
  );
  res.json({ id: req.params.id, content, language });
});

app.delete('/content/:id', async (req, res) => {
  await pool.query('DELETE FROM site_content WHERE id=?', [req.params.id]);
  res.status(204).send();
});

// 3. CRUD for site_settings
app.get('/settings', async (req, res) => {
  const [rows] = await pool.query('SELECT * FROM site_settings');
  res.json(rows);
});

app.post('/settings', async (req, res) => {
  const { site_name, site_motto, logo_url } = req.body;
  const [result] = await pool.query(
    'INSERT INTO site_settings (site_name, site_motto, logo_url) VALUES (?, ?, ?)',
    [site_name, site_motto, logo_url]
  );
  res.status(201).json({ id: result.insertId, site_name, site_motto, logo_url });
});

app.put('/settings/:id', async (req, res) => {
  const { site_name, site_motto, logo_url } = req.body;
  await pool.query(
    'UPDATE site_settings SET site_name=?, site_motto=?, logo_url=? WHERE id=?',
    [site_name, site_motto, logo_url, req.params.id]
  );
  res.json({ id: req.params.id, site_name, site_motto, logo_url });
});

app.delete('/settings/:id', async (req, res) => {
  await pool.query('DELETE FROM site_settings WHERE id=?', [req.params.id]);
  res.status(204).send();
});

// 4. CRUD for team_members
app.get('/team', async (req, res) => {
  const [rows] = await pool.query('SELECT * FROM team_members');
  res.json(rows);
});

app.post('/team', async (req, res) => {
  const { name, role, image_url, bio } = req.body;
  const [result] = await pool.query(
    'INSERT INTO team_members (name, role, image_url, bio) VALUES (?, ?, ?, ?)',
    [name, role, image_url, bio]
  );
  res.status(201).json({ id: result.insertId, name, role, image_url, bio });
});

app.put('/team/:id', async (req, res) => {
  const { name, role, image_url, bio } = req.body;
  await pool.query(
    'UPDATE team_members SET name=?, role=?, image_url=?, bio=? WHERE id=?',
    [name, role, image_url, bio, req.params.id]
  );
  res.json({ id: req.params.id, name, role, image_url, bio });
});

app.delete('/team/:id', async (req, res) => {
  await pool.query('DELETE FROM team_members WHERE id=?', [req.params.id]);
  res.status(204).send();
});

// Start server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
