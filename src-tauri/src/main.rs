
// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

use tauri::{
    CustomMenuItem, Manager, Menu, MenuItem, Submenu, WindowBuilder, WindowMenuEvent, WindowUrl,
};

// Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
#[tauri::command]
fn greet(name: &str) -> String {
    format!("Hello, {}! You've been greeted from Rust!", name)
}

fn main() {
    let context = tauri::generate_context!();

    // Create the application menu
    let app_menu = Menu::new()
        .add_submenu(Submenu::new(
            "File",
            Menu::new()
                .add_item(CustomMenuItem::new("new", "New"))
                .add_item(CustomMenuItem::new("save", "Save Script"))
                .add_native_item(MenuItem::Separator)
                .add_item(CustomMenuItem::new("close", "Close")),
        ))
        .add_submenu(Submenu::new(
            "Edit",
            Menu::new()
                .add_native_item(MenuItem::Copy)
                .add_native_item(MenuItem::Paste)
                .add_native_item(MenuItem::Cut)
                .add_native_item(MenuItem::Separator)
                .add_item(CustomMenuItem::new("clear", "Clear All")),
        ))
        .add_submenu(Submenu::new(
            "Help",
            Menu::new()
                .add_item(CustomMenuItem::new("about", "About"))
                .add_item(CustomMenuItem::new("docs", "Documentation")),
        ));

    tauri::Builder::default()
        .menu(app_menu)
        .on_menu_event(|event| menu_handler(event))
        .invoke_handler(tauri::generate_handler![greet])
        .run(context)
        .expect("error while running tauri application");
}

fn menu_handler(event: WindowMenuEvent) {
    match event.menu_item_id() {
        "new" => {
            // Handle new file
            let _ = event.window().emit("menu-action", "new");
        }
        "save" => {
            // Handle save file
            let _ = event.window().emit("menu-action", "save");
        }
        "close" => {
            // Close the window
            let app = event.window().app_handle();
            let window = app.get_window("main").unwrap();
            let _ = window.close();
        }
        "clear" => {
            // Clear all input
            let _ = event.window().emit("menu-action", "clear");
        }
        "about" => {
            // Show about dialog
            let _ = event.window().emit("menu-action", "about");
        }
        "docs" => {
            // Open documentation
            let _ = event.window().emit("menu-action", "docs");
        }
        _ => {}
    }
}
