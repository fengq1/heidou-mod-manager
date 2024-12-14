<template>
  <v-layout class="rounded rounded-md">
    <v-main class="d-flex  " style="min-height: 100vh;">
      <v-card>
        <v-layout>
          <v-navigation-drawer
            location="right"
            v-model="drawer"
            :rail="rail"
            permanent
            @click="rail = false"
          >
            <v-list-item
              prepend-avatar="https://randomuser.me/api/portraits/men/85.jpg"
              title="John Leider"
              nav
            >
              <template v-slot:append>
                <v-btn
                  icon="mdi-chevron-left"
                  variant="text"
                  @click.stop="rail = !rail"
                ></v-btn>
              </template>
            </v-list-item>

            <v-divider></v-divider>
            <v-list density="compact" nav>
              <v-list-item prepend-icon="mdi-home-city" title="Home" value="home"></v-list-item>
              <v-list-item prepend-icon="mdi-account" title="My Account" value="account"></v-list-item>
              <v-list-item prepend-icon="mdi-account-group-outline" title="Users" value="users"></v-list-item>
            </v-list>
          </v-navigation-drawer>
          <v-main style="height: 250px"></v-main>
        </v-layout>
      </v-card>
      <v-app-bar title=" ">
        <v-btn icon="mdi-remove" size="large"></v-btn>
        <v-btn icon="mdi-close" size="large"></v-btn>
      </v-app-bar>
    </v-main>
  </v-layout>
</template>
<script>
export default {
  data() {
    return {
      drawer: true,
      rail: true,
    }
  },
}
</script>

