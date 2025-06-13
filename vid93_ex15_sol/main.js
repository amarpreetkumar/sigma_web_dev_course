// 📦 Import required core modules
import fs from "fs/promises";   // Promise-based fs for async/await
import fsn from "fs";           // Synchronous fs for checking if a directory exists
import path from "path";        // Path module for handling file paths

// 📍 Define the base path (directory where cluttered files exist)
const basepath = "C:\\Users\\iitia\\Downloads\\Sigma Web Development Course\\Sigma-Web-Dev-Course\\Video 93";

// 📂 Read all entries (files/folders) inside the basepath
let files = await fs.readdir(basepath);

// 🔁 Loop through each file/folder name
for (const item of files) {
    console.log("Processing:", item);

    // 🧠 Split the file name by '.' and get the last part as the extension
    // e.g., "photo.jpg" → "jpg"
    let ext = item.split(".").pop();

    // ❌ Skip if the file has no extension or is a .js/.json file
    if (!item.includes(".") || ext === "js" || ext === "json") {
        continue;
    }

    // 🗂 Create path for the folder named after the extension
    const extFolderPath = path.join(basepath, ext);

    // ✅ If the extension folder doesn't exist, create it
    if (!fsn.existsSync(extFolderPath)) {
        await fs.mkdir(extFolderPath);
        console.log(`📁 Created folder: ${ext}`);
    }

    // 📦 Move the file into its corresponding extension folder
    await fs.rename(
        path.join(basepath, item),         // current file path
        path.join(extFolderPath, item)     // new file path
    );

    console.log(`✅ Moved ${item} to ${ext}/`);
}

console.log("🎉 All files organized successfully!");
// 🏁 End of script