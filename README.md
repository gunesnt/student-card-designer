## Student Card Designer App

## How It's works

- Upload your excel file then select the fields. You can review the files with student review button, that will appear in the app bar.
- The App gives you a default design with first student in the file.
- You can modify page size, color, typesetting and page position.
- When you click the preview mode it shows pdf mode. refresh the page to see correct preview.
- Then save and print your modified page/card for all students.

### Installation

You can install the packages with this command: `npm i`

### Usage

You can serve and see the result in your local environment with this command: `npm start`

## Building Process

- Setup = create-react-app and integration with material UI
- I used LocalStorage for storing excel data and public API for random student profile photo generator.

  Best way to storing data is using RestAPI and NodeJS or tool like Firebase but i am not comfortable with back-end languages, that's because i didn't use and i found a easy and fast way to do this challenge. If there were real-world app, I wouldn't use localStorage, it has security problems. i rather use NodeJS.

- I uploaded and rendered excel file in the app

  Once the excel file uploaded I am able to get excel data from localStorage with JSON

- I used ContextApi for the state management

  ContextAPI is good for small apps and easy to use. I created a few customized hooks for getting data from localStorage, It was very exciting.

- Manipulation on the PDF

  I used a library called `@react-pdf/renderer`. With this, I designed a structure that works between HTML and PDF File
