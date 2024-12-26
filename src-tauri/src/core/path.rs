use std::path::PathBuf;
#[tauri::command]
#[cfg(windows)]
pub fn get_steam_path() -> Option<PathBuf> {
    // 从注册表中读取 Steam 安装路径
    use winreg::enums::*;
    use winreg::RegKey;

    let hkcu = RegKey::predef(HKEY_CURRENT_USER);
    let steam_key = hkcu.open_subkey(r"Software\Valve\Steam").ok()?;

    steam_key
        .get_value::<String, _>("SteamPath")
        .ok()
        .map(PathBuf::from)
}
#[tauri::command]
#[cfg(target_os = "macos")]
pub fn get_steam_path() -> Option<PathBuf> {
    // macOS: 默认 Steam 安装路径在 /Applications/Steam.app
    let steam_path = Path::new("/Applications/Steam.app/Contents/MacOS");
    if steam_path.exists() {
        Some(steam_path.to_path_buf())
    } else {
        None
    }
}
// #[cfg(windows)]
// pub fn get_stardew_valley_path() -> Option<PathBuf> {
//     // Windows: 检查 Steam 默认路径
//     let steam_path = match get_steam_path() {
//         Some(path) => path,
//         None => return None,
//     };
//
//     // Steam 库路径通常在 Steam 库目录内
//     let stardew_valley_path = steam_path
//         .join("steamapps")
//         .join("common")
//         .join("Stardew Valley");
//     if stardew_valley_path.exists() {
//         Some(stardew_valley_path)
//     } else {
//         None
//     }
// }
//
// #[cfg(target_os = "macos")]
// pub fn get_stardew_valley_path() -> Option<PathBuf> {
//     // macOS: 默认检查 Steam 库路径
//     let steam_path = match get_steam_path() {
//         Some(path) => path,
//         None => return None,
//     };
//
//     // 查找游戏是否在 Steam 库路径下
//     let stardew_valley_path = steam_path
//         .join("steamapps")
//         .join("common")
//         .join("Stardew Valley");
//     if stardew_valley_path.exists() {
//         Some(stardew_valley_path)
//     } else {
//         None
//     }
// }
