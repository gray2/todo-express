# Overview

Our final project was to pick a library from the node.js modules and build just about whatever we wanted with it. Since this was my first time working with the node library, I picked the most commonly used modules - express and mongoose. My initial goal was to build a basic to-do list that had an option to sort the items in the list by the date or time they needed to be completed by.


# Module Summary

## Express
The express module allows users to create simple, yet powerful web-based APIs. Express extends upon the basic JavaScript library and provides developers with numerous helpful shortcuts to make things more efficient. It routes data, functions, anything needed to its proper place.

What express does in my application is handles the data given to the Mongo database and builds the layout of the to-do list. It basically acts as the middleman between the database and what the users see. It's what makes the GET, POST, UPDATE, EDIT, and DELETE methods work. The module helps the app direct data to its respective place in the database entry. Id's go to id's, dates go to dates, and so on.

## Mongoose
Mongoose helps connect your application to a database, specifically the Mongo database. It's built-in with several other node modules, but this is the most bare-bones version of it. Once you create a database on the Mongo site, the library takes in the data specified within the respective schema and stores the necessary values.

In my application, mongoose starts the local server and connects to my database on Mongo. From there, it takes in any and all entries in the to-do list. If the list needs to be updated, express finds the id of the task, updates it, and sends it over to the database. The id of the task within the database is updated, and the new data is saved. While there is a bit of a delay between the id being changed and the id in the database updating, it's fairly simple and gets the job done.

# Personal Thoughts
I was able to get the basic to-do list working and had it connected to a Mongo database, but getting the application to pull information from the database was much easier said than done.

Each time I tried to run the function to pull the date or time associated with an entry, the entire application would break. I tried remaking the function several times, but the mongoose "sort" function just refused to cooperate. Since I couldn't even get the id of an entry to be returned after several troubleshooting sessions and countless hours on stackoverflow, I decided to take a step back.

Even though I was unable to get my application to sort the tasks, I was still able to explore the capabilities of mongoose and express. Hopefully I can build my skills with the two further and maybe come back to this project at a later date!


### Resources Used
  * PEOPLE - David Schaal + Sam Herwig
  * https://medium.com/@diogo.fg.pinheiro/simple-to-do-list-app-with-node-js-and-mongodb-chapter-1-c645c7a27583
  * https://expressjs.com/en/starter/hello-world.html
  * https://medium.com/nmc-techblog/get-s-t-done-nodejs-style-ac7d62674a85
  * https://stackoverflow.com/questions/40448990/to-do-list-with-priorities-in-javascript
  * https://stackoverflow.com/questions/13847766/how-to-sort-a-collection-by-date-in-mongodb
  * https://docs.mongodb.com/manual/reference/operator/meta/orderby/
