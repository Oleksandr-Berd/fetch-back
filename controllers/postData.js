const postData = (req, res) => {
    const delay = Math.floor(Math.random() * 1000) + 1;
    
    setTimeout(() => {
      if (requestsPerSecond > 50) {
        res.status(429).send("Too Many Requests");
      } else {
        res.json({ index: req.body.index });
      }
        let requestsPerSecond = 0;
        setInterval(() => (requestsPerSecond = 0), 1000);
    }, delay);
}

module.exports = postData;