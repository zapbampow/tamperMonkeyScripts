// ==UserScript==
// @name         Remove YouTube Shorts, Playables, Breaking News
// @namespace    https://github.com/zapbampow
// @version      0.1
// @description  Removes YouTube Shorts, Breaking News, and YouTube Playables, leaving only real videos
// @author       Clayton Ingalls
// @match        http://*.youtube.com/*
// @match        https://*.youtube.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=youtube.com
// @grant        none

// Credit where it is due: This is a broadening of hallzy's script at https://github.com/hallzy/remove-youtube-shorts/blob/master/remove-youtube-shorts.user.js

// ==/UserScript==
(() => {
  const justShowVideos = () => {
    Array.from(
      document.querySelectorAll(
        `ytd-rich-section-renderer.style-scope.ytd-rich-grid-renderer`
      )
    ).forEach((item) => {
      item.remove();
    });
  };

  const observer = new MutationObserver(removeShorts);
  observer.observe(document, {
    childList: true,
    subtree: true,
  });

  justShowVideos();
})();
