<template>
  <div>Teste</div>
</template>

<script>
  export default {
  components: {  },
    data: () => ({ 
      drawer: null,
      items: [
          { title: 'Tarefas', icon: 'mdi-view-dashboard', to:'/' },
          { title: 'Sobre', icon: 'mdi-help-box', to:'/sobre'  },
        ],
    }),
  }
</script>