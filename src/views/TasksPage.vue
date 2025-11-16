<template>
  <section class="tasks-page card">
    <div class="toolbar"><h2>Tarefas</h2><div class="stats"><span>Pendentes: {{ pendingCount }}</span><span>Concluídas: {{ completedCount }}</span></div></div>
    <div class="content">
      <div class="left-col">
        <TaskForm @add="addTask" />
        <TaskList :tasks="tasks" @toggle="toggle" @remove="remove" @edit="startEdit" />
      </div>
      <div class="right-col">
        <TaskDetail v-if="editingTask" :task="editingTask" @save="saveEdit" @close="stopEdit" />
        <div v-else class="placeholder">Selecione uma tarefa para ver detalhes</div>
      </div>
    </div>
  </section>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
import TaskForm from '../components/TaskForm.vue'
import TaskList from '../components/TaskList.vue'
import TaskDetail from '../components/TaskDetail.vue'
export default {
  name:'TasksPage', components:{TaskForm,TaskList,TaskDetail}, data(){return{editingTask:null}},
  computed:{ ...mapGetters('tasks',['allTasks','pendingCount','completedCount']), tasks(){return this.allTasks} },
  methods:{ ...mapActions('tasks',['addTask','toggleTask','removeTask','updateTask']), toggle(id){this.toggleTask(id)}, remove(id){this.removeTask(id); if(this.editingTask && this.editingTask.id===id) this.editingTask=null}, startEdit(task){this.editingTask={...task}}, stopEdit(){this.editingTask=null}, saveEdit(p){this.updateTask(p); this.editingTask=null} }
}
</script>
<style scoped>.card{background:#fff;padding:1rem;border-radius:8px;box-shadow:0 6px 18px rgba(15,23,42,0.06)}.toolbar{display:flex;justify-content:space-between;align-items:center;margin-bottom:1rem}.content{display:flex;gap:1rem}.left-col{flex:1}.right-col{width:320px}.placeholder{color:#6b7280;padding:1rem;background:#f8fafc;border-radius:6px;text-align:center}.stats span{margin-left:1rem;color:#6b7280}</style>
