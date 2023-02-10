/**
 *  Light Switch @version v0.1.4
 */

(function () {
    let lightSwitch = document.getElementById('lightSwitch');
    if (!lightSwitch) {
    return;
}

/**
 * @function darkmode
 * @summary: changes the theme to 'dark mode' and save settings to local stroage.
 * Basically, replaces/toggles every CSS class that has '-light' class with '-dark'
 */
function darkMode() {

    let status = document.getElementById('lightSwitch').checked;
    if(status == true){
        document.getElementById('breadcrumb').classList.remove('info');
        document.getElementById('breadcrumb').classList.add('bread');
        document.getElementById('main').classList.remove('main');
        document.getElementById('fondoMain').classList.remove('fondo');
        document.getElementById('fondoMain').classList.add('fondo2');
        document.getElementById('fondoSidebar').classList.remove('fondo');
        document.getElementById('fondoSidebar').classList.add('fondo2');
        document.getElementById('logo').removeAttribute('src');
        document.getElementById('logo').setAttribute('src','./assets/images/logoHeaderDark.svg')
    }

    document.querySelectorAll('.bg-light').forEach((element) => {
    element.className = element.className.replace(/-light/g, '-dark');
    });

    document.body.classList.add('bg-dark');

    if (document.body.classList.contains('text-dark')) {
    document.body.classList.replace('text-dark', 'text-light');
    } else {
    document.body.classList.add('text-light');
    }

    // Tables
    var tables = document.querySelectorAll('table');
    for (var i = 0; i < tables.length; i++) {
    // add table-dark class to each table
    tables[i].classList.add('table-dark');
    }

    // set light switch input to true
    if (!lightSwitch.checked) {
    lightSwitch.checked = true;
    }
    localStorage.setItem('lightSwitch', 'dark');
}

/**
 * @function lightmode
 * @summary: changes the theme to 'light mode' and save settings to local stroage.
 */
function lightMode() {
    let status = document.getElementById('lightSwitch').checked;
    if(status == false){
        //cambio background main
        document.getElementById('breadcrumb').classList.remove('bread');
        document.getElementById('breadcrumb').classList.add('info');
        document.getElementById('main').classList.add('main');
        //cambio de fondo de main y sidebar
        document.getElementById('fondoMain').classList.remove('fondo2');
        document.getElementById('fondoMain').classList.add('fondo');
        document.getElementById('fondoSidebar').classList.remove('fondo2');
        document.getElementById('fondoSidebar').classList.add('fondo');
        //cambio de logo
        document.getElementById('logo').removeAttribute('src');
        document.getElementById('logo').setAttribute('src','./assets/images/logoHeader.svg')
    }

    document.querySelectorAll('.bg-dark').forEach((element) => {
    element.className = element.className.replace(/-dark/g, '-light');
    });

    document.body.classList.add('bg-light');

    if (document.body.classList.contains('text-light')) {
    document.body.classList.replace('text-light', 'text-dark');
    } else {
    document.body.classList.add('text-dark');
    }

    /**
     *     document.getElementById('breadcrumb').classList.add('info');
    document.getElementById('main').classList.add('main');

     */

    // Tables
    var tables = document.querySelectorAll('table');
    for (var i = 0; i < tables.length; i++) {
    if (tables[i].classList.contains('table-dark')) {
        tables[i].classList.remove('table-dark');
    }
    }

    if (lightSwitch.checked) {
    lightSwitch.checked = false;
    }
    localStorage.setItem('lightSwitch', 'light');
}

/**
 * @function onToggleMode
 * @summary: the event handler attached to the switch. calling @darkMode or @lightMode depending on the checked state.
 */
function onToggleMode() {
    if (lightSwitch.checked) {
    darkMode();
    } else {
    lightMode();
    }
}

/**
 * @function getSystemDefaultTheme
 * @summary: get system default theme by media query
 */
function getSystemDefaultTheme() {
    const darkThemeMq = window.matchMedia('(prefers-color-scheme: dark)');
    if (darkThemeMq.matches) {
    return 'dark';
    }
    return 'light';
}

function setup() {
    var settings = localStorage.getItem('lightSwitch');
    if (settings == null) {
    settings = getSystemDefaultTheme();
    }

    if (settings == 'dark') {
    lightSwitch.checked = true;
    }

    lightSwitch.addEventListener('change', onToggleMode);
    onToggleMode();
}

setup();
})();