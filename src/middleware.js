module.exports = async (req, res) => {
  res.status(403).send(`
<HTML><HEAD>
<TITLE>Service Unavailable - Fail to connect</TITLE>
</HEAD><BODY>
<H1>Service Unavailable</H1>
The server is temporarily unable to service your request.  Please try again
later.<P>
Reference #12345.67890
</BODY></HTML>
      `);
};
