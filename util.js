window.tm = window.tm || {};
window.tm.util = window.tm.util || {};

/**
 * 睡眠
 * @param {number} ms 睡眠时间，单位：毫秒
 * @returns {Promise<void>} Promise
 */
window.tm.util.sleep = function (ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

/**
 * 获取当前日期
 * @returns {string} 当前日期，格式：YYYY-MM-DD
 */
window.tm.util.getDate = function () {
  const now = new Date();

  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
};

/**
 * 获取当前时间
 * @returns {string} 当前时间，格式：HH:mm:ss
 */
window.tm.util.getTime = function () {
  const now = new Date();

  const hour = String(now.getHours()).padStart(2, "0");
  const minute = String(now.getMinutes()).padStart(2, "0");
  const second = String(now.getSeconds()).padStart(2, "0");

  return `${hour}:${minute}:${second}`;
};

/**
 * 获取当前日期和时间
 * @returns {string} 当前日期和时间，格式：YYYY-MM-DD HH:mm:ss
 */
window.tm.util.getDatetime = function () {
  const now = new Date();

  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");
  const hour = String(now.getHours()).padStart(2, "0");
  const minute = String(now.getMinutes()).padStart(2, "0");
  const second = String(now.getSeconds()).padStart(2, "0");

  return `${year}-${month}-${day} ${hour}:${minute}:${second}`;
};

/**
 * 判断当前时间是否在指定时间范围内，开始时间和结束时间必须位于同一天内
 * @param {string} start 开始时间，格式：HH:mm:ss，闭区间
 * @param {string} end 结束时间，格式：HH:mm:ss，闭区间
 * @returns {boolean} 如果当前时间在指定时间范围内，返回 true，否则返回 false
 */
window.tm.util.timeBetween = function (start, end) {
  const time = window.tm.util.getTime();

  return start <= time && time <= end;
};
