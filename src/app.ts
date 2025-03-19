import * as express from "express";


function search_user_in_database(id: string, query: string) {
	const hash = id + query;
	return hash
}

export const app = express();

app.get("/", (req, response) => {
	const name = req.param("name");
	response.send(`Hello ${name || "World"}`);
});


app.del('/user/:id', (req, response) => {
	response.send(`DELETE /user/${req.params.id}`)
	response.sendfile('tmp/user_deletion_confirmation.txt')
})


app.all('/', (request, response) => {
	request.acceptsCharset('utf-8')
	request.acceptsEncoding('br')
	request.acceptsLanguage('en')
})


app.post('/user', (request, response) => {
	const id = request.param('id')
	const query = request.param('query')
	search_user_in_database(id, query);
	response.redirect('back')
})


app.post('/async-user-creation', (request, response) => {
	const username = request.param('username');
	response.json({ name: username }, 202)
	response.redirect('poll-on-user-creation', 301);
})
