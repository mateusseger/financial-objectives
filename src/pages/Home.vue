<template>
  <v-container fluid>
    <v-row justify="center">
      <v-col cols="12" md="10">
        <v-row justify="start" align="start">
          <OjectiveCard v-for="objective in objectives" :key="objective.id"
            :objective="objective" 
            @editObjective="editObjective"
            @removeObjective="removeObjective" />
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
    <NewObjective v-model="dialog" :selectedObjective="selectedObjective" @refresh="listObjectives"/>
  </v-container>
</template>

<script>
import OjectiveCard from '@/components/ObjectiveCard'
import NewObjective from '@/components/NewObjective'
import database from '@/services/database'

export default {
  components: {
    OjectiveCard,
    NewObjective
  },
  data() {
    return {
      dialog: false,
      objectives: [],
      selectedObjective: null
    }
  },
  created() {
    this.listObjectives()
  },
  methods: {
    editObjective(obj) {
      this.selectedObjective = obj
      this.dialog = true
    },
    newObjective() {
      this.selectedObjective = null
      this.dialog = true
    },
    listObjectives() {
      database.listObjectives().then(response => {
        this.objectives = response
      })
    },
    async removeObjective(objective) {
      await database.removeObjective(objective.id)
      this.listObjectives()
    }
  },
}
</script>

<style>

</style>