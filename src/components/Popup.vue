<template>
    <v-dialog
      max-width="600px"
      v-model="dialog"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="success"
          dark
          v-bind="attrs"
          v-on="on"
          depressed
        >
          Add new project
        </v-btn>
      </template>

      <v-card>
        <v-card-title class="py-5">
            <h2>Add a new project</h2>
        </v-card-title>

        <v-card-text>
            <v-form class="px-3" ref="form">
                <v-text-field label="Title" v-model="title" prepend-icon="mdi-folder" :rules="inputRules"></v-text-field>
                <v-textarea label="Information" v-model="content" prepend-icon="mdi-pencil" :rules="inputRules"></v-textarea>

                <v-row>
                    <v-col cols="12" lg="6">
                        <v-menu max-width="290">
                            <template v-slot:activator="{ on, attrs }">
                                <v-text-field
                                    label="Due date"
                                    v-bind="attrs"
                                    v-on="on"
                                    prepend-icon="mdi-calendar-range"
                                    :value="formattedDate"
                                    :rules="inputRules"
                                ></v-text-field>
                            </template>
                            <v-date-picker v-model="due"></v-date-picker>
                        </v-menu>
                    </v-col>
                </v-row>

                <v-btn
                    depressed
                    :loading="loading"
                    class="success mx-0 mt-3"
                    @click="submit"
                >
                    Add project
                </v-btn>
            </v-form>
        </v-card-text>
      </v-card>
    </v-dialog>
</template>

<script>
import { format } from 'date-fns'
import db from '../fb'

export default {
    data() {
        return {
            title: '',
            content: '',
            due: null,
            inputRules: [
                v => v.length >= 3 || 'Minimum length is 3 characters'
            ],
            loading: false,
            dialog: false
        }
    },
    computed: {
        formattedDate() {
            if (this.due) {
                var dueDate = this.due.split('-')
                return format(new Date(dueDate[0], dueDate[1] - 1, dueDate[2]), 'do MMM YYY')
            } else {
                return ''
            }           
        }
    },
    methods: {
        submit() {
            if (this.$refs.form.validate()) {
                this.loading = true
                var dueDate = this.due.split('-')
                const project = {
                    title: this.title,
                    content: this.content,
                    due: format(new Date(dueDate[0], dueDate[1] - 1, dueDate[2]), 'do MMM YYY'),
                    person: 'The Net Ninja',
                    status: 'ongoing'
                }

                db.collection('projects').add(project).then(() => {
                    this.loading = false
                    this.dialog = false
                    this.$emit('projectAdded')
                })
            }
        }
    }
}
</script>
