/* Krishok Bondhu - Auth Helper */

const Auth = {
    TOKEN_KEY: 'kb_token',
    USER_KEY: 'kb_user',

    saveSession(token, user) {
        localStorage.setItem(this.TOKEN_KEY, token);
        localStorage.setItem(this.USER_KEY, JSON.stringify(user));
    },

    getToken() {
        return localStorage.getItem(this.TOKEN_KEY);
    },

    getUser() {
        const raw = localStorage.getItem(this.USER_KEY);
        return raw ? JSON.parse(raw) : null;
    },

    isLoggedIn() {
        return !!this.getToken();
    },

    logout() {
        localStorage.removeItem(this.TOKEN_KEY);
        localStorage.removeItem(this.USER_KEY);
        window.location.href = 'index.html';
    },

    authHeaders() {
        const token = this.getToken();
        return token ? { 'Authorization': 'Bearer ' + token } : {};
    }
};

function updateNavAuth() {
    const nav = document.querySelector('.nav-list');
    if (!nav) return;

    const existingBtn = document.querySelector('.nav-auth-item');
    if (existingBtn) existingBtn.remove();

    const li = document.createElement('li');
    li.className = 'nav-auth-item';

    if (Auth.isLoggedIn()) {
        const user = Auth.getUser();
        li.innerHTML = '<a href="#" id="navUserBtn" class="nav-user-btn">' +
            (user ? user.name.split(' ')[0] : 'Account') +
            ' <span class="nav-logout-icon">&#10005;</span></a>';
        nav.appendChild(li);
        document.getElementById('navUserBtn').addEventListener('click', function(e) {
            e.preventDefault();
            Auth.logout();
        });
    } else {
        li.innerHTML = '<a href="login.html" data-i18n="nav_login">Login</a>';
        nav.appendChild(li);
        if (typeof I18n !== 'undefined') {
            I18n.applyTranslations();
        }
    }
}

document.addEventListener('DOMContentLoaded', updateNavAuth);
