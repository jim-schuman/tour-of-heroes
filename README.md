# React Tour of Heroes

To run:
npm install
npm run dev

* you don't have to do this to setup project

To replicate how this was built:

mkdir react-tour-of-heroes

cd react-tour-of-heroes

npx create-react-app .

npm i react-bulma

npm i -D json-server concurrently

touch db.json
add data to db.json

in package.json add to "scripts" section

"json-server": "json-server --watch db.json --port 5000",
"dev": "concurrently \" npm start\" \"npm run json-server\"",

in package.json add as last line
"proxy": "http://localhost:5000"

npm i react-router-dom connected-react-router
npm i redux react-redux redux-thunk redux-devtools-extension

to run project: npm run dev