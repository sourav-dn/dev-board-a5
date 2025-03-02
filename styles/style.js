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



// completed buttons 
const buttons = document.querySelectorAll(".btn-complete");

for (const button of buttons) {
    button.addEventListener("click", function(event) {
        const clickedButton = event.target;
        const taskContainer = clickedButton.closest('.task-container');
        const taskTitle = taskContainer.querySelector('h2.task-box').textContent;       
        alert("Board Updated Successfully");

        
        const taskAssignNumber = document.querySelector("#task-assign-num");
        const navbarNumber = document.querySelector("#navbar-num");
        const activityLog = document.querySelector("#activity-log");
        let currentTasks = parseInt(taskAssignNumber.textContent);
        let currentNavbarNumber = parseInt(navbarNumber.textContent);
        
        if (currentTasks > 0) {  
            taskAssignNumber.textContent = currentTasks - 1;
            navbarNumber.textContent = currentNavbarNumber + 1;

            
            const timestamp = new Date().toLocaleTimeString();
            const logEntry = `<p>You have Completed The Task ${taskTitle} at ${timestamp}</p>`;
            const currentEntry = activityLog.innerHTML;
            activityLog.innerHTML = currentEntry + logEntry;
            clickedButton.disabled = true;

            const updatedTasks = parseInt(taskAssignNumber.textContent);
                if (updatedTasks === 0) {
                    alert("Congrats!!! You have completed all the current tasks");
                }
        }    
            
    });
    const clearHistoryButton = document.querySelector("#btn-clear-history");
    if (clearHistoryButton) {
        clearHistoryButton.addEventListener("click", function() {
            const activityLog = document.querySelector("#activity-log");
            activityLog.innerHTML = "";
        });
    }
}


// go to blog page
document.getElementById("date-section").addEventListener("click", function(){
     window.location.href = "./blog.html";
})
