<script setup>
import {loadLocale} from "@/utils/locale";
import {toggleTheme, setTheme} from "@/utils/theme";
import {conf, saveAppConf} from "@/utils/conf";
import {ref} from 'vue'
import {useMessage} from "vuetify-message-vue3";
import {useTheme} from 'vuetify'

setTheme(useTheme())

const message = useMessage()

const tab = ref('app')

const changeTheme = async () => {
  let result = await saveAppConf();
  if (result.error) {
    message.error("保存失败", {variant: "tonal"});
    return
  }
  toggleTheme()
}

const _changeLocale = async () => {
  let result = await saveAppConf();
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
            <v-tab value="app" :text="$al('AppConf')"></v-tab>
            <v-tab value="stardewValley" :text="$gl('Name')"></v-tab>
          </v-tabs>
          <v-tabs-window v-model="tab">
            <v-tabs-window-item
              value="app"
            >
              <v-container fluid>
                <v-row dense>
                  <v-col cols="12">
                    <v-select max-width="300"
                              :label="$al('Language')"
                              v-model="conf.app.locale"
                              :items="conf.app.locales"
                              @update:modelValue="_changeLocale"
                              variant="solo"
                    >
                    </v-select>
                  </v-col>
                  <v-col cols="12">
                    <v-radio-group inline :label="$al('Theme')" v-model="conf.app.theme"
                                   @change="changeTheme">
                      <v-radio :label="$al('Light')" value="light"></v-radio>
                      <v-radio :label="$al('Dark')" value="dark"></v-radio>
                      <v-radio :label="$al('System')" value="system"></v-radio>
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
