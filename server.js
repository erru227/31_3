const express = require('express');
const app = express();

const web_files = express.static("public");

app.use(web_files);

app.get('/{*splat}', (req, res) => {
   res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(process.env.PORT || 3000, function() {
   console.log("Listening on port 3000...");
});
