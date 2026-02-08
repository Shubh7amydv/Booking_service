# semantics fro future 
   - What it does
   - Why it exists
   - Code snippet
   - Common mistakes


# Syntax Explantion
   >arrow function    ()=>            {function body}
   >normal function   function()     {function body} 
   >app.listen(PORT,callback)   -- callback is optional and is arrow function

# For starting the server with npm start 
   >change this to "test": "echo \"Error: no test specified\" && exit 1" to 
     this  `"start" : "npx nodemon src/index.js"

# Setup body parser
  -    what it does??   -> body-parser reads the body of an incoming HTTP request and     converts it into a usable JavaScript object.
  -    **app.use(bodyParser.json());**  --->  Whenever a request comes in with JSON data in its body, read it, parse it, and put it into req.body.
  
# setting up dotenv file in config/serverconfig.js
  - Why do we use it ?    => .env file is used to store sensitive and environment-specific variables which are loaded into process.env using dotenv.
  - How do we use it ??   => store the value in server folder 

# Setup routes 
   - understand the syntax of routing 
   - router.use('source', sink);
  
# setup DB_SYNC

# Setting up booking repository
  - Export Booking model
  - Import errors
  - Import Status Codes
  - Create a class name Booking repository 
  - Inside this class create a function named "create"
       
