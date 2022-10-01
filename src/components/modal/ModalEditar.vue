<template>
  
  <div>
<v-dialog
      v-model="dialog"
      persistent
      max-width="290"
    > 
      <v-card>
        <v-card-title class="text-h5">
          Editar
        </v-card-title>
        <v-divider/>
        <v-card-text class="mt-4">
          Infome o novo nome da tarefa
        </v-card-text>
        <!-- text-field -->
        <v-text-field
            label="Digite..."
            placeholder="Novo título"
            outlined
            class="px-3"
          ></v-text-field>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="red darken-1"
            text
            @click="$emit('fechaModal')"
          >
            Cancelar
          </v-btn>
          <v-btn
            color="green darken-1"
            text
            @click="dialog = true"
          >
            Editar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>

</template>

<script>
          export default {
            data () {
              return {
                dialog: true,
              }
            },
          }
</script>

<style>

</style>