const app = Vue.createApp({
    data(){
        return{
            enteredTask: '',
            logTask: '',
            picked: '',
            checked: false,
            monday: [],
            tuesday: [],
            wednesday: [],
            thursday: [],
            friday: [],
            // taskObject:{
            //     belongsToDay: '',
            //     // arrayIndex: null,
            //     taskName: '',
            //     taskDone: false,
            //     checkoutTask(){
            //         this.taskDone = true;
            //     },
            //     deleteTask(){}
            // }
        };
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
})
app.mount('#weeklyPlaner');