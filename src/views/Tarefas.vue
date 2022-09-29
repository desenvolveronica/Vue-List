<template>
  <div>
    <v-list
      flat
      subheader
    >

      <v-list-item-group
        v-model="settings"
        multiple
        active-class=""
      >
      <!-- Componente Tarefas -->
      <div
      v-for="tarefa, index in tarefas"
      :key="index"
      >
        <Tarefa
        :tarefa="tarefa"
        />
      </div>


      </v-list-item-group>
    </v-list>
  </div>
</template>

<script>
import Tarefa from '../components/tarefas/Tarefa.vue'

export default {
  name: 'Home',

  components: {
    Tarefa
  },

  data(){
    return {
      tarefas:[
        {titulo: 'Estudar Vue', concluido: 'false'},
        {titulo: 'Tomar remédio', concluido: 'false'}
      ]
    }
  }

}
</script>

<style>

</style>