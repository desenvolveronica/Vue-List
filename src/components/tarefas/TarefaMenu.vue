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
          @click="item.mClick"
        > 
          <v-icon  left >{{ item.icone }}</v-icon>

          <v-list-item-title>{{ item.title }}</v-list-item-title>

        </v-list-item>
      </v-list>
    </v-menu> 
    <!-- componente Modal Editar -->
  <ModalEditar/>
  </div>
</template>

<script>
import ModalEditar from '../modal/ModalEditar.vue';
          export default {
    components: { ModalEditar },
    data: () => ({
        items: [
            {
                icone: "mdi-pencil",
                title: "Editar",
                mClick() {
                    console.log("Editar");
                }
            },
            {
                icone: "mdi-trash-can",
                title: "Excluir",
                mClick() {
                    console.log("Excluir");
                }
            },
        ],
    }),
    
}
        </script>

<style>

</style>