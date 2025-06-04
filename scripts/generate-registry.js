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

function createGroupItem(groupName, filePaths) {
  const registryDeps = new Set();
  const files = [];

  filePaths.forEach((filePath) => {
    const content = fs.readFileSync(filePath, "utf-8");
    extractRegistryDependencies(content).forEach((dep) => registryDeps.add(dep));

    const relativePath = path.relative(path.join(__dirname, "../"), filePath).replace(/\\/g, "/");

    const targetPathParts = relativePath.replace(/^examples\//, "").split("/");

    const target = `app/${targetPathParts.join("/")}`;

    files.push({
      path: relativePath,
      type: relativePath.endsWith("page.tsx")
        ? "registry:page"
        : /\.(json|ts)$/.test(relativePath)
          ? "registry:file"
          : "registry:component",
      target
    });
  });

  const name = groupName.replace(/[^a-zA-Z0-9-]/g, "-").toLowerCase();
  const title = groupName.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());

  return {
    name,
    type: "registry:block",
    title,
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
