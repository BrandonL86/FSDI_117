let projects;

fetch('./data/projects.json')
    .then(response => response.json())
    .then(json => {
        projects = json;

        const projectsListElement = document.getElementById("projects-list");

        const projectsSize = projects.length;

        for (let i = 0; i < projectsSize; i++) {
            projectsListElement.innerHTML += `

            <div class="project-card">
                <a href="${projects[i].repository}" target="blank">
                    <img src="${projects[i].img}">

                    <p>${projects[i].name}</p>
                    <p>${projects[i].description}</p>
                    <p>${projects[i].year}</p>

                    <div id="technology-${i}" class="technologies center">
                        
                    </div>
                </a>
            </div>

            `;

            const technologiesElement = document.getElementById(`technology-${i}`);
            const technologiesSize = projects[i].technologies.length;

            for (let j = 0; j < technologiesSize; j++) {
                technologiesElement.innerHTML += `
                <label>${projects[i].technologies[j]}</label>
                
                
                `

            }



        }

    });

    let experiences;

    fetch('./data/experiences.json')
    .then(response => response.json())
    .then(json => {

        experiences = json;

        const experiencesListElement = document.getElementById("experience-list");

        const experiencesSize = experiences.length;

        for (let i = 0; i < experiencesSize; i++) {

            experiencesListElement.innerHTML += `
            <div class="experience-card">
                <p>${experiences[i].entity}</p>
                <p>${experiences[i].title}</p>
                <p>${experiences[i].description}</p>
                <p>${experiences[i].period}</p>

                <div id="technology-skill-${i}" class="technologies center">
                    <label> Technology </label>
                    <label> Or </label>
                    <label> Skill </label>
                </div>
            </div>
            `;

            const technologiesSkillsElement = document.getElementById(`technology-skill-${i}`);
            const technologiesSkillsSize = experiences[i].technologiesSkills.length;

            for (let j = 0; j < technologiesSkillsSize; j++) {
                technologiesSkillsElement.innerHTML += `
                <label>${experiences[i].technologiesSkills[j]}</label>
                `;
            }
        }

    });