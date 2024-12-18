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
                              :items="['zh_CN','en']"
                              variant="solo"
                    ></v-select>
                  </v-col>
                  <v-col cols="12">
                    <v-radio-group inline label="系统主题" v-model="appConf.theme"
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
<script>
import {toggleTheme} from "@/utils/theme.js";

export default {
  data: () => ({
    tab: null,
    appConf: {}
  }),
  async created() {
    this.appConf = await this.$conf.getAppConf();
    console.log(this.appConf.language)
  },
  methods: {
    changeTheme() {
      toggleTheme(this.appConf.theme)
      this.$conf.saveAppConf(this.appConf);
      this.$snackbar.actions.openSnackbar(2000,{msg:"主题已切换",color:"success"})
    }
  }
}
</script>
<style scoped lang="sass">

</style>
