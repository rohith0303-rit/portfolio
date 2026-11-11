document.addEventListener("DOMContentLoaded", async () => {
    const projectContainer = document.getElementById("project-container");

    try {
        const response = await fetch("http://localhost:5000/api/projects");
        const projects = await response.json();

        if (projects.length === 0) {
            projectContainer.innerHTML = "<p>No projects found in database yet.</p>";
            return;
        }

        projectContainer.innerHTML = ""; // Clear loader/placeholder

        projects.forEach(project => {
            const projectCard = document.createElement("div");
            projectCard.classList.add("details-container", "color-container");

            projectCard.innerHTML = `
                <div class="article-container">
                    <img src="${project.image}" alt="${project.title}" class="project-img" />
                </div>
                <h2 class="experience-subtitle project-title">${project.title}</h2>
                <p class="project-desc">${project.description}</p>
                <div class="btn-container">
                    <button class="btn btn-color-2 project-btn" onclick="location.href='${project.githubLink}'">
                        GitHub
                    </button>
                    <button class="btn btn-color-2 project-btn" onclick="location.href='${project.liveDemoLink}'">
                        Live Demo
                    </button>
                </div>
            `;
            projectContainer.appendChild(projectCard);
        });
    } catch (error) {
        console.error("Error fetching projects:", error);
        projectContainer.innerHTML = "<p>Failed to load projects from server.</p>";
    }
});