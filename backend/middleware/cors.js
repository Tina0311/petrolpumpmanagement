const cors = require('cors');

const corsOptions = {
    origin: '*', // Allow all origins, adjust this for security in production
    optionsSuccessStatus: 200, // For legacy browser support
};

module.exports = cors(corsOptions);
