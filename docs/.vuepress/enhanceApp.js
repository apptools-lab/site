var INTERVAL = 100;
var PRIVATE_URL =
  'https://private-alipayobjects.alipay.com/alipay-rmsdeploy-image/rmsportal/VmvVUItLdPNqKlNGuRHi.png?r=' + Date.now();

var timer;

// 隐藏当前环境无法访问的链接
function hideInternalNav() {
  var element = document.querySelector('a[href="https://appworks.alibaba-inc.com/"]');
  if (element) {
    element.parentElement.style.display = 'none';
    clearInterval(timer);
  }
}

var img = new Image();
img.src = PRIVATE_URL;
img.onerror = function () {
  timer = setInterval(hideInternalNav, INTERVAL);
};

// 避免外层配置变化导致定时器一直存在
window.onload = function () {
  if (timer) {
    hideInternalNav();
    clearInterval(timer);
  }
}
