<template>
  <nav>

      <v-snackbar
        v-model="snackbar"
        :timeout="4000" color="success"
        right
      >
        <v-row no-gutters>
          <v-col class="d-flex justify-space-between align-center">
            <span class="px-4">Awesome! You added a new project</span>
            <v-btn plain color="white" right @click="snackbar = false">Close</v-btn>
          </v-col>
        </v-row>
      </v-snackbar>


    <!-- toolbar -->
    <v-app-bar flat app>
      <v-app-bar-nav-icon class="grey--text" @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-app-bar-title class="text-uppercase grey--text">
        <span class="font-weight-light">Todo</span>
        <span>Ninja</span>
      </v-app-bar-title>
      <v-spacer></v-spacer>

      <!-- dropdown menu --> 
      <v-menu offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            v-bind="attrs"
            v-on="on"
            depressed
            class="grey--text"
          >
            <v-icon left>mdi-chevron-down</v-icon>
            <span>Menu</span>
          </v-btn>
        </template>

        <v-list>
          <v-list-item v-for="link in links" :key="link.text" router :to="link.route">
            <v-list-item-title>{{ link.text }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>

      <!-- sign-out button -->
      <v-btn depressed class="grey--text">
        <span>Sign Out</span>
        <v-icon right>mdi-exit-to-app</v-icon>
      </v-btn>
    </v-app-bar>

    <!-- sidebar menu -->
    <v-navigation-drawer v-model="drawer" app class="primary">

      <v-row no-gutters>
        <v-col class="mt-5 d-flex justify-center">
          <v-avatar size="100">
            <img src="/avatar-1.jpg" alt="">
          </v-avatar>
        </v-col>
      </v-row>

      <v-row no-gutters>
        <v-col class="mt-2 d-flex justify-center">
          <p class="white--text subtitle-1">
            The Net Ninja
          </p>
        </v-col>
      </v-row>

      <v-row no-gutters class="mb-4">
        <v-col class="mt-2 d-flex justify-center">
          <Popup @projectAdded="snackbar = true"/>
        </v-col>
      </v-row>

      <v-list>
        <v-list-item v-for="link in links" :key="link.text" router :to="link.route">
          <v-list-item-action>
            <v-icon class="white--text">{{ link.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title class="white--text">{{ link.text }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
import Popup from './Popup'

export default {
  components: { Popup },

  data() {
    return {
      drawer: false,
      links: [
        { icon: 'mdi-view-dashboard', text: 'Dashboard', route: '/' },
        { icon: 'mdi-folder', text: 'My Projects', route: '/projects' },
        { icon: 'mdi-account', text: 'Team', route: '/team' }
      ],
      snackbar: false
    }
  }
}
</script>

<style>

</style>