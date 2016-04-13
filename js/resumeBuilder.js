var bio = {
	"name" : "Vincent Yan",
	"role" : "Web Developer",
	"contacts" : {
		"mobile" : "503-201-2982", 
		"email" : "vincentyan1@gmail.com", 
		"twitter" : "@45_ACP", 
		"github" : "envincebal", 
		"location" : "Clackamas, OR"
	},
	"picture" : "images/profile-pic.jpg",
	"welcome" : "Hello, welcome to my resume page!",
	"skills" : ["HTML", "CSS", "Javascript", "jQuery", "SASS", "AJAX"]
};

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
var formattedGitHub = HTMLgithub.replace("%data%", bio.contacts.github);
var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
var formattedBioPic = HTMLbioPic.replace("%data%", bio.picture);
var formattedWelcome = HTMLwelcomeMsg.replace("%data%", bio.welcome);



$("#header").prepend(formattedName + formattedRole);
$("#topContacts").append(formattedMobile + formattedEmail + formattedTwitter + formattedGitHub + formattedLocation);
$("#header").append(formattedBioPic);
$("#header").append(formattedWelcome);





