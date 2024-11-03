// server.js
import express from 'express';
import path from 'path';

const app = express();
const PORT = 3000;

// Serve static files from the 'public' directory
app.use(express.static(path.join(process.cwd(), 'public')));
app.get('/download/:fileName', (req, res)=>{
  const fileName = req.params.fileName;
  const filepath = path.join(process.cwd(), 'public', 'mathBookPDF', fileName);
  res.download(filepath, (err)=>{
    if (err){
      console.log(err);
      res.status(500).send('file not found');
    }
  })
})

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
