
const tasks = document.querySelectorAll(".task input");
const count = document.getElementById("count");
const bar = document.getElementById("bar");

function updateProgress() {
    let completed = 0;

    tasks.forEach(function(task) {
        task.closest(".task").classList.toggle("done", task.checked);
        if (task.checked) completed++;
    });

    count.textContent = completed + " / " + tasks.length;
    bar.style.width = (completed / tasks.length * 100) + "%";

    if (completed === tasks.length) {
        count.textContent = "Completed!";
    }
}

tasks.forEach(function(task) {
    task.addEventListener("change", updateProgress);
});

function openLink(site) {
    const links = {
        github: "https://github.com/",
        linkedin: "https://www.linkedin.com/"
    };

    window.open(links[site], "_blank", "noopener,noreferrer");
}

updateProgress();
