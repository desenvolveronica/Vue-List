<template>
          <!-- componente Menu -->
  <div>
    <v-menu offset-y>
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          icon
          v-bind="attrs"
          v-on="on"
          
        >
        <v-icon dark>mdi-dots-vertical</v-icon>
        </v-btn>
      </template>
      <v-list>
        <v-list-item
          v-for="(item, index) in items"
          :key="index"
          @click="item.mClick()"
        > 
          <v-icon  left >{{ item.icone }}</v-icon>

          <v-list-item-title>{{ item.title }}</v-list-item-title>

        </v-list-item>
      </v-list>
    </v-menu> 
    <!-- componente Modal Editar -->
  <ModalEditar
  v-if="items[0].modal"
  @fechaModal = "items[0].modal = false"
  :tarefa= "tarefa"
  />
  </div>
</template>

<script>
import ModalEditar from '../modal/ModalEditar.vue';
export default {
props: ['tarefa'],
components: { ModalEditar },
data: () => ({
  items: [
    {
      icone: "mdi-pencil",
      title: "Editar",
      modal: false,
      mClick()
       {
        console.log("Editar");
        this.modal = true
        }
      },
      {
        icone: "mdi-trash-can",
        title: "Excluir",
        modal: false,
        mClick() 
        {
          console.log("Excluir");
        }
      },
        ],
    }),

   
    
}
</script>

<style>

</style>