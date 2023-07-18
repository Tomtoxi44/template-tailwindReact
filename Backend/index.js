const express = require('express')

const app = express();


app.listen(port,(err)=> {
if (err) {
	console.error("Erreur de connexion");
}else {
console.log(`Server is listening on ${port}`);
}
});