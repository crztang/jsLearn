    // ==UserScript==
    // @name         qr_change
    // @namespace    http://tampermonkey.net/
    // @version      0.1
    // @description  测试
    // @author       lodge
    // @match        https://xsjkdk.hzvtc.edu.cn/index.php?c=home&m=schoolCode

    
    // @grant        unsafeWindow
    // @grant        GM_setValue
    // @grant        GM_getValue
    // @require      http://code.jquery.com/jquery-3.4.1.js
    // @run-at       document-end
    // ==/UserScript==

    'use strict';

    var window = unsafeWindow
    var url = location.pathname
    //window.alert("测试啊");
    $("p:contains(学生学号)").css("text-decoration", "underline");