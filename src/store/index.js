import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state:{
    tarefas:[
      {id: 1, titulo: 'Estudar Vue', concluido: false},
      {id: 2, titulo: 'Tomar remédio', concluido: false}
    ]
  },

  mutations:{
    adicionaTarefa(state, titulo){
      if(titulo){
        state.tarefas.push({
          id: new Date().getTime(),
          titulo,
          concluido: false
        })
    }
    console.log('adiciona tarefa');
    }
  },
  
  actions:{
    
  },
  modules: {
  }
})