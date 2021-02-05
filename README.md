# Space Age

#### 

#### By Glen Buck

## Description



## Setup/Installation Requirements

- Go to https://github.com/glenbuck503/space-age
- Go to the middle upper right corner where the green box that says "Code" and click it.
- Copy the HTTPs site to your clipboard.
- Open terminal or bash and get to the directory you want to download the repo to.
- Type into the terminal "git clone command + v if using Mac or control + v is using a PC" and press enter.
- Navigate to the project directory and in your terminal or bash type "code . "
- This app uses node.js. If you do not already have node.js installed, visit https://nodejs.org/en/download/ and install.
- After installing node, navigate to the root directory of the cloned repo and type in "npm install".
- Then type in "npm run build".
- If you would like to use Jest to run your tests, open your terminal and go to the root of the project directory and type in "npm test". The reusults of the tests will show for each test and also tell you how many passed or how many failed and which ones they were.
- If you would like to run the program through the server, you can type "npm run start" which will build the program and launch the preview to the local server.
- On the file nav on the left, open the "index.html" file in the "dist" folder

## Specs


## Known Bugs

_There are no known bugs at this time._

## Known Bugs

No Known bugs 2/5/21

If you are using a version of Jest where the coverage directory is not automatically generated, you will need to update package.json file:

`"scripts": {..."test": "jest --coverage"},"jest": { "collectCoverage": true, "coverageReporters": ["html"]},`

## Support and contact details

For contact support, please email Glen Buck <a href = "mailto: glenbuck@gamil.com">Send Email</a>

## Technologies Used

- VS Code
- HTML/CSS
- Git
- Git Hub
- Jquery
- JavaScript
- Node
- Webpack

### License

123.456.789

Copyright (c) 2021 Glen Buck Inc.
