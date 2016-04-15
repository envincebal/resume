/* CONTACT AND HEADER INFORMATION */
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
	"skills" : ["HTML", "CSS", "Javascript", "jQuery", "Bootstrap", "SASS", "AJAX"]
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

if (bio.skills.length > 0){
	$("#header").append(HTMLskillsStart);
	var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
	$("#skills").append(formattedSkill);
	var formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
	$("#skills").append(formattedSkill);
	var formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
	$("#skills").append(formattedSkill);
	var formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
	$("#skills").append(formattedSkill);
	var formattedSkill = HTMLskills.replace("%data%", bio.skills[4]);
	$("#skills").append(formattedSkill);
	var formattedSkill = HTMLskills.replace("%data%", bio.skills[5]);
	$("#skills").append(formattedSkill);
	var formattedSkill = HTMLskills.replace("%data%", bio.skills[6]);
	$("#skills").append(formattedSkill);
}

/* WORK EXPERIENCE */

var work = [
{
	"employer" : "Consumer Cellular",
	"title" : "Customer Service Representative",
	"dates" : "July 2013 - March 2015",
	"location" : "Portland, Oregon",
	"description" : "An inbound call center environment. I assisted customers in sales, billing and troubleshooting of their mobile phones."
},
{
	"employer" : "University of Oregon Bookstore",
	"title" : "Sales Associate",
	"dates" : "April 2008 - January 2010",
	"location" : "Eugene, Oregon",
	"description" : "A sales position where I operated the register, provided customer support and stocked inventory."
}
];

for (x in work){

	$("#workExperience").append(HTMLworkStart);
	
	var formattedEmployer = HTMLworkEmployer.replace("%data%", work[x].employer);
	var formattedTitle = HTMLworkTitle.replace("%data%", work[x].title);
	
	var formattedWorkDates = HTMLworkDates.replace("%data%", work[x].dates);
	
	var formattedWorkLocation = HTMLworkLocation.replace("%data%", work[x].location);
	
	var formattedWorkDescription = HTMLworkDescription.replace("%data%", work[x].description)

	$(".work-entry:last").append(formattedEmployer + formattedTitle);
	$(".work-entry:last").append(formattedWorkDates);
	$(".work-entry:last").append(formattedWorkLocation);
	$(".work-entry:last").append(formattedWorkDescription);

}

/* PROJECTS */

var projects = [
{
	"title" : "Giant Bomb API Hack",
	"date" : "February 2016",
	"description" : "This App allows user to type a title of a game or game series and retrieves data about release date, box art and brief synopsis of title.",
	"image" : ""
},
{
	"title" : "StackOverflow API App",
	"date" : "January 2016",
	"description" : "This app allows you to displays the first(most recent) 30 unanswered questions for a tag entered by the user. It also displays 20 top answerers for a particular tag entered by the user.",
	"image" : ""
},
{
	"title" : "Quiz App",
	"date" : "January 2016",
	"description" : "The app presents 5 questions to the user and displays the score at the end of the quiz.",
	"image" : ""
},
{
	"title" : "Hot or Cold Game",
	"date" : "December 2015",
	"description" : "The app selects a random secret number between 1 and 100 and keeps it hidden. The player should guess the number within the number of guesses provided. The player will get feedback on how close ('hot'​) or far ('cold') the guess is.",
	"image" : ""
},
{
	"title" : "Shopping List App",
	"date" : "December 2015",
	"description" : "The app allows you to type an item and append it to list and can rearrange items in any order.",
	"image" : ""
},
{
	"title" : "FizzBuzz",
	"date" : "November 2015",
	"description" : "This app counts from 1 to the number entered by the user. For every number that isn't divisible by 3 or 5, it simply displays the number. If the number is divisible by 3, it displays 'Fizz'. If it is divisible by 5, it displays 'Buzz​'. And finally if it's divisible by both 3 and 5, it displays 'FizzBuzz'.",
	"image" : ""
},
{
	"title" : "Street Fighter Game",
	"date" : "November 2015",
	"description" : "It brings together DOM manipulation, events and effects from the jQuery API thereby building a themed interactive web page.",
	"image" : ""
},
{
	"title" : "Karma Landing Page Clone",
	"date" : "October 2015",
	"description" : "This is a clone of the landing page of a startup called Karma. Since Karma is a live startup that regularly updates their site, the link below is of a previous version of Karma's site which is what my clone looks like.",
	"image" : ""
}
]

/* EDUCATION */

var education = {
	"schools" : {
		"name" : "University of Oregon",
		"location" : "Eugene, Oregon",
		"major" : "Political Science",
		"dates" : "September 2003 - June 2007"
	},
	"online" : [
	{
		"name" : "Udacity", 
		"degree" : "Front End Developer Nanodegree",
		"dates" : "March 2016 - Present",
		"url" : "https://www.thinkful.com/"
	},
	{
		"name" : "Thinkful Front End Online Bootcamp",
		"dates" : "December 2015 - March 2016",
		"url" : "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
	}
	]
}
