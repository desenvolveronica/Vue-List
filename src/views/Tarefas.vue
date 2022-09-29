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
       <Tarefa/>


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
  }

}
</script>

<style>

</style>