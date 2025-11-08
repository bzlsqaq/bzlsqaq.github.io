import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { sidebar } from 'vuepress-theme-hope';

// 处理 ES Module 中没有 __dirname 的问题
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 文章根目录
const ARTICLES_ROOT = path.resolve(__dirname, '../articles');

/**
 * 同步扫描目录，生成最终的 sidebar 配置
 * @returns {Object} - { "/articles/.../": "structure", ... }
 */
function generateSidebarConfig() {
  const sidebarConfig = {};

  // 1. 读取一级目录 (physics, algorithm, ...)
  const topLevelDirs = fs.readdirSync(ARTICLES_ROOT, { withFileTypes: true });

  for (const topDirent of topLevelDirs) {
    if (topDirent.isDirectory()) {
      const topDirPath = path.join(ARTICLES_ROOT, topDirent.name);
      
      // 2. 读取二级目录 (QuantumStatisticalPhysics, ...)
      const secondLevelDirs = fs.readdirSync(topDirPath, { withFileTypes: true });

      for (const secondDirent of secondLevelDirs) {
        if (secondDirent.isDirectory()) {
          // 3. 拼接路径并生成配置项
          const fullUrlPath = `/articles/${topDirent.name}/${secondDirent.name}/`;
          sidebarConfig[fullUrlPath] = 'structure';
        }
      }
    }
  }

  return sidebarConfig;
}

// 生成并导出配置
const sidebarConfig = generateSidebarConfig();
export default sidebar(sidebarConfig);