<template>
  <v-dialog v-model="dialog" max-width="600px" transition="dialog-bottom-transition">
    <v-card>
      <v-card-title>
        <span class="headline">Criar novo objetivo financeiro</span>
      </v-card-title>
      <v-card-text></v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn @click="dialog = false" color="primary" text>Cancelar</v-btn>
        <v-btn color="primary" text>Salvar</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: {
   value: Boolean
  },
  computed: {
    dialog: {
      get() {
        return this.value
      },
      set(value) {
        this.$emit('input', value)
        return value
      }
    }
  }
}
</script>

<style>

</style>