// use tauri::Manager;
// use tauri_plugin_log::{Target, TargetKind};
// Learn more about Tauri commands at https://tauri.app/develop/calling-rust/
mod core;
mod stardew_valley;

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        .plugin(tauri_plugin_os::init())
        .plugin(tauri_plugin_dialog::init())
        .plugin(tauri_plugin_fs::init())
        .plugin(tauri_plugin_shell::init())
        .invoke_handler(tauri::generate_handler![core::path::get_steam_path,])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
