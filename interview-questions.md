# ASSESSMENT 5: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What is a hash in Ruby?

Your answer:
Hashes contain key:value pairs. They are held inside of curly braces and the syntax looks like this dogs = {breed: "Labrador", size: "Large", color: "yellow"}. Hashes use something called Hash rocket (=>) to define a hash. You can iterate over hases using (.each) and (.map) with a do. To interact with hashes developers like to use the acroynm CRUD which stands for Create, Read, Update, and Delete.

Researched answer:
CRUD are operations that act on Hashes. I briefly explained that they help to modify and allow interactions with Hashes. And to elaborate more on the (.map) and (.each), they are able to act on Hashes because Duck Typing. Hashes share iteration abilities like arrays and ranges.

2. What is a gem?

Your answer:
Gems are what comes with the library of code that gats installed with Rspec. It is the equivalent to Jest modules that get brought in with running $ yarn add jest in terminal. $ gem install rspec is the terminal command that installs all the gems for you. The creators allowing this framwork to be open sourced just means they were the real Gem for allowing us to use it.

Researched answer:
Ruby gems are the packaging stystem that holds all of the tools and snippets needed in an easily accessible place. There are tons of folders that come along with the running of gem.

3. What is Ruby on Rails?

Your answer:
Ruby on Rails is the framework for an application that acts a lot like React but with less make up for it. It is a little easier being that the classes Ruby classes so they are Object Oriented Programming. Ruby on Rails uses databases as a basis of making tables to us CRUD with. You can  modify databases with it's Active Record.

Researched answer:
Ruby on Rails is a MVC framework, and provides a default structure for a database. This means it provides Model, View, and Controller. The default structure gives the developer easy of being able to CRUD the database through the server on their local. Rails is the intertwined version of HTML, JavaScript, CSS, and Ruby. 

4. What is a relational database? Are there other kinds of databases?

Your answer:
I am not sure off of the top of my head right now which exactly is relational database, but I will elborate more on this topic after some researching. Other kinds of databases are ones that hold the naming conventions attached to a Ruby program. They act as the storage rooms and the tables are like the filing cabinents.

Researched answer:
A relational database is when the tables within can have relationships with themseves. For example the Countries file we were just working on was a database of the countries around the world. Their tables that contained columns and rows were individualized per country but they had relations to being a database of all of the countries. As developers we can call on specific information from a database and we can also access different combinations of these rows and columns.

5. What are primary keys? Why are they important?

Your answer:
The Primary Key in a way is it's unique identifier. Being that you create a column one at a time, the primary key is like the stamp of creation. The ID that lets us know it is a one of a kind. It will not be duplicated and is also accessible by this.

Researched answer:
As stated the primary key is so important because it prevents rows from being confused for each other. An example :
id: 1, First Name: John, Last Name: Smith etc.
In the database there is not another ID of 1 but there can be other rows that contain first and last names the same with differing dob or something of that sort.

## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.

1. RESTful routes:
REST stands for Representational State Transfer. RESTful routes are operations applied to an Object into HTTP requests. Example of this is using HTTP verbs, such as, GET, POST, PATCH/PUT, DELETE. RESTful routes are patterns that we follow to use the CRUD operations.

2. JSON:
JSON stands for JavaScript Object Notation. It is used to send a receive data. Requiring JSON in a method will make JSON module available to use in Ruby. You can also Parse a String containing JSON data with proper syntax. It works on arrays, objects, and a lot more.

3. ERB:
ERB stands for Embedded Ruby or the template which is a file structure that allows HTML to be mixed with Ruby code. There is specific syntax (<%= %>) that with call on a Ruby code and bring it into the HTML. 

4. Params:
Params are URL parameters given to allow additional info that you can then view or modify the view. Params can be used as a method to use to also invoke more data upon request.

5. API:
When an App is controllers and models only it is called API. It is the backend of an Application. API transmits data in the form of JSON. The way we use the route is essential in the success of these things communicating with each other.