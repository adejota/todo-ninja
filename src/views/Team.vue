<template>
  <div class="team">
    <h1 class="subtitle-1 grey--text">Team</h1>

    <v-container class="mt-2 mb-5">
      
      <v-row no-gutters wrap>
        <v-col cols="12" sm="6" md="4" lg="3" v-for="person in team" :key="person.name">
          <v-card flat class="text-center ma-3">
            <v-responsive class="pt-4">
              <v-avatar size="100" class="grey lighten-2">
                <img :src="person.avatar" alt="Person avatar">
              </v-avatar>
            </v-responsive>
            <v-card-text>
              <div class="subtitle-1">{{ person.name }}</div>
              <div class="grey--text">{{ person.role }}</div>
            </v-card-text>
            <v-card-actions>
              <v-btn plain color="grey">
                <v-icon small left>mdi-message</v-icon>
                <span>MESSAGE</span>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      team: [
        { name: 'The Net Ninja', role: 'Web developer', avatar: '/avatar-1.jpg' },
        { name: 'Ryu', role: 'Graphic developer', avatar: '/avatar-2.png' },
        { name: 'Chun Li', role: 'Web developer', avatar: '/avatar-3.png' },
        { name: 'Gouken', role: 'UX designer', avatar: '/avatar-4.png' },
        { name: 'Yoshi', role: 'Sales guru', avatar: '/avatar-5.png' },
      ]
    }
  }
}
</script>
