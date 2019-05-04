
// Server
const express = require('express');
const app = express();
const port = 3000;
const('method-override');
app.use(methodOverride('_method'));

app.get('/', (req, res) =>res.send('Buenos tardes!'));

app.listen(port, () => console.log(`Demo listening on port ${port}`));

app.get('/fruits/:indexOfFruitsArray/edit', function(req, res){
	res.render(
		'edit.ejs', //render views/edit.ejs
		{ //pass in an object that contains
			fruit: fruits[req.params.indexOfFruitsArray], //the fruit object
			index: req.params.indexOfFruitsArray //... and its index in the array
		}
	);
});
