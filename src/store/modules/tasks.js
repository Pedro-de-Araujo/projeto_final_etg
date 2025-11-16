const state = () => ({ items: [ { id:1, title:'Comprar mantimentos', done:false, description:'Leite, ovos, arroz.' }, { id:2, title:'Concluir relatório', done:false, description:'Enviar até sexta.' } ], nextId:3 })
const getters = { allTasks: state => state.items, pendingCount: state => state.items.filter(t=>!t.done).length, completedCount: state => state.items.filter(t=>t.done).length }
const mutations = {
  ADD_TASK(state,p){ state.items.unshift({ id: state.nextId++, title:p.title, description:p.description||'', done:false }) },
  TOGGLE_TASK(state,id){ const t=state.items.find(x=>x.id===id); if(t) t.done=!t.done },
  REMOVE_TASK(state,id){ state.items=state.items.filter(x=>x.id!==id) },
  UPDATE_TASK(state,p){ const t=state.items.find(x=>x.id===p.id); if(t){ t.title=p.title; t.description=p.description } }
}
const actions = { addTask({commit},p){commit('ADD_TASK',p)}, toggleTask({commit},id){commit('TOGGLE_TASK',id)}, removeTask({commit},id){commit('REMOVE_TASK',id)}, updateTask({commit},p){commit('UPDATE_TASK',p)} }
export default { namespaced:true, state, getters, mutations, actions }
