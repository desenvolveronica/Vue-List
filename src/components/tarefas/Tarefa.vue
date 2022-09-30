<template>  
  <div>
          <v-list-item
          :class="{'red lighten-5':tarefa.concluido}"
          @click="tarefa.concluido = !tarefa.concluido"
          >
          <template v-slot:default="{  }">
            <v-list-item-action>
              <v-checkbox :input-value="tarefa.concluido"></v-checkbox>
            </v-list-item-action>

            <v-list-item-content
            :class="{'text-decoration-line-through':tarefa.concluido}"
            >
              <v-list-item-title>{{tarefa.titulo}}</v-list-item-title>
            </v-list-item-content>

            <!-- icone das tarefas -->
           
              <v-btn icon @click.stop="handleRemoveTarefa(tarefa.id)">
                <v-icon color="red lighten-3">mdi-trash-can</v-icon>
              </v-btn>
          </template>
        </v-list-item>
        <v-divider
        style="background:pink"/>
  </div>
</template>

<script>
export default {
  props:['tarefa'],

  methods:{
    handleRemoveTarefa(id){
      this.$store.commit('removeTarefa', id)
      console.log('Removeu pois com o filter o retorno é todos os diferentes do id selecionado');
    }
  }
}
</script>

<style>

</style>