import {reactive, ref, onMounted} from 'vue';
import {useTheme} from 'vuetify';

export default {
  setup() {
    const theme = useTheme(); // 获取 Vuetify 主题对象
    const osTheme = reactive({
      dark: window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches,
    });

    // 系统主题变化时更新主题
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
      osTheme.dark = e.matches;
      console.log("当前系统主题: " + (osTheme.dark ? 'dark' : 'light'));
      setTheme(osTheme.dark ? 'dark' : 'light');
    });

    // 设置主题
    const setTheme = (themeValue) => {
      console.log('设置主题: ' + themeValue);
      theme.global.name.value = themeValue; // 修改 Vuetify 主题
    };

    // 获取当前主题
    const getTheme = () => {
      console.log('当前系统主题: ' + (osTheme.dark ? 'dark' : 'light'));
      return osTheme.dark ? 'dark' : 'light';
    };

    // 在组件挂载时设置初始主题
    onMounted(() => {
      setTheme(osTheme.dark ? 'dark' : 'light');
    });
    // 返回需要暴露的属性和方法
    return {
      theme,
      setTheme,
      getTheme,
      osTheme,
    };
  },

};
