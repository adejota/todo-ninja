<template>
  <div class="dashboard">

    <h1 class="subtitle-1 grey--text">Dashboard</h1>

    <v-container class="my-5">

      <v-row class="mb-3">

        <v-tooltip top>
          <template v-slot:activator="{ on, attrs }">
            <v-btn small plain color="grey" @click="sortBy('title')" v-bind="attrs" v-on="on">
              <v-icon left small>mdi-folder</v-icon>
              <span class="caption text-lowercase">By project name</span>
            </v-btn>
          </template>
          <span>Sort projects by project name</span>
        </v-tooltip>

        <v-tooltip top>
          <template v-slot:activator="{ on, attrs }">
            <v-btn small plain color="grey" @click="sortBy('person')" v-bind="attrs" v-on="on">
              <v-icon left small>mdi-account</v-icon>
              <span class="caption text-lowercase">By person</span>
            </v-btn>
          </template>
          <span>Sort projects by person</span>
        </v-tooltip>

      </v-row>

      <v-card flat v-for="project in projects" :key="project.title">

        <v-row no-gutters wrap :class="`pa-4 project ${project.status}`">

          <v-col cols="12" md="6">
            <div class="caption grey--text">Project title</div>
            <div>{{project.title}}</div>
          </v-col>

          <v-col cols="6" sm="4" md="2" class="pt-2 pt-md-0">
            <div class="caption grey--text">Person</div>
            <div>{{project.person}}</div>
          </v-col>

          <v-col cols="6" sm="4" md="2" class="pt-2 pt-md-0">
            <div class="caption grey--text">Due by</div>
            <div>{{project.due}}</div>
          </v-col>

          <v-col cols="6" sm="4" md="2" class="pt-2 pt-md-0 d-flex align-center justify-sm-end justify-md-end">
            <div class="d-flex justify-sm-start justify-md-end align-center pt-2 pt-md-0">
              <v-chip small :class="`${project.status} white--text caption`">{{project.status}}</v-chip>
            </div>
          </v-col>

        </v-row>

        <v-divider></v-divider>
        
      </v-card>

    </v-container>
  </div>
</template>

<script>
import db from '../fb'

export default {
  data() {
    return {
      projects: []
    }
  },

  methods: {
    sortBy(prop) {
      this.projects.sort((a, b) => a[prop] < b[prop] ? -1 : 1)
    }
  },

  created() {
    db.collection('projects').onSnapshot(res => {
      const changes = res.docChanges()

      changes.forEach(change => {
        if (change.type === 'added') {
          this.projects.push({
            ...change.doc.data(),
            id: change.doc.id
          })
        }
      })
    })
  }
}
</script>

<style>
.project.complete {
  border-left: 4px solid #3cd1c2;
}

.project.ongoing {
  border-left: 4px solid orange;
  
}

.project.overdue {
  border-left: 4px solid tomato;
}

.v-chip.complete {
  background: #3cd1c2 !important;
}

.v-chip.ongoing {
  background: orange !important;
}

.v-chip.overdue {
  background: tomato !important;
}
</style>