<template>
  <v-dialog v-model="dialog" max-width="600px" transition="dialog-bottom-transition">
    <v-card>
      <v-card-title>
        <span class="headline">Criar novo objetivo financeiro</span>
      </v-card-title>
      <v-card-text>
        <v-form v-model="valid">
          <v-container>
            <v-row>
              <v-col cols="12">
                <v-text-field 
                  v-model="name" 
                  :rules="rules.name"
                  label="Nome" 
                  required
                >
                </v-text-field>
              </v-col>
              <v-col cols="12">
                <v-currency-field 
                  prefix="R$" 
                  v-model="currentValue" 
                  label="Valor atual" 
                  required
                >
                  </v-currency-field>
              </v-col>
              <v-col cols="12">
                <v-currency-field 
                  prefix="R$" 
                  v-model="necessaryValue" 
                  :min="0.01" 
                  label="Valor necessário" 
                  required
                >
                  </v-currency-field>
              </v-col>

            </v-row>
          </v-container>
        </v-form>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn @click="dialog = false" color="primary" text>Cancelar</v-btn>
        <v-btn color="primary" :disabled="!valid" text>Salvar</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: {
   value: Boolean,
   selectedObjective: Object
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
  },
  watch: {
    selectedObjective(value) {
      this.clearFields()
      if (value) {
        this.name = value.name
        this.currentValue = value.currentValue
        this.necessaryValue = value.necessaryValue
      }
    }
  },
  data() {
    return {
      valid: false,
      name: '',
      currentValue: 0,
      necessaryValue: 0,
      rules: {
        name: [v => !!v || 'O nome é obrigatório']
      }
    }
  },
  methods: {
    clearFields() {
      this.name = ''
      this.currentValue = 0
      this.necessaryValue = 0
    }
  }
}
</script>

<style>

</style>