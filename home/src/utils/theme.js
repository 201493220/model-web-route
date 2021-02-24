import { router } from "../life-cycle";
export const chooseTheme = function(themeVal) {
  let color = themeVal ? themeVal : "green";
  let skinPathBase = window.__POWERED_BY_QIANKUN__
    ? window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__ + "theme/" + color
    : router.options.base + "/theme/" + color;
  console.info("===========skinPathBase is " + skinPathBase + "==========");
  let cssArray = [
    {
      id: "base_color",
      url: skinPathBase + "/index.css",
    },
    {
      id: "custom_color",
      url: skinPathBase + "/custom.css",
    },
  ];
  cssArray.forEach((el) => {
    let skinLink = document.getElementById(el.id);
    if (skinLink) {
      skinLink.href = el.url;
    } else {
      let head = document.getElementsByTagName("head")[0];
      let link = document.createElement("link");
      link.href = el.url;
      link.rel = "stylesheet";
      link.type = "text/css";
      link.id = el.id;
      head.appendChild(link);
    }
  });
};
