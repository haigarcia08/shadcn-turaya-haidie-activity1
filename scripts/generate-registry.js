const fs = require("fs");
const path = require("path");

const COMPONENTS_ROOT = path.join(__dirname, "../examples");
const OUTPUT_PATH = path.join(__dirname, "../registry.json");

function extractRegistryDependencies(fileContent) {
  const importRegex = /from\s+['"]@\/components\/ui\/([a-zA-Z0-9-]+)['"]/g;
  const matches = [...fileContent.matchAll(importRegex)];
  return [...new Set(matches.map((m) => m[1]))];
}

function walkDirectory(dir) {
  let fileList = [];
  const entries = fs.readdirSync(dir);

  for (const entry of entries) {
    const fullPath = path.join(dir, entry);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      fileList = fileList.concat(walkDirectory(fullPath));
    } else if (/\.(ts|tsx|json)$/.test(entry)) {
      fileList.push(fullPath);
    }
  }

  return fileList;
}

function createGroupItem(group, filePaths) {
  const registryDeps = new Set();
  const files = [];

  filePaths.forEach((filePath) => {
    const content = fs.readFileSync(filePath, "utf-8");

    // Sadece UI dependency'lerini registryDependencies'e ekle
    extractRegistryDependencies(content).forEach((dep) => registryDeps.add(dep));

    // Sadece examples altındaki dosyaları files'a ekle
    const relativePath = path.relative(path.join(__dirname, "../"), filePath).replace(/\\/g, "/");

    // Şunu kontrol edelim:
    if (!relativePath.startsWith("examples/")) return;

    const groupRelative = path.relative(path.join(COMPONENTS_ROOT), filePath).replace(/\\/g, "/");

    files.push({
      path: relativePath,
      type: "registry:component",
      target: `components/${groupRelative}`
    });
  });

  return {
    name: group,
    type: "registry:page",
    title: group.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase()),
    registryDependencies: Array.from(registryDeps),
    files
  };
}

function generateRegistry() {
  const allItems = [];
  const groups = fs.readdirSync(COMPONENTS_ROOT);

  for (const group of groups) {
    const groupPath = path.join(COMPONENTS_ROOT, group);
    if (!fs.statSync(groupPath).isDirectory()) continue;

    const filePaths = walkDirectory(groupPath);
    if (filePaths.length === 0) continue;

    const item = createGroupItem(group, filePaths);
    allItems.push(item);
  }

  const registry = {
    $schema: "https://ui.shadcn.com/schema/registry.json",
    name: "shadcn",
    homepage: "http://localhost:3000",
    items: allItems
  };

  fs.writeFileSync(OUTPUT_PATH, JSON.stringify(registry, null, 2), "utf-8");
  console.log(`✅ registry.json created with ${allItems.length} group(s).`);
}

generateRegistry();
