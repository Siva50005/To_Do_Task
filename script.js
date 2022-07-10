var clickChecker = new Array(50).fill(0);
var count = 0;



document.getElementById('push').onclick = function(){
    if (document.getElementById('task-title').value.length == 0){
        alert("Please Enter a title of the task!");
    }
    if (document.getElementById('task-desc').value.length == 0){
        alert("Please Enter Description!");
    }

    else{
        var taskTitle = document.getElementById('task-title').value;
        var taskDesc = document.getElementById('task-desc').value;
        var deadline = document.getElementById('deadlineDate').value;
        var deadlineTime = document.getElementById('deadlineTime').value;
        count++;
        document.getElementById("counter-var").innerHTML = count;

        document.querySelector('.main-tasks').innerHTML += `
            <div class="task">
                <span class="taskname"> 
                    ${taskTitle} <br>
                </span>
                <span class="hidden-details">
                    Description: ${taskDesc} <br>
                    Deadline: ${deadline} ${deadlineTime}
                </span>
                <div class="button-area">
                    <button class="delete">
                        <i class="fa-solid fa-trash-can"></i>
                    </button>
                    <button class="checkmark">
                        <i class="fa fa-check"></i>
                    </button>
                    <button class="closedet" style="display: none;">
                        <i class="fa-solid fa-xmark"></i>
                    </button>
                </div>
            </div>
        `;


        var current_tasks = document.querySelectorAll(".taskname");
        var hidden = document.querySelectorAll(".hidden-details");
        var delVar = document.querySelectorAll(".delete");
        var checkerVar = document.querySelectorAll(".checkmark")
        var hide = document.querySelectorAll(".closedet")

        for (var i = 0; i < current_tasks.length; i++) {
            current_tasks[i].onclick = function () {
                //this.parentNode.querySelector(".hidden-details").classList.toggle(".detailview");
                //hidden[i].classList.toggle('detailview');
                //this.style = "height: 200px"
                this.parentNode.querySelector(".hidden-details").style = "display: block";
                this.parentNode.querySelector(".closedet").style = "display: block";
            }
        }

        for (var i = 0; i < hide.length; i++) {
            hide[i].onclick = function () {
                //this.parentNode.parentNode.style = "height: 50px"
                this.parentNode.parentNode.querySelector(".hidden-details").style = "display: none";
                this.style = "display: none";
            }
        }

        for(var i=0; i<delVar.length; i++){
            delVar[i].onclick = function () {
                this.parentNode.parentNode.remove();
                if (clickChecker[i] == 0) {
                    count--;
                    document.getElementById("counter-var").innerHTML = count;
                }
            }
        }

        for (var i = 0; i < checkerVar.length; i++) {
            checkerVar[i].onclick = function () {
                if (clickChecker[i] == 0){
                    this.parentNode.parentNode.querySelector(".taskname").style = "text-decoration: line-through; color: green";
                    clickChecker[i] = 1;
                    count--;
                    document.getElementById("counter-var").innerHTML = count;
                }
                else if(clickChecker[i] == 1){
                    this.parentNode.parentNode.querySelector(".taskname").style = "text-decoration: none;";
                    clickChecker[i] = 0;
                    count++;
                    document.getElementById("counter-var").innerHTML = count;
                }
                
            }
        }


        document.getElementById('task-title').value = "";
        document.getElementById('task-desc').value = "";
        document.getElementById('deadlineDate').value = "";
        document.getElementById('deadlineTime').value = "";

    }

}

