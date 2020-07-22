<template>
  <v-card
    class="ma-4"
    outlined
    tile
    elevation="2"
  >
    <v-row class="px-4 py-1 actions">
      <v-btn text icon>
        <v-icon @click="editHandle" class="primary--text">mdi-pencil</v-icon>
      </v-btn>
      <v-btn text icon>
        <v-icon @click="removeHandle" class="primary--text">mdi-close</v-icon>
      </v-btn>
    </v-row>
    <v-row align="center" class="px-12 py-4">
      <v-progress-circular
        rotate="90"
        size="200"
        :value="objective.percentage"
        width="20"
        color="primary"
      >
        <span class="title">{{objective.currentValue | currency}}</span>
      </v-progress-circular>
    </v-row>
    <v-divider></v-divider>
    <v-row class="pa-2" justify="center">
      <span class="primary--text font-weight-bold">{{objective.name}}</span>
    </v-row>
  </v-card>
</template>

<script>
import accounting from 'accounting'

export default {
  filters: {
    currency: value => {
      return accounting.formatMoney(value, 'R$ ', '2', '.', ',')
    }
  },
  props: {
    objective: Object
  },
  methods: {
    editHandle() {
      this.$emit('editObjective', this.objective)
    },
    removeHandle() {
      this.$emit('removeObjective', this.objective)
    }

  }
}
</script>

<style>
  .actions {
    z-index: 1;
    position: absolute;
    right: 0;
  }
</style>