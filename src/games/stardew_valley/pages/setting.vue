<script setup lang="ts">
import {saveGameConf} from "@/utils/conf";
import {open} from '@tauri-apps/plugin-dialog';
import {getSvConf} from "@/games/stardew_valley/utils/sv_conf";
import {ref} from "vue";

const svConf: any = ref(getSvConf())

const selectGameRootDirectory = async () => {
  svConf.value['path'] = await open({
    multiple: false,
    directory: true,
  });
  await saveGameConf()
}
const updateGameRootDirectory = async (path: string) => {
  svConf.value['path'] = path;
  await saveGameConf()
}
</script>

<template>
  <v-container fluid>
    <v-row dense>
      <v-col cols="10">
        <v-text-field :label="$gl('Game root directory')"
                      :model-value="svConf['path']"
                      prepend-icon="mdi-folder-home-outline"
                      @click:prepend="selectGameRootDirectory"
                      @update:modelValue="updateGameRootDirectory"
                      variant="solo"></v-text-field>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped lang="sass">

</style>
