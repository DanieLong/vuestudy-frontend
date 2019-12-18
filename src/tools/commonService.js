export function httpUrlFormater(url, data) {
  url = url + '?';
  for (let key in data) {
    let param = key + '=' + data[key] + '&';
    url = url + param;
  }
  return url.substring(0, url.length - 1);
}

export function getUrlParam() {
  let urlParams = {};

  let params = location.href.split('?')[1];
  if (params) {
    let url = window.decodeURIComponent(params);
    params = url.split('&');
    params.forEach(item => {
      let key = item.split('=')[0];
      let value = item.replace(key + '=', '');
      urlParams[key] = value;
    });
  }

  return urlParams;
}

export function isCarNo(text) {
  let carNormal = /[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}[A-HJ-NP-Z0-9]{4}[A-HJ-NP-Z0-9挂学警港澳]{1}/;
  let carNoNew = /[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}(([0-9]{5}[DF])|([DF][A-HJ-NP-Z0-9][0-9]{4}))/;
  if (carNormal.test(text) || carNoNew.test(text)) {
    return true;
  } else {
    return false;
  }
}

/* export function isPhoneNo(phoneNo) {
  let _emp = /^\s*|\s$/g;
  phoneNo = phoneNo.replace(_emp, '');
  let _d = /^1[3578][01379]\d{8}$/g;
  let _l = /^1[34578][01256]\d{8}$/g;
  let _y = /^(134[012345678]\d{7}|1[34578][012356789]\d{8})$/g;
  if (_d.test(phoneNo)) {
    return 1;
  } else if (_l.test(phoneNo)) {
    return 2;
  } else if (_y.test(phoneNo)) {
    return 1;
  }
  return 0;
} */

export function isPhoneNo(phoneNo) {
  let phone = /^[1][1,2,3,4,5,6,7,8,9][0-9]{9}$/;

  return phone.test(phoneNo);
}
