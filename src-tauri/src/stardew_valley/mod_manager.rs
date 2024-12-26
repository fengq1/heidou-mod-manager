//获取本地SMAPI版本
#[tauri::command]
pub fn get_current_smapi_version(sv_path: String) -> String {
    println!("svPath:{}", sv_path);
    "{'version':'12.12'}".into()
}
