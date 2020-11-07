const app = Vue.createApp({
    data(){
        return{
            enteredTask: '',
            logTask: '',
            picked: '',
            monday: [],
            tuesday: [],
            wednesday: [],
            thursday: [],
            friday: []
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
        removeTaskMonday(index){
            this.monday.splice(index,1);
        },
        removeTaskTuesday(index){
            this.tuesday.splice(index,1);
        },
        removeTaskWednesday(index){
            this.wednesday.splice(index, 1);
        },
        removeTaskThursday(index){
            this.thursday.splice(index, 1);
        },
        removeTaskFriday(index){
            this.friday.splice(index, 1);
        }
    }
})
app.mount('#weeklyPlaner');