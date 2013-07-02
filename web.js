

<head>
<script type="text/javascript">
function disp_alert()
{
alert("You are the best!");
}

var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send('Welcome to LIUjunyu s Page!');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
</script>
</head>
<body>

<input type="button" onclick="disp_alert()" value="Who is the best"  />

</body>
