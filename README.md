# README

DUET

This "Breakable Toy" is titled Duet.  Duet is a web application that serves
as a "meet-up" for music students and private music teachers.  

A user can sign up as a student and search through the site for a private music teacher by instrument and through a specific distance from the student.  The student is able adjust the distance search that teachers are away from them, as well as see photos, biographies, and even calendars of availability of the teachers.

A user can also sign up as a teacher.  A teacher is able to add themselves as a teacher to a specific instrument as well as delete themselves from that instrument if they no longer would like to teach that instrument.  A teacher can upload a google calendar if they choose as well as a picture, a short biography, and a long biography.

A unique feature of this website is that it utilizes a self-join table.  The users table, students can have many teachers and teachers can have many students.  Both of them are "users." 

To view this website live on Heroku, please visit:
https://whispering-bayou-75270.herokuapp.com/

To access the page as a user, please sign up and sign in.  There are specific validations when you sign in, which are different if you would like to sign up as a teacher or a student.  

Technologies Utilized:
Ruby 2.4.5
Rails
React
Javascript
ZipCode API
Devise
Carrierwave
Foundation
Postgresql
CSS

To run tests, run both $ bundle install and $ yarn install in the command line.  To run the model tests, run $ rspec.  To run the feature test, run $ yarn test.
