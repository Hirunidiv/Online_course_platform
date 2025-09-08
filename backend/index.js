require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;
// Start server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

// Middleware
app.use(cors());
app.use(express.json());

// Route imports
app.use('/api/users', require('./routes/userRoutes')); //done
app.use('/api/courses', require('./routes/courseRoutes')); //done
app.use('/api/enrollments', require('./routes/enrollmentRoutes'));//done
app.use('/api/contents', require('./routes/contentRoutes'));//done
app.use('/api/assignments', require('./routes/assignmentRoutes')); //done
app.use('/api/submissions', require('./routes/submissionRoutes')); //done
app.use('/api/quizzes', require('./routes/quizRoutes')); //done
app.use('/api/forums', require('./routes/forumRoutes')); //done
app.use('/api/messages', require('./routes/messageRoutes')); //done
app.use('/api/notifications', require('./routes/notificationRoutes'));
app.use('/api/payments', require('./routes/paymentRoutes'));
app.use('/api/certificates', require('./routes/certificateRoutes'));
app.use('/api/profiles', require('./routes/profileRoutes'));

// Error handler middleware
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: err.message || 'Internal Server Error' });
});