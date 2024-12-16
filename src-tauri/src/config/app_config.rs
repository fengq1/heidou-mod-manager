// use tauri::Manager;
// use std::fs;
// use serde_json::Value;
//
// #[tauri::command]
// fn read_config() -> Result<Value, String> {
//     let config_path = tauri::api::path::app_dir()
//         .ok_or("Failed to get app directory")?
//         .join("config.json");
//
//     // 读取文件内容
//     let config_content = fs::read_to_string(config_path)
//         .map_err(|e| format!("Failed to read config file: {}", e))?;
//
//     // 解析 JSON 数据
//     serde_json::from_str(&config_content)
//         .map_err(|e| format!("Failed to parse JSON: {}", e))
// }
//
// fn main() {
//     tauri::Builder::default()
//         .invoke_handler(tauri::generate_handler![read_config])
//         .run(tauri::generate_context!())
//         .expect("error while running tauri application");
// }
