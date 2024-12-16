use std::path::Path;
use winreg::enums::*;
use winreg::RegKey;

fn get_steam_install_path() -> Option<String> {
    let hkcu = RegKey::predef(HKEY_CURRENT_USER);
    let key = hkcu.open_subkey("Software\\Valve\\Steam").ok()?;
    // get SteamPath
    // 获取 SteamPath 键的值
    let steam_path: Result<String, _> = key.get_value("SteamPath");
    steam_path.ok()
}

fn get_stardew_valley_path() -> Option<String> {
    if let Some(steam_path) = get_steam_install_path() {
        //  steam库路径\steamapps\common\Stardew Valley
        let stardew_path = Path::new(&steam_path)
            .join("steamapps")
            .join("common")
            .join("Stardew Valley");

        if stardew_path.exists() {
            return Some(stardew_path.to_str()?.to_string());
        }
    }
    None
}

pub fn main() {
    match get_stardew_valley_path() {
        Some(path) => println!("Stardew Valley Install Path: {}", path),
        None => println!("Stardew Valley path not found!"),
    }
}
