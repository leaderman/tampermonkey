window.tm = window.tm || {};
window.tm.page = window.tm.page || {};

/**
 * 获取元素的文本
 * @param {string} selector 选择器
 * @returns {string} 文本
 */
window.tm.page.text = function (selector) {
  return document.querySelector(selector)?.textContent.trim() || "";
};

/**
 * 获取元素的数字
 * @param {string} selector 选择器
 * @returns {number} 数字或 NaN
 */
window.tm.page.number = function (selector) {
  let text = window.tm.page.text(selector);
  text = text.trim();

  return text ? Number(text) : NaN;
};

/**
 * 点击元素
 * @param {string} selector 选择器
 */
window.tm.page.click = function (selector) {
  document.querySelector(selector)?.click();
};
