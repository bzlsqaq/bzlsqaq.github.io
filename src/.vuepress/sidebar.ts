// src/.vuepress/sidebar.ts
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { sidebar } from 'vuepress-theme-hope';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ARTICLES_ROOT = path.resolve(__dirname, '../articles');

// === 配置区域 ===

// 1. 资源目录黑名单：这些文件夹绝对不会出现在侧边栏里
const IGNORED_DIRS = ['assets', 'images', 'img', 'components', 'utils'];

/**
 * 核心逻辑：获取某个目录下的“纯净”文件列表
 * 作用：替代 "structure"，手动排除 README 和 资源目录
 */
function getChildrenList(dirPath) {
  if (!fs.existsSync(dirPath)) return [];

  // 读取目录内容并排序（防止顺序乱跳）
  const files = fs.readdirSync(dirPath, { withFileTypes: true })
    .sort((a, b) => a.name.localeCompare(b.name));

  const items = [];

  for (const file of files) {
    const fileName = file.name;

    // 过滤 1: 排除隐藏文件
    if (fileName.startsWith('.')) continue;

    // 过滤 2: 强制排除 README.md (无论大小写)
    if (fileName.toLowerCase() === 'readme.md') continue;

    // 处理文件夹 (Page Bundle)
    if (file.isDirectory()) {
      // 过滤 3: 排除资源目录 (assets, img 等)
      if (IGNORED_DIRS.includes(fileName.toLowerCase())) continue;

      // 添加目录，注意必须加尾部斜杠，表示这是一个分组/页面包
      items.push(fileName + "/");
    }
    // 处理 Markdown 文件
    else if (fileName.endsWith('.md')) {
      items.push(fileName);
    }
  }

  return items;
}

function generateSidebarConfig() {
  const sidebarConfig = {};

  if (!fs.existsSync(ARTICLES_ROOT)) return sidebarConfig;

  // 1. 扫描一级目录 (Physics...)
  const topLevelDirs = fs.readdirSync(ARTICLES_ROOT, { withFileTypes: true });

  for (const topDirent of topLevelDirs) {
    if (topDirent.isDirectory() && !topDirent.name.startsWith('.')) {
      const topDirPath = path.join(ARTICLES_ROOT, topDirent.name);

      // 2. 扫描二级目录 (Nonlinear...) -> 这是侧边栏的“根”
      const secondLevelDirs = fs.readdirSync(topDirPath, { withFileTypes: true });

      for (const secondDirent of secondLevelDirs) {
        if (secondDirent.isDirectory() && !secondDirent.name.startsWith('.')) {

          const topicPath = path.join(topDirPath, secondDirent.name);
          const urlKey = `/articles/${topDirent.name}/${secondDirent.name}/`;

          // 3. 关键改变：不再写 "structure"
          // 而是调用函数，生成一个经过过滤的纯净数组
          sidebarConfig[urlKey] = getChildrenList(topicPath);
        }
      }
    }
  }

  return sidebarConfig;
}

export default sidebar(generateSidebarConfig());