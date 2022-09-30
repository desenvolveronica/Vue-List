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
        > 
          <v-icon  left >{{ item.icone }}</v-icon>

          <v-list-item-title>{{ item.title }}</v-list-item-title>

        </v-list-item>
      </v-list>
    </v-menu> 

  </div>
</template>

<script>
          export default {
            data: () => ({
              items: [
                { icone:"mdi-pencil", title: 'Editar' },
                { icone: "mdi-trash-can", title: 'Excluir' },
  
              ],
            }),
          }
        </script>

<style>

</style>