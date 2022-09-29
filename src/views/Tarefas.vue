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
       <Tarefas/>


      </v-list-item-group>
    </v-list>
  </div>
</template>

<script>
import Tarefas from '../components/tarefas/Tarefa.vue'

export default {
  name: 'Home',

  components: {
    Tarefas
  }

}
</script>

<style>

</style>