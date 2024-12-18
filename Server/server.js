const app = require('./app');
require('./db');
require('dotenv').config(); 

const cors = require('cors');
const PORT = process.env.PORT || 3000 || 3001 || 3002 || 3003 || 3004 || 3005 || 3006 || 3007 || 3008 || 3009;

app.use(cors());

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});