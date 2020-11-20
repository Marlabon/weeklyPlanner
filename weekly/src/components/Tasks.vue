<template>
  <section class="wrapper-taskList">
    <h2>
      Monday
      <img
        class="delete-day-icon"
        src="/assets/pics/remove.svg"
        alt="Delete all tasks in Monday"
        @click="removeAllTasksMonday"
      />
    </h2>
    <p v-if="monday.length === 0">Feels empty here, no tasks added!</p>
    <ul v-else>
      <li
        v-for="(task, index) in monday"
        :key="task"
        class="task-style"
        :class="taskDoneStyleObject"
      >
        <div class="wrapper-task-input">
          <!-- For checking out a task, current issue, all li elements get class="taskDoneStyleObject"  
          <input
            type="checkbox"
            id="checkbox"
            v-model="checked"
            @click="taskDone"
          /> -->
          <img
            @click="taskDone"
            v-if="checked === false"
            class="check-checkbox-icon"
            src="/assets/pics/checkbox.svg"
            alt="unchecked checkbox"
          />
          <img
            @click="taskDone"
            v-else
            class="check-checkbox-icon"
            src="/assets/pics/checkbox-checked.svg"
            alt="checked checkbox"
          />
          <img
            class="delete-task-icon"
            src="/assets/pics/001-close.svg"
            alt="Delete task icon"
            @click="removeTaskMonday(index)"
          />
        </div>
        <p>{{ task }}</p>
      </li>
    </ul>
  </section>
  <section class="wrapper-taskList">
    <h2>
      Tuesday
      <img
        class="delete-day-icon"
        src="/assets/pics/remove.svg"
        alt="Delete all tasks in Tuesday"
        @click="removeAllTasksTuesday"
      />
    </h2>
    <p v-if="tuesday.length === 0">Feels empty here, no tasks added!</p>
    <ul v-else>
      <li
        v-for="(task, index) in tuesday"
        :key="task"
        class="task-style"
        :class="taskDoneStyleObject"
      >
        <div class="wrapper-task-input">
          <img
            @click="taskDone"
            v-if="checked === false"
            class="check-checkbox-icon"
            src="/assets/pics/checkbox.svg"
            alt="unchecked checkbox"
          />
          <img
            @click="taskDone"
            v-else
            class="check-checkbox-icon"
            src="/assets/pics/checkbox-checked.svg"
            alt="checked checkbox"
          />
          <img
            class="delete-task-icon"
            src="/assets/pics/001-close.svg"
            alt="Delete task"
            @click="removeTaskTuesday(index)"
          />
        </div>
        <p>{{ task }}</p>
      </li>
    </ul>
  </section>
  <section class="wrapper-taskList">
    <h2>
      Wednesday
      <img
        class="delete-day-icon"
        src="/assets/pics/remove.svg"
        alt="Delete all tasks in Wednesday"
        @click="removeAllTasksWednesday"
      />
    </h2>
    <p v-if="wednesday.length === 0">Feels empty here, no tasks added!</p>
    <ul v-else>
      <li
        v-for="(task, index) in wednesday"
        :key="task"
        class="task-style"
        :class="taskDoneStyleObject"
      >
        <div class="wrapper-task-input">
          <img
            @click="taskDone"
            v-if="checked === false"
            class="check-checkbox-icon"
            src="/assets/pics/checkbox.svg"
            alt="unchecked checkbox"
          />
          <img
            @click="taskDone"
            v-else
            class="check-checkbox-icon"
            src="/assets/pics/checkbox-checked.svg"
            alt="checked checkbox"
          />
          <img
            class="delete-task-icon"
            src="/assets/pics/001-close.svg"
            alt="Delete task"
            @click="removeTaskWednesday(index)"
          />
        </div>
        <p>{{ task }}</p>
      </li>
    </ul>
  </section>
  <section class="wrapper-taskList">
    <h2>
      Thursday
      <img
        class="delete-day-icon"
        src="/assets/pics/remove.svg"
        alt="Delete all tasks in Thursday"
        @click="removeAllTasksThursday"
      />
    </h2>
    <p v-if="thursday.length === 0">Feels empty here, no tasks added!</p>
    <ul v-else>
      <li
        v-for="(task, index) in thursday"
        :key="task"
        class="task-style"
        :class="taskDoneStyleObject"
      >
        <div class="wrapper-task-input">
          <img
            @click="taskDone"
            v-if="checked === false"
            class="check-checkbox-icon"
            src="/assets/pics/checkbox.svg"
            alt="unchecked checkbox"
          />
          <img
            @click="taskDone"
            v-else
            class="check-checkbox-icon"
            src="/assets/pics/checkbox-checked.svg"
            alt="checked checkbox"
          />
          <img
            class="delete-task-icon"
            src="/assets/pics/001-close.svg"
            alt="Delete task"
            @click="removeTaskThursday(index)"
          />
        </div>
        <p>{{ task }}</p>
      </li>
    </ul>
  </section>
  <section class="wrapper-taskList">
    <h2>
      Friday
      <img
        class="delete-day-icon"
        src="/assets/pics/remove.svg"
        alt="Delete all tasks in Friday"
        @click="removeAllTasksFriday"
      />
    </h2>
    <p v-if="friday.length === 0">Feels empty here, no tasks added!</p>
    <ul v-else>
      <li
        v-for="(task, index) in friday"
        :key="task"
        class="task-style"
        :class="taskDoneStyleObject"
      >
        <div class="wrapper-task-input">
          <img
            @click="taskDone"
            v-if="checked === false"
            class="check-checkbox-icon"
            src="/assets/pics/checkbox.svg"
            alt="unchecked checkbox"
          />
          <img
            @click="taskDone"
            v-else
            class="check-checkbox-icon"
            src="/assets/pics/checkbox-checked.svg"
            alt="checked checkbox"
          />
          <img
            class="delete-task-icon"
            src="/assets/pics/001-close.svg"
            alt="Delete task"
            @click="removeTaskFriday(index)"
          />
        </div>
        <p>{{ task }}</p>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
