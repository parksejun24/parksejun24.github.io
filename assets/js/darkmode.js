function toggleDarkMode() {
    const DARK_CLASS = 'dark';

    var body = document.querySelector("body");
    if (body.classList.contains(DARK_CLASS)) {
        setCookie('theme', 'light');
        body.classList.remove(DARK_CLASS);
        chatLightThemeChanger();
    } else {
        setCookie('theme', 'dark');
        body.classList.add(DARK_CLASS);
        chatDarkThemeChanger();
    }
}

function chatDarkThemeChanger() {
    var head = document.querySelector('.post-container');
    var child = head.querySelector('.utterances');
    console.log(child);
    if (child) {
        head.removeChild(child);
    }
    var chat = document.createElement('script');
    var str = "id post-chat src https://utteranc.es/client.js repo parksejun24/parksejun24.github.io issue-term pathname theme photon-dark crossorigin anonymous async true";
    var arr = str.split(' ');
    for (var i = 0; i < 7; i++) {
        chat.setAttribute(arr[i * 2], arr[i * 2 + 1]);
    }
    document.querySelector('.post-container').appendChild(chat);
}

function chatLightThemeChanger() {
    var head = document.querySelector('.post-container');
    var child = head.querySelector('.utterances');
    console.log(child);
    if (child) {
        head.removeChild(child);
    }
    var chat = document.createElement('script');
    var str = "id post-chat src https://utteranc.es/client.js repo parksejun24/parksejun24.github.io issue-term pathname theme boxy-light crossorigin anonymous async true";
    var arr = str.split(' ');
    for (var i = 0; i < 7; i++) {
        chat.setAttribute(arr[i * 2], arr[i * 2 + 1]);
    }
    document.querySelector('.post-container').appendChild(chat);
}

function getCookie(name) {
    var v = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
    return v ? v[2] : null;
}
function setCookie(name, value, days) {
    var d = new Date;
    d.setTime(d.getTime() + 24 * 60 * 60 * 1000 * days);
    document.cookie = name + "=" + value + ";path=/;SameSite=strict;expires=" + d.toGMTString();
}

function deleteCookie(name) { setCookie(name, '', -1); }


const userPrefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
var theme = getCookie('theme');
if ((theme === null && userPrefersDark) || theme === 'dark') {
    var checkDarkDone = false;
    function checkDark() {
        if (!checkDarkDone) {
            toggleDarkMode();
        }
        checkDarkDone = true;
    };

    function toggleSwitch() {
        document.querySelectorAll('.dark-mode-toggle').forEach(ti => ti.checked = true);
    };

    // Attempt both requestAnimationFrame and DOMContentLoaded, whichever comes first.
    if (window.requestAnimationFrame) window.requestAnimationFrame(checkDark);
    window.addEventListener('DOMContentLoaded', checkDark);

    window.addEventListener('DOMContentLoaded', toggleSwitch);
}
