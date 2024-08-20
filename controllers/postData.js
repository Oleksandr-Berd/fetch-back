const postData = (req, res) => {
    const delay = Math.floor(Math.random() * 1000) + 1;
    
  setTimeout(() => {
        let requestsPerSecond = 0;
      
      if (requestsPerSecond > 50) {
        res.status(429).send("Too Many Requests");
      } else {        
        res.json({ index: req.body.index });
      }
        setInterval(() => (requestsPerSecond = 0), 1000);
    }, delay);
}

module.exports = {postData};