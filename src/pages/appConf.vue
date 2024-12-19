<script setup>
import {loadLocale} from "@/utils/locale.js";
import {toggleTheme} from "@/utils/theme.js";
import conf from "@/utils/conf.js";
import {ref} from 'vue'
import {useMessage} from "vuetify-message-vue3";

const message = useMessage()

const tab = ref('app')

const changeTheme = async () => {
  let result = await conf.saveAppConf();
  if (result.error) {
    message.error("保存失败", {variant: "tonal"});
    return
  }
  await toggleTheme()
}

const _changeLocale = async () => {
  let result = await conf.saveAppConf();
  if (result.error) {
    message.error("保存失败", {variant: "tonal"});
    return
  }
  await loadLocale()
}
</script>
<template>
  <v-container fluid>
    <v-row dense class="fill-height">
      <v-col cols="12">
        <v-card class="fill-height">
          <v-tabs
            v-model="tab"
            align-tabs="start"
          >
            <v-tab value="app">应用设置</v-tab>
            <v-tab value="stardewValley">星露谷物语设置</v-tab>
          </v-tabs>
          <v-tabs-window v-model="tab">
            <v-tabs-window-item
              value="app"
            >
              <v-container fluid>
                <v-row dense>
                  <v-col cols="12">
                    <v-select max-width="300"
                              v-model="conf.appConf.locale"
                              :items="['zh_CN','en']"
                              @update:modelValue="_changeLocale"
                              variant="solo"
                    >
                    </v-select>
                  </v-col>
                  <v-col cols="12">
                    <v-radio-group inline label="系统主题" v-model="conf.appConf.theme"
                                   @change="changeTheme">
                      <v-radio label="明亮" value="light"></v-radio>
                      <v-radio label="暗黑" value="dark"></v-radio>
                      <v-radio label="跟随系统" value="system"></v-radio>
                    </v-radio-group>
                  </v-col>
                </v-row>
              </v-container>
            </v-tabs-window-item>
            <v-tabs-window-item
              value="stardewValley"
            >stardewValley
            </v-tabs-window-item>
          </v-tabs-window>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped lang="sass">

</style>
