/*
This is empty on purpose! Your code to build the resume will go here.
 */
 var name = "Anukool";
 var role="Student";
 /*var email = "anukoolsriv@ymail.com";
 
 var newemail= email.replace("yahoo","gmail");
 
 console.log(email);
 console.log(newemail);
 
 var awesomethoughts = "I am anukool and i am awesome";
 
 var funthoughts = awesomethoughts.replace("awesome","fun");
 
 $("#main").append(funthoughts);*/
 
 var newname = HTMLheaderName.replace("%data%",name);
 var newrole = HTMLheaderRole.replace("%data%",role);
 
 $("#header").append(newname);
 $("#header").append(newrole);