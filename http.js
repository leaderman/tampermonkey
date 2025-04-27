window.tm = window.tm || {};
window.tm.http = window.tm.http || {};

window.tm.http._getHeader = function (headers, name) {
  if (!headers) {
    return null;
  }

  return (
    headers
      ?.split(/\r?\n/)
      .find((header) =>
        header.toLowerCase().startsWith(`${name.toLowerCase()}:`)
      )
      ?.split(":")[1]
      ?.trim() || null
  );
};

/**
 * 发送 GET 请求
 * @param {string} url  请求的 URL
 * @param {Object} headers  请求头
 * @returns {Promise<any>} 请求结果
 */
window.tm.http.get = function (url, headers = {}) {
  return new Promise((resolve, reject) => {
    GM_xmlhttpRequest({
      method: "GET",
      url,
      headers,
      responseType: "json",
      onload: function (response) {
        try {
          const requestId = window.tm.http._getHeader(
            response.responseHeaders,
            "x-request-id"
          );

          if (response.status !== 200) {
            return reject(
              new Error(`请求 ID: ${requestId} 状态码异常: ${response.status}`)
            );
          }

          const result = response.response;

          if (result && typeof result.code === "number") {
            if (result.code === 200) {
              resolve(result.data);
            } else {
              reject(
                new Error(
                  `请求 ID: ${requestId} 响应错误, 错误码: ${result.code}, 错误信息: ${result.message}`
                )
              );
            }
          } else {
            reject(
              new Error(
                `请求 ID: ${requestId} 响应错误, 格式异常, 内容: ${response.response}`
              )
            );
          }
        } catch (e) {
          reject(e);
        }
      },
      onerror: function (error) {
        reject(error);
      },
    });
  });
};

/**
 * 发送 POST 请求
 * @param {string} url  请求的 URL
 * @param {Object} data  请求体
 * @param {Object} headers  请求头
 * @returns {Promise<any>} 请求结果
 */
window.tm.http.post = function (url, data, headers = {}) {
  return new Promise((resolve, reject) => {
    headers = {
      "Content-Type": "application/json",
      ...headers,
    };

    GM_xmlhttpRequest({
      method: "POST",
      url,
      data: JSON.stringify(data),
      headers: headers,
      responseType: "json",
      onload: function (response) {
        try {
          const requestId = window.tm.http._getHeader(
            response.responseHeaders,
            "x-request-id"
          );

          if (response.status !== 200) {
            return reject(
              new Error(`请求 ID: ${requestId} 状态码异常: ${response.status}`)
            );
          }

          const result = response.response;

          if (result && typeof result.code === "number") {
            if (result.code === 200) {
              resolve(result.data);
            } else {
              reject(
                new Error(
                  `请求 ID: ${requestId} 响应错误, 错误码: ${result.code}, 错误信息: ${result.message}`
                )
              );
            }
          } else {
            reject(
              new Error(
                `请求 ID: ${requestId} 响应错误, 格式异常, 内容: ${response.response}`
              )
            );
          }
        } catch (e) {
          reject(e);
        }
      },
      onerror: function (error) {
        reject(error);
      },
    });
  });
};
