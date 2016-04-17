/* CONTACT AND HEADER INFORMATION */
var bio = {
    "name": "Vincent Yan",
    "role": "Web Developer",
    "contacts": {
        "mobile": "503-201-2982",
        "email": "vincentyan1@gmail.com",
        "twitter": "@45_ACP",
        "github": "envincebal",
        "location": "Clackamas, OR"
    },
    "welcomeMessage": "Hello, welcome to my resume page!",
    "biopic": "images/profile-pic.JPG",
    "skills": ["HTML", "CSS", "Javascript", "jQuery", "Bootstrap", "SASS", "AJAX"]
};

bio.display = function(){

	var formattedName = HTMLheaderName.replace("%data%", bio.name);
	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

	var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
	var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
	var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
	var formattedGitHub = HTMLgithub.replace("%data%", bio.contacts.github);
	var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);

	var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
	var formattedWelcome = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

	$("#header").prepend(formattedName + formattedRole);
	$("#topContacts").append(formattedMobile + formattedEmail + formattedTwitter + formattedGitHub + formattedLocation);
	$("#header").append(formattedBioPic);
	$("#header").append(formattedWelcome);


	if (bio.skills.length > 0){
		$("#header").append(HTMLskillsStart);
	};

	for (var i = 0; i < bio.skills.length; i++){
		var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
		$("#skills").append(formattedSkill);
	}

	$("#footerContacts").append(formattedMobile + formattedEmail + formattedTwitter + formattedGitHub + formattedLocation);
}

bio.display();

/* WORK EXPERIENCE */

var work = {
    "jobs": [{
        "employer": "Consumer Cellular",
        "title": "Customer Service Representative",
        "dates": "July 2013 - March 2015",
        "location": "Portland, Oregon",
        "description": "An inbound call center environment." + "I assisted customers in sales," + "billing and troubleshooting of their mobile phones."
    }, {
        "employer": "University of Oregon Bookstore",
        "title": "Sales Associate",
        "dates": "April 2008 - January 2010",
        "location": "Eugene, Oregon",
        "description": "A sales position where I operated the register," + "provided customer support and stocked inventory."
    }]
};

work.display = function(){
	for (x in work.jobs){
		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[x].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[x].title);
		var formattedWorkDates = HTMLworkDates.replace("%data%", work.jobs[x].dates);
		var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[x].location);
		var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[x].description);

		$("#workExperience").append(HTMLworkStart);
		$(".work-entry:last").append(formattedEmployer + formattedTitle);
		$(".work-entry:last").append(formattedWorkDates);
		$(".work-entry:last").append(formattedWorkLocation);
		$(".work-entry:last").append(formattedWorkDescription);
	}	
}

work.display();

/* PROJECTS */

var projects = {
    "projects": [{
        "title": "Giant Bomb API Hack",
        "dates": "February 2016",
        "description": "This App allows user to type a title of a game or game series and retrieves data about release date, box art and brief synopsis of title.",
        "images": ["images/api-hack.png"]
    }, {
        "title": "StackOverflow API App",
        "dates": "January 2016",
        "description": "This app allows you to displays the first(most recent) 30 unanswered questions for a tag entered by the user. It also displays 20 top answerers for a particular tag entered by the user.",
        "images": ["images/stackoverflow.png"]
    }, {
        "title": "Quiz App",
        "dates": "January 2016",
        "description": "The app presents 5 questions to the user and displays the score at the end of the quiz.",
        "images": ["images/quiz-app.png"]
    }, {
        "title": "Hot or Cold Game",
        "dates": "December 2015",
        "description": "The app selects a random secret number between 1 and 100 and keeps it hidden. The player should guess the number within the number of guesses provided. The player will get feedback on how close ('hot'​) or far ('cold') the guess is.",
        "images": ["images/hot-or-cold.png"]
    }, {
        "title": "Shopping List App",
        "dates": "December 2015",
        "description": "The app allows you to type an item and append it to list and can rearrange items in any order.",
        "images": ["images/shopping-list.png"]
    }, {
        "title": "FizzBuzz",
        "dates": "November 2015",
        "description": "This app counts from 1 to the number entered by the user. For every number that isn't divisible by 3 or 5, it simply displays the number. If the number is divisible by 3, it displays 'Fizz'. If it is divisible by 5, it displays 'Buzz​'. And finally if it's divisible by both 3 and 5, it displays 'FizzBuzz'.",
        "images": ["images/fizzbuzz.png"]
    }, {
        "title": "Street Fighter Game",
        "dates": "November 2015",
        "description": "It brings together DOM manipulation, events and effects from the jQuery API thereby building a themed interactive web page.",
        "images": ["images/street-fighter.png"]
    }, {
        "title": "Karma Landing Page Clone",
        "dates": "October 2015",
        "description": "This is a clone of the landing page of a startup called Karma. Since Karma is a live startup that regularly updates their site, the link below is of a previous version of Karma's site which is what my clone looks like.",
        "images": ["images/karma.png"]
    }]
};

projects.display = function(){
	for (project in projects.projects){
		$("#projects").append(HTMLprojectStart);

		var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		$(".project-entry:last").append(formattedProjectTitle);

		var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		$(".project-entry:last").append(formattedProjectDates);

		var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		$(".project-entry:last").append(formattedProjectDescription);

	 if (projects.projects[project].images.length > 0) {
     for (image in projects.projects[project].images) {
       var formmattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);

       $(".project-entry:last").append(formmattedProjectImage + "<hr>");
     }
   }
	}
};

projects.display();

/* EDUCATION */

var education = {
    "schools": [{
        "name": "University of Oregon",
        "location": "Eugene, Oregon",
        "majors": ["Political Science"],
        "dates": "September 2003 - June 2007",
        "url": "http://uoregon.edu/"
    }],
    "onlineCourses": [{
        "title": "Front End Developer Nanodegree",
        "name": "Udacity",
        "date": "March 2016 - Present",
        "url": "https://www.udacity.com/"
    }, {
        "title": "Front End Career Path",
        "name": "Thinkful",
        "dates": "December 2015 - March 2016",
        "url": "https://www.thinkful.com/"
    }]
};

education.display = function(){
	for (school in education.schools){
		var formattedEducationName = HTMLschoolName.replace("%data%", education.schools[school].name).replace("#", education.schools[school].url);
		var formattedEducationLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
		var formattedEducationMajor = HTMLschoolDegree.replace("%data%", education.schools[school].majors);
		var formattedEducationDates = HTMLschoolDates.replace("%data%", education.schools[school].date);

		$("#education").append(HTMLschoolStart);
		$(".education-entry:last").append(formattedEducationName + formattedEducationLocation + formattedEducationMajor + formattedEducationDates + "<br>");
	}
		
	$("#education").append("<br>" + HTMLonlineClasses);

	for (online in education.online){
		var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[online].title);
		var formattedOnlineName = HTMLonlineSchool.replace("%data%", education.onlineCourses[online].name);
		var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[online].dates);
		var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[online].url);

		$("#education").append(HTMLschoolStart);
		$(".education-entry:last").append(formattedOnlineTitle + formattedOnlineName);
		$(".education-entry:last").append(formattedOnlineDates);
		$(".education-entry:last").append(formattedOnlineURL + "<hr>");
	}
	
}

education.display();

/* MAP LOCATION */

$("#mapDiv").append(googleMap);
