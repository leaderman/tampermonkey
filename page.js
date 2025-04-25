/**
 * 获取元素的文本内容
 * @param {string} selector 选择器
 * @returns {string} 文本内容
 */
window.tm.page.text = function (selector) {
  return document.querySelector(selector)?.textContent.trim() || "";
};

/**
 * 点击元素
 * @param {string} selector 选择器
 */
window.tm.page.click = function (selector) {
  document.querySelector(selector)?.click();
};
