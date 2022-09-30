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
          </template>
        </v-list-item>
  </div>
</template>

<script>
export default {
  props:['tarefa']
}
</script>

<style>

</style>