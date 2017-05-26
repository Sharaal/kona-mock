module.exports = async (req, res) => {
  res.status(403).send(`
<HTML><HEAD>
<TITLE>Service Unavailable - Fail to connect</TITLE>
</HEAD><BODY>
<H1>Service Unavailable</H1>
The server is temporarily unable to service your request.  Please try again
later.<P>
Reference&#32;&#35;6&#46;43184a17&#46;1495793035&#46;75e2650
</BODY></HTML>
      `);
};
