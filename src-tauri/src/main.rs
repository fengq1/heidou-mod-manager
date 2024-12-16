// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]
mod config;

fn main() {
    heidou_mod_manager_lib::run()
    // config::game_path::main()
}
