// src/.vuepress/navbar.ts
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { navbar } from 'vuepress-theme-hope';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ARTICLES_ROOT = path.resolve(__dirname, '../articles');

/**
 * 辅助函数：尝试读取目录下 README.md 的 title 字段
 * 如果读不到，就返回目录名作为默认值
 */
function getDirElem(dirPath, defaultName,elem) {
  const readmePath = path.join(dirPath, 'README.md');

  // 1. 如果 README 不存在，直接返回目录名
  if (!fs.existsSync(readmePath)) {
    return defaultName;
  }

  try {
    const content = fs.readFileSync(readmePath, 'utf-8');
    // 2. 使用正则匹配 Frontmatter 中的 title
    // 逻辑：匹配以 title: 开头，后面跟任意字符的行
    const match = content.match(new RegExp(`^${elem}:\\s*(.+)$`, 'm'));

    if (match) {
      // 3. 去除可能存在的引号 (例如 title: "物理") 和首尾空格
      return match[1].trim().replace(/^['"]|['"]$/g, '');
    }
  } catch (e) {
    // 容错处理：读取失败则忽略
  }

  return defaultName;
}

function generateNavbarConfig() {
  // === 改动点 1: 初始化数组时，直接放入“首页”配置 ===
  const navbarItems = [
    {
      text: "首页",
      link: "/",
      icon: "home"
    }
  ];

  if (!fs.existsSync(ARTICLES_ROOT)) return navbarItems;

  const topLevelDirs = fs.readdirSync(ARTICLES_ROOT, { withFileTypes: true });

  for (const dirent of topLevelDirs) {
    if (dirent.isDirectory() && !dirent.name.startsWith('.')) {
      const dirPath = path.join(ARTICLES_ROOT, dirent.name);

      // === 改动点 2: 调用函数获取 Display Name ===
      const displayName = getDirElem(dirPath, dirent.name,'title');
      const displayIcon = getDirElem(dirPath, dirent.name,'icon');
      navbarItems.push({
        text: displayName,  // 这里现在显示的是 "物理学" 而不是 "physics"
        link: `/articles/${dirent.name}/`,
        icon: displayIcon     // 你也可以同样逻辑读取 icon 字段
      });
    }
  }

  return navbarItems;
}

export default navbar(generateNavbarConfig());