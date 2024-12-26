<script setup lang="ts">
import {loadLocale} from "@/utils/locale";
import {toggleTheme, setTheme} from "@/utils/theme";
import {conf, saveAppConf} from "@/utils/conf";
import {ref, defineAsyncComponent} from 'vue'
import {useMessage} from "vuetify-message-vue3";
import {useTheme} from 'vuetify'

setTheme(useTheme())

const message = useMessage()
const tab = ref('app')

const gameSettingComponent = defineAsyncComponent(() => import('../games/' + conf.value.app.game + "/pages/setting.vue"))

const changeTheme = () => {
  saveAppConf()
    .then(() => {
      toggleTheme()
    })
    .catch(e => {
      message.error("保存失败", {variant: "tonal"});
    });
}

const _changeLocale = () => {
  saveAppConf()
    .then(() => {
      loadLocale()
    })
    .catch(e => {
      message.error("保存失败", {variant: "tonal"});
    });
}

</script>
<template>

  <v-row dense class="fill-height">
    <v-col cols="12">
      <v-card class="fill-height">
        <v-tabs
          v-model="tab"
          align-tabs="start"
        >
          <v-tab value="app" :text="$al('Setting')"></v-tab>
          <v-tab value="game" :text="$gl('Setting')"></v-tab>
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
            value="game"
          >
            <gameSettingComponent/>
          </v-tabs-window-item>
        </v-tabs-window>
      </v-card>
    </v-col>
  </v-row>
</template>

<style scoped lang="sass">

</style>
