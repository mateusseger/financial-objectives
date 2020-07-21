<template>
  <v-container fluid>
    <v-row justify="center">
      <v-col cols="12" md="10">
        <v-row justify="start" align="start">
          <OjectiveCard v-for="objective in objectives" :key="objective.id"
            :objective="objective" 
            @editObjective="editObjective" />

        </v-row>
      </v-col>
    </v-row>
    <v-btn @click="newObjective" 
      color="primary" 
      fixed 
      large 
      bottom 
      right 
      fab
    >
      <v-icon>mdi-plus</v-icon>
    </v-btn>
    <NewObjective v-model="dialog" :selectedObjective="selectedObjective"/>
  </v-container>
</template>

<script>
import OjectiveCard from '@/components/ObjectiveCard'
import NewObjective from '@/components/NewObjective'

export default {
  components: {
    OjectiveCard,
    NewObjective
  },
  data() {
    return {
      dialog: false,
      objectives: [
        {
          id: 1,
          name: "Fundo de emergências",
          currentValue: 500,
          percentage: 80
        },
        {
          id: 2,
          name: "Fundo de emergências",
          currentValue: 500,
          percentage: 50
        },
        {
          id: 3,
          name: "Fundo de emergências",
          currentValue: 500,
          percentage: 50
        },
        {
          id: 4,
          name: "Fundo de emergências",
          currentValue: 500,
          percentage: 50
        },
        {
          id: 5,
          name: "Fundo de emergências",
          currentValue: 500,
          percentage: 50
        },
        {
          id: 6,
          name: "Fundo de emergências",
          currentValue: 500,
          percentage: 50
        },
        {
          id: 7,
          name: "Fundo de emergências",
          currentValue: 500,
          percentage: 50
        },
        
      ],
      selectedObjective: null
    }
  },
  methods: {
    editObjective(obj) {
      this.selectedObjective = obj
      this.dialog = true
    },
    newObjective() {
      this.selectedObjective = null
      this.dialog = true
    }
  },
}
</script>

<style>

</style>