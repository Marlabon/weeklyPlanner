<template>
  <header>
    <h1>Your <span class="logo">Weekly</span> Planner</h1>
  </header>
  <main>
    <section class="wrapper-userInput">
      <div>
        <h2>Set day and name for task</h2>
        <input type="radio" id="Monday" value="Monday" v-model="picked" />
        <label for="Monday">Monday</label>
        <input type="radio" id="Tuesday" value="Tuesday" v-model="picked" />
        <label for="Tuesday">Tuesday</label>
        <input
          type="radio"
          id="Wednesday"
          value="Wednesday"
          v-model="picked"
        />
        <label for="Wednesday">Wednesday</label>
        <input type="radio" id="Thursday" value="Thursday" v-model="picked" />
        <label for="Thursday">Thursday</label>
        <input type="radio" id="Friday" value="Friday" v-model="picked" />
        <label for="Friday">Friday</label>
        <div class="wrapper-setTask">
          <label for="inputTasks">Type in your task:</label>
          <input type="text" id="inputTasks" v-model="enteredTask" />
          <button class="btn-addTask" @click="addTask">Add Task</button>
          <button class="btn-deleteWeek" @click="deleteAllTaskForWeek">
            Clear Week
          </button>
          <p>You typed: {{picked}} - {{logTask}}</p>
        </div>
      </div>
    </section>
    <section class="wrapper-taskList">
      <h2>
        Monday
        <img
          class="delete-day-icon"
          src="./assets/remove.svg"
          alt="Delete all tasks in Monday"
          @click="removeAllTasksMonday"
        />
      </h2>
      <p v-if="monday.length === 0">Feels empty here, no tasks added!</p>
      <ul>
        <!-- Task Component -->
      </ul>
    </section>
    <section class="wrapper-taskList">
      <h2>
        Tuesday
        <img
          class="delete-day-icon"
          src="./assets/remove.svg"
          alt="Delete all tasks in Tuesday"
          @click="removeAllTasksTuesday"
        />
      </h2>
      <p v-if="tuesday.length === 0">Feels empty here, no tasks added!</p>
      <ul>
        <!-- Task Component -->
      </ul>
    </section>
    <section class="wrapper-taskList">
      <h2>
        Wednesday
        <img
          class="delete-day-icon"
          src="./assets/remove.svg"
          alt="Delete all tasks in Wednesday"
          @click="removeAllTasksWednesday"
        />
      </h2>
      <p v-if="wednesday.length === 0">Feels empty here, no tasks added!</p>
      <ul>
        <!-- Task Component -->
      </ul>
    </section>
    <section class="wrapper-taskList">
      <h2>
        Thursday
        <img
          class="delete-day-icon"
          src="./assets/remove.svg"
          alt="Delete all tasks in Thursday"
          @click="removeAllTasksThursday"
        />
      </h2>
      <p v-if="thursday.length === 0">Feels empty here, no tasks added!</p>
      <ul>
        <!-- Task Component -->
      </ul>
    </section>
    <section class="wrapper-taskList">
      <h2>
        Friday
        <img
          class="delete-day-icon"
          src="./assets/remove.svg"
          alt="Delete all tasks in Friday"
          @click="removeAllTasksFriday"
        />
      </h2>
      <p v-if="friday.length === 0">Feels empty here, no tasks added!</p>
      <ul>
        <!-- Task Component -->
      </ul>
    </section>
  </main>
  <footer>
    <p>Created by Alexander Weinberger</p>
    <p>
      Contact:
      <a href="mailto:alexanderweinberger@gmx.at">alexanderweinberger@gmx.at</a>
    </p>
  </footer>
</template>

<script>
export default {
  data(){
    return {
      enteredTask: '',
            logTask: '',
            picked: '',
            checked: false,
            monday: [],
            tuesday: [],
            wednesday: [],
            thursday: [],
            friday: [],
    }
  },
  methods:{
        addTask(){
            if(this.picked === 'Monday'){
                this.monday.push(this.enteredTask);
            }else if(this.picked === 'Tuesday'){
                this.tuesday.push(this.enteredTask);
            }else if(this.picked === 'Wednesday'){
                this.wednesday.push(this.enteredTask);
            }else if(this.picked === 'Thursday'){
                this.thursday.push(this.enteredTask);
            }else if(this.picked === 'Friday'){
                this.friday.push(this.enteredTask);
            }
            this.logTask = this.enteredTask;
            this.enteredTask = '';
        },
        deleteAllTaskForWeek(){
            this.monday = [];
            this.tuesday = [];
            this.wednesday = [];
            this.thursday = [];
            this.friday = [];
        },
        removeTaskMonday(index){
            this.monday.splice(index,1);
        },
        removeAllTasksMonday(){
            this.monday = [];
        },
        removeTaskTuesday(index){
            this.tuesday.splice(index,1);
        },
        removeAllTasksTuesday(){
            this.tuesday = [];
        },
        removeTaskWednesday(index){
            this.wednesday.splice(index, 1);
        },
        removeAllTasksWednesday(){
            this.wednesday = [];
        },
        removeTaskThursday(index){
            this.thursday.splice(index, 1);
        },
        removeAllTasksThursday(){
            this.thursday = [];
        },
        removeTaskFriday(index){
            this.friday.splice(index, 1);
        },
        removeAllTasksFriday(){
            this.friday = [];
        },
        taskDone(){
            this.checked = !this.checked;
        }
    },
    computed:{
        taskDoneStyleObject(){
            return{
                taskDone: this.checked
            }
        }
    }
  
}
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Pacifico&family=Scope+One&display=swap');

body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Scope One", serif;
}
header {
  display: flex;
  justify-content: center;
}
.logo{
  color: #53B3E3;
  font-family: 'Pacifico', cursive;
}
main {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
.wrapper-userInput {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
}
.wrapper-userInput h2 {
  text-align: center;
}
.wrapper-userInput div {
  padding: 10px;
}
.wrapper-setTask label {
  display: block;
}
.btn-addTask {
  border: none;
  color: white;
  background-color: #53B3E3;
  border-radius: 10px;
  padding: 5px;
  margin: 0 10px 0 10px;
}
.btn-deleteWeek{
  border: none;
  color: white;
  background-color: #f44336;
  border-radius: 10px;
  padding: 5px;
}
.wrapper-taskList {
  /* Overflow possibility! */
  min-width: 150px;
  /* max-width: 150px; */
  margin-bottom: 20px;
  padding: 10px;
}
.wrapper-taskList h2 {
  text-align: center;
}
.delete-day-icon{
  width: 25px;
  height: 25px;
  vertical-align: middle;
}
.wrapper-taskList p {
  text-align: center;
}
.wrapper-taskList li {
  text-align: center;
  padding: 5px;
  margin-bottom: 10px;
}
.wrapper-taskList button {
  background-color: #53B3E3;
  border: solid 1px #53B3E3;
  margin-left: 20px;
}
.wrapper-taskList ul {
  padding-inline-start: 0;
}
.wrapper-task-input {
  display: flex;
  justify-content: space-between;
  border-bottom: dashed white 2px;
  padding-bottom: 10px;
}
.delete-task-icon{
  width: 25px;
  height: 25px;
  padding: 5px 5px 0px 0;
}
.check-checkbox-icon{
  width: 30px;
  height: 30px;
  padding: 5px 0 0 5px;
}
.task-style {
  list-style-type: none;
  border-radius: 10px;
  background-color: #53B3E3;
}
.taskDone {
  color: white;
  opacity: 0.60;
}
footer p {
  text-align: center;
}

</style>
