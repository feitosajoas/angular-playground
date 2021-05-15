export class CookieHelper {
    static cookieName = 'auth_sc';

    static setAllPermissions() {
        localStorage.setItem(
            this.cookieName,
            JSON.stringify({
                strictlyNecessary: true,
				functional: true,
				targetting: true,
				performance: true,
            })
        );
    }

    static getCookie(){
        const cookieString = localStorage.getItem(this.cookieName);
        if (cookieString) {
            return JSON.parse(cookieString);
        }

        return {
            strictlyNecessary: true,
            functional: false,
            targetting: false,
            performance: false, 
        }
    }

    static checkCookie() {
        return localStorage.getItem(this.cookieName) ? false : true;
    }
}