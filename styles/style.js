// Navbar color button for color changing
document.getElementById("btn-color-changer").addEventListener("click", function () {
    const colors = ["#FF5733", "#33FF57", "#3357FF", "#FFD700", "#8A2BE2"];
    let body = document.body;
    navbar.classList.remove("bg-gray-100");
    let randomColor = Math.floor(Math.random() * colors.length);
    body.style.backgroundColor = colors[randomColor];
});


// showing current date and time
const dateTimeDay = new Date();
document.getElementById("date-time").innerHTML = dateTimeDay.toDateString();



// completed buttons functionality
const buttons = document.querySelectorAll(".btn-complete");
for (const button of buttons) {
    button.addEventListener("click", function(event) {
        const clickedButton = event.target;
        const taskContainer = clickedButton.closest('.task-container');
        const taskTitle = taskContainer.querySelector('h2.task-box').textContent;       
        alert("Board Updated Successfully");      
        const taskAssignNumber = document.getElementById("task-assign-num");
        const navbarNumber = document.getElementById("navbar-num");
        const activityLog = document.getElementById("activity-log");
        let currentTasks = parseInt(taskAssignNumber.textContent);
        let currentNavbarNumber = parseInt(navbarNumber.textContent);
        
        if (currentTasks > 0) {  
            taskAssignNumber.textContent = currentTasks - 1;
            navbarNumber.textContent = currentNavbarNumber + 1;

            const activityLogEntry = document.createElement("p");
            activityLogEntry.classList.add(
                "bg-white", "p-4", "rounded-md",
                "text-sm", "border", "border-gray-300", "mb-2"
            );
            
            const timestamp = new Date().toLocaleTimeString();
            activityLogEntry.textContent = `You have Completed The Task ${taskTitle} at ${timestamp}`;
            activityLog.appendChild(activityLogEntry);
            clickedButton.disabled = true;

            const updatedTasks = parseInt(taskAssignNumber.textContent);
                if (updatedTasks === 0) {
                    alert("Congrats!!! You have completed all the current task");
                }
        }    
            
    });
    const clearHistoryButton = document.getElementById("btn-clear-history");
    if (clearHistoryButton) {
        clearHistoryButton.addEventListener("click", function() {
            const activityLog = document.getElementById("activity-log");
            activityLog.innerHTML = "";
        });
    }
}


// go to blog page
document.getElementById("date-section").addEventListener("click", function(){
     window.location.href = "./blog.html";
})
