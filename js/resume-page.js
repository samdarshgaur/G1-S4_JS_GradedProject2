const nextBtn = document.querySelector(".next-btn");
const previousBtn = document.querySelector(".previous-btn");
const searchInput = document.querySelector("input");

let idx = 0;

const useData = data => {

    if (idx === 0) {
        previousBtn.style.visibility = "hidden";
    } else {
        previousBtn.style.visibility = "visible";
    }

    if (idx === data.length - 1) {
        nextBtn.style.visibility = "hidden";
    } else {
        nextBtn.style.visibility = "visible";
    }

    const {
        basics: { name, AppliedFor, email, phone, profiles: { network, url } },
        skills: { keywords },
        interests: { hobbies },
        work: { ['Company Name']: companyName, Position, ['Start Date']: startDate, ['End Date']: endDate, Summary },
        projects: { description },
        education: {
            ['High School']: { institute: highSchoolInstitute, cgpa: highSchoolCgpa },
            ['Senior Secondary']: { institute: seniorSecInstitute, cgpa: seniorSecCgpa },
            UG: { institute: ugInstitute, course: ugCourse, ['Start Date']: ugStartDate, ['End Date']: ugEndDate, cgpa: ugCgpa }
        },
        Internship: { ['Company Name']: internCompanyName, Position: internPosition, ['Start Date']: internStartDate, ['End Date']: internEndDate, Summary: internSummary },
        achievements: { Summary: achievementSummary }
    } = data[idx];

    // header-info
    document.querySelector(".full-name").textContent = name;
    document.querySelector(".applied-for").textContent = AppliedFor;

    // contact-info
    document.querySelector(".phone").textContent = phone;
    document.querySelector(".email").textContent = email;
    document.querySelector(".network").setAttribute("href", url);
    document.querySelector(".network").textContent = network;

    // technical-info
    for (let keyword of keywords) {
        const p = document.createElement("p");
        p.textContent = keyword;
        document.querySelector(".technical-info").appendChild(p);
    }

    // hobbies-info
    for (let hobby of hobbies) {
        const p = document.createElement("p");
        p.textContent = hobby;
        document.querySelector(".hobbies-info").appendChild(p);
    }

    // previous-company-info
    document.querySelector(".company-name").textContent = companyName;
    document.querySelector(".position").textContent = Position;
    document.querySelector(".start-date").textContent = startDate;
    document.querySelector(".end-date").textContent = endDate;
    document.querySelector(".summary").textContent = Summary;

    // project-info
    document.querySelector(".project-description").textContent = description;

    // ug-info
    document.querySelector(".ug-institute").textContent = ugInstitute;
    document.querySelector(".ug-start-date").textContent = ugStartDate;
    document.querySelector(".ug-end-date").textContent = ugEndDate;
    document.querySelector(".ug-course").textContent = ugCourse;
    document.querySelector(".ug-cgpa").textContent = ugCgpa;

    // senior-sec-info
    document.querySelector(".pu-institute").textContent = seniorSecInstitute;
    document.querySelector(".pu-cgpa").textContent = seniorSecCgpa;

    // high-school-info
    document.querySelector(".high-school-institute").textContent = highSchoolInstitute;
    document.querySelector(".high-school-cgpa").textContent = highSchoolCgpa;

    // internship-info
    document.querySelector(".internship-company").textContent = internCompanyName;
    document.querySelector(".internship-position").textContent = internPosition;
    document.querySelector(".internship-start-date").textContent = internStartDate;
    document.querySelector(".internship-end-date").textContent = internEndDate;
    document.querySelector(".internship-summary").textContent = internSummary;

    // achievement-info
    document.querySelector(".achievement").textContent = achievementSummary[0];
};

const fetchData = () => {
    fetch("../data/Data.json")
        .then(response => response.json())
        .then(data => useData(data.resume));
};

// const filterData = (data) => {
//     idx = 0;
//     const filteredData = data.filter((application) => {
//         return application.basics.AppliedFor.toLowerCase().indexOf(searchInput.value) !== -1;
//     });
//     if(filteredData.length > 0) {
//         useData(filteredData);
//     };
// };

// const useFilterData = () => {
//     fetch("../data/Data.json")
//         .then(response => response.json())
//         .then(data => filterData(data.resume));
// };

const helperFunction = () => {
    const skillsCollection = document.querySelector(".technical-info").querySelectorAll("p");
    const hobbiesCollection = document.querySelector(".hobbies-info").querySelectorAll("p");
    skillsCollection.forEach((el) => el.remove());
    hobbiesCollection.forEach((el) => el.remove());
};

const nextHandler = () => {
    idx++;
    helperFunction();
    fetchData();
};

const previousHandler = () => {
    idx--;
    helperFunction();
    fetchData();
};

previousBtn.style.visibility = "hidden";

fetchData();

nextBtn.addEventListener("click", nextHandler);
previousBtn.addEventListener("click", previousHandler);