const app = Vue.createApp({
    data(){
        return{
            enteredTask: '',
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
            
        }
    }
})
app.mount('#weeklyPlaner');