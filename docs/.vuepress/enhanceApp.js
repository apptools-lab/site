var INTERVAL = 100;
var PRIVATE_URL =
  'https://private-alipayobjects.alipay.com/alipay-rmsdeploy-image/rmsportal/VmvVUItLdPNqKlNGuRHi.png?r=' + Date.now();

var img = new Image();
img.src = PRIVATE_URL;
img.onerror = function () {
  var timer = setInterval(function () {
    var element = document.querySelector('a[href="https://appworks.alibaba-inc.com/"]');
    if (element) {
      // 隐藏无法访问的链接
      element.parentElement.style.display = 'none';
      clearInterval(timer);
    }
  }, INTERVAL);
};
