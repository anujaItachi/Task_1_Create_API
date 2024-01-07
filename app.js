const express = require('express');
const app = express();
const healthzRouter = require('./healthz');

app.use('/', healthzRouter);

// Other routes and middleware can be added here

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
