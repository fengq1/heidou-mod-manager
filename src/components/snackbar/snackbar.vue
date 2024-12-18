<template>
  <v-snackbar top text v-model="visible" :color="color">
    {{ $snackbar.msg }}
    <!-- 关闭按钮 -->
    <template v-slot:action="{ attrs }">
      <v-btn v-bind="attrs" v-if="showClose" icon @click="close" :color="color"
      >
        <v-icon>mdi-close</v-icon>
      </v-btn>
    </template>
  </v-snackbar>
</template>
<script>
export default {
  data() {
    return {};
  },
  computed: {
    visible() {
      return this.$snackbar.visible;
    },
    showClose() {
      return this.$snackbar.showClose;
    },
    color() {
      return this.$snackbar.color;
    },
  },
  methods: {
    close() {
      this.$store.commit("snackbar/CLOSE_SNACKBAR");
    },
  },
};
</script>
