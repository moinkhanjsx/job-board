const express = require('express');
const { Job, Application } = require('./models');
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());

// GET /jobs – list jobs (with optional type filter)
app.get('/jobs', async (req, res) => {
  try {
    const where = {};
    if (req.query.type) {
      where.type = req.query.type;
    }
    const jobs = await Job.findAll({
      where,
      attributes: ['id', 'title', 'company', 'location', 'type']
    });
    res.json(jobs);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch jobs' });
  }
});

// GET /jobs/:id – job details
app.get('/jobs/:id', async (req, res) => {
  try {
    const job = await Job.findByPk(req.params.id);
    if (!job) return res.status(404).json({ error: 'Job not found' });
    res.json(job);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch job details' });
  }
});

// GET /applications – list all applications (admin)
app.get('/applications', async (req, res) => {
  try {
    // Simple admin check (optional): require ?admin=true
    if (req.query.admin !== 'true') {
      return res.status(403).json({ error: 'Admin access required' });
    }
    const applications = await Application.findAll();
    res.json(applications);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch applications' });
  }
});

// POST /applications – submit application
app.post('/applications', async (req, res) => {
  try {
    const { job_id, name, email, resume_link, cover_letter } = req.body;
    if (!job_id || !name || !email || !resume_link || !cover_letter) {
      return res.status(400).json({ error: 'All fields are required' });
    }
    // Optionally, check if job exists
    const job = await Job.findByPk(job_id);
    if (!job) return res.status(404).json({ error: 'Job not found' });
    const application = await Application.create({ job_id, name, email, resume_link, cover_letter });
    res.status(201).json(application);
  } catch (err) {
    res.status(500).json({ error: 'Failed to submit application' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
}); 