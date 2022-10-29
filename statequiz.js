const states = [
    {state: "Alabama", 
    cities: ["Birmingham", "Montogomery", "Mobile", "Huntsville", "Tuscaloosa"]},
    {state: "Alaska",
    cities: ["Anchorage", "Juneau", "Fairbanks", "Sitka", "Ketchikan"]},
    {state: "Arizona",
    cities: ["Phoenix", "Tucson", "Mesa", "Glendale", "Scottsdale"]},
    {state: "Arkansas",
    cities: ["Little Rock", "Fort Smith", "North Little Rock", "Fayetteville", "Jonesboro"]},
    {state: "California",
    cities: ["Los Angeles", "San Diego", "San Jose", "San Francisco", "Long Beach"]},
    {state: "Colorado",
    cities: ["Denver", "Colorado Springs", "Aurora", "Lakewood", "Fort Collins"]},
    {state: "Connecticut",
    cities: ["Bridgeport", "New Haven", "Hartford", "Stamford", "Waterbury"]},
    {state: "Delaware",
    cities: ["Wilmington", "Dover", "Newark", "Milford", "Seaford"]},
    {state: "Florida",
    cities: ["Jacksonville", "Miami", "Tampa", "St. Petersburg", "Hialeah"]},
    {state: "Georgia",
    cities: ["Atlanta", "Augusta-Richmond County", "Columbus", "Savannah", "Athens-Clarke County"]},
    {state: "Hawaii",
    cities: ["Honolulu", "Hilo", "Kailua", "Kaneohe", "Waipahu"]},
    {state: "Idaho",
    cities: ["Boise", "Nampa", "Pocatello", "Idaho Falls", "Meridian"]},
    {state: "Illinois",
    cities: ["Chicago", "Rockford", "Aurora", "Naperville", "Peoria"]},
    {state: "Indiana",
    cities: ["Indianapolis", "Fort Wayne", "Evansville", "South Bend", "Gary"]},
    {state: "Iowa",
    cities: ["Des Moines", "Cedar Rapids", "Davenport", "Sioux City", "Waterloo"]},
    {state: "Kansas",
    cities: ["Wichita", "Overland Park", "Kansas City", "Topeka", "Olathe"]},
    {state: "Kentucky",
    cities: ["Lexington-Fayette", "Louisville", "Owensboro", "Bowling Green", "Covington"]},
    {state: "Louisiana",
    cities: ["New Orleans", "Baton Rouge", "Shreveport", "Lafayette", "Lake Charles"]},
    {state: "Maine",
    cities: ["Portland", "Lewiston", "Bangor", "South Portland", "Auburn"]},
    {state: "Maryland",
    cities: ["Baltimore", "Frederick", "Gaithersburg", "Bowie", "Rockville"]},
    {state: "Massachusetts",
    cities: ["Boston", "Worcester", "Springfield", "Lowell", "Cambridge"]},
    {state: "Michigan",
    cities: ["Detroit", "Grand Rapids", "Warren", "Flint", "Sterling Heights"]},
    {state: "Minnesota",
    cities: ["Minneapolis", "St. Paul", "Duluth", "Rochester", "Bloomington"]},
    {state: "Mississippi",
    cities: ["Jackson", "Gulfport", "Biloxi", "Hattiesburg", "Greenville"]},
    {state: "Missouri",
    cities: ["Kansas City", "St. Louis", "Springfield", "Independence", "Columbia"]},
    {state: "Montana",
    cities: ["Billings", "Missoula", "Great Falls", "Butte-Silver Bow", "Bozeman"]},
    {state: "Nebraska",
    cities: ["Omaha", "Lincoln", "Bellevue", "Grand Island", "Kearney"]},
    {state: "Nevada",
    cities: ["Las Vegas", "Reno", "Henderson", "North Las Vegas", "Sparks"]},
    {state: "New Hampshire",
    cities: ["Manchester", "Nashua", "Concord", "Derry", "Rochester"]},
    {state: "New Jersey",
    cities: ["Newark", "Jersey City", "Paterson", "Elizabeth", "Edison"]},
    {state: "New Mexico",
    cities: ["Albuquerque", "Las Cruces", "Santa Fe", "Rio Rancho", "Roswell"]},
    {state: "New York",
    cities: ["New York City", "Buffalo", "Rochester", "Yonkers", "Syracuse"]},
    {state: "North Carolina",
    cities: ["Charlotte", "Raleigh", "Greensboro", "Durham", "Winston-Salem"]},
    {state: "North Dakota",
    cities: ["Fargo", "Bismarck", "Grand Forks", "Minot", "Mandan"]},
    {state: "Ohio",
    cities: ["Columbus", "Cleveland", "Cincinnati", "Toledo", "Akron"]},
    {state: "Oklahoma",
    cities: ["Oklahoma City", "Tulsa", "Norman", "Lawton", "Broken Arrow"]},
    {state: "Oregon",
    cities: ["Portland", "Eugene", "Salem", "Gresham", "Beaverton"]},
    {state: "Pennsylvania",
    cities: ["Philadelphia", "Pittsburgh", "Allentown", "Erie", "Upper Darby"]},
    {state: "Rhode Island",
    cities: ["Providence", "Warwick", "Cranston", "Pawtucket", "East Providence"]},
    {state: "South Carolina",
    cities: ["Columbia", "Charleston", "North Charleston", "Greenville", "Rock Hill"]},
    {state: "South Dakota",
    cities: ["Sioux Falls", "Rapid City", "Aberdeen", "Watertown", "Brookings"]},
    {state: "Tennessee",
    cities: ["Memphis", "Nashville", "Knoxville", "Chattanooga", "Clarksville"]},
    {state: "Texas",
    cities: ["Houston", "Dallas", "San Antonio", "Austin", "El Paso"]},
    {state: "Utah",
    cities: ["Salt Lake City", "West Valley City", "Provo", "Sandy", "Orem"]},
    {state: "Vermont",
    cities: ["Burlington", "Essex", "Colchester", "South Burlington", "Bennington"]},
    {state: "Virginia",
    cities: ["Virginia Beach", "Norfolk", "Chesapeake", "Richmond", "Newport News"]},
    {state: "Washington",
    cities: ["Seattle", "Spokane", "Tacoma", "Vancouver", "Bellevue"]},
    {state: "West Virginia",
    cities: ["Charleston", "Huntington", "Parkersburg", "Wheeling", "Morgantown"]},
    {state: "Wisconsin",
    cities: ["Milwaukee", "Madison", "Green Bay", "Kenosha", "Racine"]},
    {state: "Wyoming",
    cities: ["Cheyenne", "Casper", "Laramie", "Gillette", "Rock Springs"]}
]

const stateSelection = states[Math.floor(Math.random() * states.length)];
const stateQuestion = {
    question: `Which city is in ${stateSelection.state}?`,
    answers: [
        stateSelection.cities[Math.floor(Math.random() * 5)],
        states[Math.floor(Math.random() * states.length)].cities[Math.floor(Math.random() * 5)],
        states[Math.floor(Math.random() * states.length)].cities[Math.floor(Math.random() * 5)],
        states[Math.floor(Math.random() * states.length)].cities[Math.floor(Math.random() * 5)]
    ]
}


const question = document.getElementById('question');
const answer1 = document.getElementById('a');
const answer2 = document.getElementById('b');
const answer3 = document.getElementById('c');
const answer4 = document.getElementById('d');
const buttons = document.getElementById('button-wrapper');

function stateQuiz() {
    const stateSelection = states[Math.floor(Math.random() * states.length)];
    const stateQuestion = {
    question: `Which city is in ${stateSelection.state}?`,
    answers: [
        stateSelection.cities[Math.floor(Math.random() * 5)],
        states[Math.floor(Math.random() * states.length)].cities[Math.floor(Math.random() * 5)],
        states[Math.floor(Math.random() * states.length)].cities[Math.floor(Math.random() * 5)],
        states[Math.floor(Math.random() * states.length)].cities[Math.floor(Math.random() * 5)]
    ]
    }
    
    if (stateQuestion.answers[1] === stateQuestion.answers[2] || stateQuestion.answers[1] === stateQuestion.answers[3]) {
        stateQuestion.answers[1] = states[Math.floor(Math.random() * states.length)].cities[Math.floor(Math.random() * 5)];
    } else if (stateQuestion.answers[2] === stateQuestion.answers[1] || stateQuestion.answers[2] === stateQuestion.answers[3]) {
        stateQuestion.answers[2] = states[Math.floor(Math.random() * states.length)].cities[Math.floor(Math.random() * 5)];
    }

    if (stateSelection.cities.includes(stateQuestion.answers[1])) {
        stateQuestion.answers[1] = states[Math.floor(Math.random() * states.length)].cities[Math.floor(Math.random() * 5)];
    } else if (stateSelection.cities.includes(stateQuestion.answers[2])) {
        stateQuestion.answers[2] = states[Math.floor(Math.random() * states.length)].cities[Math.floor(Math.random() * 5)];
    } else if (stateSelection.cities.includes(stateQuestion.answers[3])) {
        stateQuestion.answers[3] = states[Math.floor(Math.random() * states.length)].cities[Math.floor(Math.random() * 5)];
    }

    question.textContent = stateQuestion.question;
    answer1.textContent = stateQuestion.answers[0];
    answer2.textContent = stateQuestion.answers[1];
    answer3.textContent = stateQuestion.answers[2];
    answer4.textContent = stateQuestion.answers[3];

    for (let i = buttons.children.length; i >= 0; i--) {
        buttons.appendChild(buttons.children[Math.random() * i | 0]);
    }

    answer1.style.background = '#9F5F80';
    answer2.style.background = '#9F5F80';
    answer3.style.background = '#9F5F80';
    answer4.style.background = '#9F5F80';

    answer1.addEventListener('click', updateButton);
    answer2.addEventListener('click', updateButton);
    answer3.addEventListener('click', updateButton);
    answer4.addEventListener('click', updateButton);
}

function updateButton() {
    answer1.style.background = 'linear-gradient(#16f529, #1eb02a)';
    answer2.style.background = '#ff3838';
    answer3.style.background = '#ff3838';
    answer4.style.background = '#ff3838';

    setTimeout(function() { stateQuiz(); }, 2000);
}


stateQuiz();




