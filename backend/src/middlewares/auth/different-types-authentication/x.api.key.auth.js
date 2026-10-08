async function apiKeyAuth(request , reply){
    const request_api_key = request.headers["api-key"]
    const server_api_key = process.env.APIKEY

    if(!request_api_key || request_api_key !== server_api_key){
        reply.status(401).type("text/html").send('<img src="https://http.cat/401" alt="Bad Request">');
    }
}

module.exports = apiKeyAuth