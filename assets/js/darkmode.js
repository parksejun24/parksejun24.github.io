function toggleDarkMode() {
    const DARK_CLASS = 'dark';

    var body = document.querySelector("body");
    if (body.classList.contains(DARK_CLASS)) {
        setCookie('theme', 'light');
        body.classList.remove(DARK_CLASS);
    } else {
        setCookie('theme', 'dark');
        body.classList.add(DARK_CLASS);

        var chat = document.getElementById('post-chat');
        console.log(chat);
        chat.getAttribute('theme','photon-dark'); //댓글 창을 dark모드일때랑 light 모드일때를 구분해서 theme을 바꾸고 싶은데 script 태그를 getelement 함수로 불러오지 못함 이유가 뭐지?
        // var chat = document.getElementById('chatsystem');
        // console.log(chat);
        // chat.setAttribute('theme','photon-dark');
    }
}

function getCookie(name) {
    var v = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
    return v ? v[2] : null;
}
function setCookie(name, value, days) {
    var d = new Date;
    d.setTime(d.getTime() + 24*60*60*1000*days);
    document.cookie = name + "=" + value + ";path=/;SameSite=strict;expires=" + d.toGMTString();
}

function deleteCookie(name) { setCookie(name, '', -1); }


const userPrefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
var theme = getCookie('theme');
if ( (theme === null && userPrefersDark) || theme === 'dark') {
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
