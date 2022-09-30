import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state:{
    tarefas:[
      {titulo: 'Estudar Vue', concluido: false},
      {titulo: 'Tomar remédio', concluido: false}
    ]
  },
  mutations:{

  },
  actions:{
    
  },
  modules: {
  }
})