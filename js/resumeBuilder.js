var bio = {
	"name" : "Andi Peintner",
	"role" : "Web Developer",
	"welcomeMessage" : "Hello there, nice to meet you!",
	"contacts" : {
		"email" : "andreapeintner@gmail.com",
		"location" : "Bruneck",
		"github" : "https://github.com/andreapeintner/",
		"homepage" : "https://www.shio-software.com"
	},
	"biopic" : "images/me.jpg",
	"skills" : ["teaching", " sports", " building web pages", " fun"]
};

bio.display = function() {

	var formattedName = HTMLheaderName.replace("%data%", bio.name);
	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
	var	formattedpictureURL = HTMLbioPic.replace("%data%", bio.biopic);

	$("#header").append(formattedName);
	$("#header").append(formattedRole);
	$("#header").append(formattedpictureURL);



	if(bio.skills.length > 0) {
		$("#header").append(HTMLskillsStart);
		var formattedSkills = HTMLskills.replace("%data%", bio.skills);
		$("#skills").append(formattedSkills);
	}

	for(contact in bio.contacts) {
		var formattedEmail = HTMLemail.replace("%data%",bio.contacts.email);
		var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
		var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
		var formattedHP = HTMLcontactGeneric.replace("%contact%","Homepage").replace("%data%", bio.contacts.homepage);
		var formattedFooterContacs = formattedEmail + formattedLocation + formattedLocation + formattedGithub + formattedHP;	
	};
	$("#footerContacts").append(formattedFooterContacs);
};
bio.display();



var work = {
	"jobs": [
		{
			"employer" : "Self-employed",
			"title" : "Web Developer",
			"location" : "Renon",
			"dates" : "2015 - 2017",
			"description" : "Creating webpages...Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
		},
		{
			"employer" : "State",
			"title" : "Teacher",
			"location" : "Bolzano",
			"dates" : "2016 - 2017",
			"description" : "Teaching maths and sports in primary school. The kids are 7 years old...Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
		}
	]			
}



work.display = function() {
		for(job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);
		var formattedEmployer =
			HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedJobtitle =
			HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedJobLocation =
			HTMLworkLocation.replace("%data%", work.jobs[job].location);
		var	formattedJobDates = 
			HTMLworkDates.replace("%data%", work.jobs[job].dates);
		var formattedJobDescription =
			HTMLworkDescription.replace("%data%", work.jobs[job].description);		
		var formattedworkExpereince =
			formattedEmployer + formattedJobtitle + formattedJobLocation + formattedJobDates + formattedJobDescription;	
		$(".work-entry:last").append(formattedworkExpereince);	
	}
}
work.display();

var projects = {
	"projects" : [
		{
			"title" : "Birgit Engl - Massage & Pilates",
			"dates" : "2016 - 2017",
			"description" : "Wepage, Flyers, Brochure,...",
			"image": "images/birgit.png"
		},
		{
			"title" : "Maths in our environment",
			"dates" : "2016",
			"description" : "Kids explore theyr nearby and look for maths.",
			"image": "images/math.jpg"
		}
	]
}


projects.display = function() {
	for(project in projects.projects) {
		$("#projects").append(HTMLprojectStart);
		var formattedProjectTitle =
		HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		var formattedProjectDates =
		HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		var formattedProjectDescription =
		HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		var formattedProjectImage =
		HTMLprojectImage.replace("%data%", projects.projects[project].image);	
		var formattedProjects =
		formattedProjectTitle + formattedProjectDates + formattedProjectDescription + formattedProjectImage;
		$(".project-entry:last").append(formattedProjects);
	}
}
projects.display();

var education = {
	"schools": [
		{
			"name" : "TU",
			"location" : "Graz",
			"degree" : "BS",
			"dates" : "till 2011",
			"url": "http://tugraz.at",
			"majors" : ["Architeture", "Engeneer"]
		},
		{
			"name" : "University of Bolzano",
			"location" : "Bolzano",
			"degree" : "Masters",
			"dates" : "2011 - 2016",
			"url": "https://www.unibz.it",
			"majors" : ["Primary school education", "Developmental psychology"]
		},
		{
			"name" : "EC Vancouver",
			"location" : "Vancouver",
			"degree" : "Language Certificate",
			"dates" : "2013",
			"url": "http://www.ecenglish.com/en/school-locations/canada/learn-english-in-vancouver",
			"majors" : ["English - Upper Intermediate 3", "Speaking and Writing"]
		}
	],
	"onlineCourses" : [
		{
			"title" : "Web Development",
			"school" : "Coursera",
			"dates" : "2015",
			"url" : "https://www.coursera.org"
		},
		{
			"title" : "Java Script",
			"school" : "Udacity",
			"dates" : "2017",
			"url" : "https://www.udacity.com"
		}
	]
}

education.display = function() {
	$("#education").append(HTMLschoolStart);
	for(school in education.schools) {
		
		var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
		var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
		var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
		var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
		var formattedSchoolMajors = HTMLschoolMajor.replace("%data%", education.schools[school].majors);
		var formattedSchools = formattedSchoolName + " " + formattedSchoolLocation + " " +formattedSchoolDegree + " " +formattedSchoolDates + " " +formattedSchoolMajors + " " + education.schools[school].url;
		$(".education-entry:last").append(formattedSchools);

	};
	$(".education-entry:last").append(HTMLonlineClasses);
	for(onlineCourse in education.onlineCourses) {
		var formattedOnlinecoursesTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[onlineCourse].title);
		var formattedOnlinecoursesSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[onlineCourse].school);
		var formattedOnlinecoursesDates = HTMLonlineDates.replace("%data%", education.onlineCourses[onlineCourse].dates);
		var formattedOnlinecoursesUrl = HTMLonlineURL.replace("%data%", education.onlineCourses[onlineCourse].url);
		var formattedOnlineCourses = formattedOnlinecoursesTitle + " " + formattedOnlinecoursesSchool + " " + formattedOnlinecoursesDates + " " + formattedOnlinecoursesUrl;
		$(".education-entry:last").append(formattedOnlineCourses);

	}
	
};
education.display();


$(document).click(function(loc) {
	var x = loc.pageX;
	var y = loc.pageY;
	logClicks(x,y);
});






$("#main").append(internationalizeButton);
function inName() {
		var	internationalizeName = bio.name.split(" ");
		internationalizeName[0] = internationalizeName[0].slice(0,1).toUpperCase() + internationalizeName[0].slice(1).toLowerCase();
		internationalizeName[1] = internationalizeName[1].toUpperCase();
		inName = internationalizeName[0] + " " + internationalizeName[1];
		return inName;
};

$("#mapDiv").append(googleMap);

function getRelationship(x, y) {
    // Your code goes here!
    var rel = getRelationship("this");
};



// var formattedEducationName =
// 	HTMLschoolName.replace("%data%", education.name);
// var	formattedEducationLocation =
// 	HTMLschoolLocation.replace("%data%", education.location);
// var formattedEducationDegree =
// 	HTMLschoolDegree.replace("%data%", education.degree);
// var	formattedEducationYears =
// 	HTMLschoolDates.replace("%data%", education.years);

// //var formattedEducationMajors =
// //	HTMLschoolMajor.replace("%data%", education.majors[0]);

// $("#main").append(formattedEducationName);
// $("#main").append(formattedEducationLocation);
// $("#main").append(formattedEducationDegree);
// $("#main").append(formattedEducationYears);
// $("#main").append(education.url);
// // $("#main").append(formattedEducationMajors);



