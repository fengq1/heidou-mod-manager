<script setup lang="ts" xmlns:v-card-item="http://www.w3.org/1999/html">
import {onBeforeMount, onMounted, ref} from "vue";
import {invoke} from "@tauri-apps/api/core";
import {useMessage} from "vuetify-message-vue3";
import {getSvConf} from "@/games/stardew_valley/utils/sv_conf";

const svConf = ref({
  "smapi": {
    "version": "unknown"
  }
})

onBeforeMount(async () => {
  console.log("mod onBeforeMount")
  svConf.value = await getSvConf()
})

onMounted(() => {
  console.log("mod onBeforeMount")
  console.log("svConf", svConf.value)
})
console.log("mod setup", svConf.value)
</script>

<template>
  <v-row>
    <v-col cols="3">
      <v-card
        title="SMAPI"
        :subtitle="svConf.smapi.version"
      >
        <template v-slot:append>
          <v-btn icon="mdi-download-outline" variant="text"></v-btn>
          <v-badge dot color="success" v-show="false"/>
        </template>
      </v-card>
    </v-col>
    <!--    <v-col cols="5">-->
    <!--      &lt;!&ndash;          <v-btn color="green">启动游戏</v-btn>&ndash;&gt;-->
    <!--      <v-btn size="x-large" color="green">启动游戏</v-btn>-->
    <!--    </v-col>-->
  </v-row>
</template>

<style scoped lang="sass">

</style>
