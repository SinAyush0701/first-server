//Server Creation

const http= require("http");

const port= 8081;

const toDoList= ["Need to learn", " Need to code"];

http.createServer((req, res) => {
  //  res.writeHead(200, {"Content-Type": "text/html"});
  //  res.write("<h4>Hello, this is from my new server</h4>");
  //  res.end();
      const {method, url}= req;
 //   console.log(method, url);
 //   res.end();
      if(url=== "/todos"){
        // http://localhost:8081/todos
        if(method === "GET") {
            res.writeHead(200, {"Content-Type": "text/html"});
            res.write(toDoList.toString());
            } else if(method === "POST"){
                let body= "";
                req.on('error', (err) => {
                    console.log(err);
                }).on('data', (chunk) => {
                    body += chunk;
                  //  console.log(chunk);
                }).on('end', () => {
                    body= JSON.parse(body);
                    console.log("body data", body);
                });
            } else {
            res.writeHead(501);
           }    
        } else {
            res.writeHead(404);
        }
      res.end();
}).listen(port, () => {
    console.log(`My NodeJS server started on port ${port}`);
});

// http://localhost:8081