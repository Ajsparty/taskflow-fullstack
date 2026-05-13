// Express server placeholder - full implementation in the complete repo
const express = require('express');
const app = express();
app.use(express.json());

app.get('/api/health', (req, res) => res.json({ status: 'ok', message: 'TaskFlow API running' }));

app.listen(5000, () => console.log('Server running on port 5000'));
// Full version includes JWT auth, Mongoose models, task routes, etc.