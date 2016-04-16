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

function displayWork(){
	for (x in work){
		
		var formattedEmployer = HTMLworkEmployer.replace("%data%", work[x].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work[x].title);
		
		var formattedWorkDates = HTMLworkDates.replace("%data%", work[x].dates);
		
		var formattedWorkLocation = HTMLworkLocation.replace("%data%", work[x].location);
		
		var formattedWorkDescription = HTMLworkDescription.replace("%data%", work[x].description);
		$("#workExperience").append(HTMLworkStart);
		$(".work-entry:last").append(formattedEmployer + formattedTitle);
		$(".work-entry:last").append(formattedWorkDates);
		$(".work-entry:last").append(formattedWorkLocation);
		$(".work-entry:last").append(formattedWorkDescription);
	}	
}

displayWork();

/* PROJECTS */

var projects = {
	"projects" : [
	{
		"title" : "Giant Bomb API Hack",
		"date" : "February 2016",
		"description" : "This App allows user to type a title of a game or game series and retrieves data about release date, box art and brief synopsis of title.",
		"images" : ["images/api-hack.png"]
	},
	{
		"title" : "StackOverflow API App",
		"date" : "January 2016",
		"description" : "This app allows you to displays the first(most recent) 30 unanswered questions for a tag entered by the user. It also displays 20 top answerers for a particular tag entered by the user.",
		"images" : ["images/stackoverflow.png"]
	},
	{
		"title" : "Quiz App",
		"date" : "January 2016",
		"description" : "The app presents 5 questions to the user and displays the score at the end of the quiz.",
		"images" : ["images/quiz-app.png"]
	},
	{
		"title" : "Hot or Cold Game",
		"date" : "December 2015",
		"description" : "The app selects a random secret number between 1 and 100 and keeps it hidden. The player should guess the number within the number of guesses provided. The player will get feedback on how close ('hot'​) or far ('cold') the guess is.",
		"images" : ["images/hot-or-cold.png"]
	},
	{
		"title" : "Shopping List App",
		"date" : "December 2015",
		"description" : "The app allows you to type an item and append it to list and can rearrange items in any order.",
		"images" : ["images/shopping-list.png"]
	},
	{
		"title" : "FizzBuzz",
		"date" : "November 2015",
		"description" : "This app counts from 1 to the number entered by the user. For every number that isn't divisible by 3 or 5, it simply displays the number. If the number is divisible by 3, it displays 'Fizz'. If it is divisible by 5, it displays 'Buzz​'. And finally if it's divisible by both 3 and 5, it displays 'FizzBuzz'.",
		"images" : ["images/fizzbuzz.png"]
	},
	{
		"title" : "Street Fighter Game",
		"date" : "November 2015",
		"description" : "It brings together DOM manipulation, events and effects from the jQuery API thereby building a themed interactive web page.",
		"images" : ["images/street-fighter.png"]
	},
	{
		"title" : "Karma Landing Page Clone",
		"date" : "October 2015",
		"description" : "This is a clone of the landing page of a startup called Karma. Since Karma is a live startup that regularly updates their site, the link below is of a previous version of Karma's site which is what my clone looks like.",
		"images" : ["images/karma.png"]
	}
]};

projects.display = function(){
	for (project in projects.projects){
		$("#projects").append(HTMLprojectStart);

		var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		$(".project-entry:last").append(formattedProjectTitle);

		var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[project].date);
		$(".project-entry:last").append(formattedProjectDates);

		var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		$(".project-entry:last").append(formattedProjectDescription);

	 if (projects.projects[project].images.length > 0) {
     for (image in projects.projects[project].images) {
       var formmattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
       $(".project-entry:last").append(formmattedProjectImage);
     }
   }
	}
};

projects.display();

/* EDUCATION */

var education = {
	"schools" : [
	{
		"name" : "University of Oregon",
		"location" : "Eugene, Oregon",
		"major" : "Political Science",
		"dates" : "September 2003 - June 2007"
	}
],
	"online" : [
	{
		"title" : "Front End Developer Nanodegree",
		"name" : "Udacity", 
		"dates" : "March 2016 - Present",
		"url" : "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
	},
	{
		"title" : "Front End Career Path",
		"name" : "Thinkful",
		"dates" : "December 2015 - March 2016",
		"url" : "https://www.thinkful.com/"
	}
	]
};

education.display = function(){
	for (school in education.schools){
		
		var formattedEducationName = HTMLschoolName.replace("%data%", education.schools[school].name);
		var formattedEducationLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
		var formattedEducationMajor = HTMLschoolDegree.replace("%data%", education.schools[school].major);
		var formattedEducationDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
		$("#education").append(HTMLschoolStart);

		$(".education-entry:last").append(formattedEducationName + formattedEducationLocation + formattedEducationMajor + formattedEducationDates);
	}


	
		
		for (online in education.online){
			$("#education").append("<br>" + HTMLonlineClasses);
			$("#education").append(HTMLschoolStart);
			var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.online[online].title);
			var formattedOnlineName = HTMLonlineSchool.replace("%data%", education.online[online].name);
			var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.online[online].dates);
			var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.online[online].url);

			$(".education-entry:last").append(formattedOnlineTitle + formattedOnlineName);
			$(".education-entry:last").append(formattedOnlineDates);
			$(".education-entry:last").append(formattedOnlineURL);
		}
	
}

education.display();

/* MAP LOCATION */

$("#mapDiv").append(googleMap);

/* FOOTER */

$("#footerContacts").append(formattedMobile + formattedEmail + formattedTwitter + formattedGitHub + formattedLocation);