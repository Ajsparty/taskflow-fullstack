// basic express server - auth and task routes still need to be added
const express = require('express');
const app = express();
app.use(express.json());

app.get('/api/health', (req, res) => res.json({ status: 'ok', message: 'TaskFlow API running' }));

app.listen(5000, () => console.log('Server running on port 5000'));