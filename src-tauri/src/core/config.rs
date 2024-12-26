// use once_cell::sync::OnceCell;
// use serde::de::Error;
// use serde::{Deserialize, Serialize};
// use serde_json::{self, Result};
// use std::fs::OpenOptions;
// use std::sync::Mutex;
// use std::{
//     fs::File,
//     io::{Read, Write},
// };
//
// #[derive(Serialize, Deserialize, Debug, Clone)]
// pub struct Config {
//     pub name: String,
//     pub version: String,
//     pub settings: Settings,
// }
//
// #[derive(Serialize, Deserialize, Debug, Clone)]
// pub struct Settings {
//     pub theme: String,
//     pub language: String,
// }
//
// // 静态 OnceCell 用于初始化配置，只会初始化一次
// static CONF: OnceCell<Mutex<Config>> = OnceCell::new();
//
// const CONFIG_FILE_PATH: &str = "conf/app.conf.json";
//
// impl Config {
//     // 读取 JSON 文件并初始化配置
//     pub fn load_config() -> Result<()> {
//         let mut file = File::open(CONFIG_FILE_PATH)?;
//         let mut content = String::new();
//         file.read_to_string(&mut content)?;
//
//         // 反序列化 JSON 内容
//         let config: Config = serde_json::from_str(&content)?;
//
//         // 使用 OnceCell 初始化全局配置
//         CONF.set(Mutex::new(config))
//             .map_err(|_| serde_json::Error::custom("Failed to initialize config"))?;
//         Ok(())
//     }
//
//     // 获取配置
//     pub fn get_config() -> Option<std::sync::MutexGuard<'static, Config>> {
//         CONF.get().map(|mutex| mutex.lock().unwrap())
//     }
//
//     // 保存配置到文件
//     pub fn save_config(&self) -> Result<()> {
//         let config_json = serde_json::to_string_pretty(&self)?;
//         let mut file = OpenOptions::new()
//             .write(true)
//             .truncate(true)
//             .open(CONFIG_FILE_PATH)?;
//         file.write_all(config_json.as_bytes())?;
//         Ok(())
//     }
//
//     // 修改配置
//     pub fn update_config<F>(update_fn: F) -> Result<()>
//     where
//         F: FnOnce(&mut Config),
//     {
//         if let Some(mut config) = Config::get_config() {
//             update_fn(&mut config);
//             config.save_config()?;
//         }
//         Ok(())
//     }
// }
