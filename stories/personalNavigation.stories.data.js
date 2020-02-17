import personalMenuTemplate from '!!raw-loader!../includes/templates/PersonalMenu.mustache';
import { htmluserlangattributes } from './utils';

const loggedOut = {
	'msg-label': 'Personal tools',
	'html-userlangattributes': htmluserlangattributes,
	'html-loggedin': '<li id="pt-anonuserpage">Not logged in</li>',
	'html-personal-tools': `<li id="pt-anontalk"><a href="/wiki/Special:MyTalk" title="Discussion about edits from this IP address [⌃⌥n]" accesskey="n">Talk</a></li><li id="pt-anoncontribs"><a href="/wiki/Special:MyContributions" title="A list of edits made from this IP address [⌃⌥y]" accesskey="y">Contributions</a></li><li id="pt-createaccount"><a href="/w/index.php?title=Special:CreateAccount&amp;returnto=Main+Page" title="You are encouraged to create an account and log in; however, it is not mandatory">Create account</a></li><li id="pt-login"><a href="/w/index.php?title=Special:UserLogin&amp;returnto=Main+Page" title="You're encouraged to log in; however, it's not mandatory. [⌃⌥o]" accesskey="o">Log in</a></li>`
};

const loggedInWithEcho = {
	'msg-label': 'Personal tools',
	'html-userlangattributes': htmluserlangattributes,
	'html-loggedin': '',
	'html-personal-tools': `<li id="pt-userpage"><a href="/wiki/User:Jdlrobson" dir="auto" title="Your user page [⌃⌥.]" accesskey=".">Jdlrobson</a></li><li id="pt-notifications-alert"><a href="/wiki/Special:Notifications" class="mw-echo-notifications-badge mw-echo-notification-badge-nojs oo-ui-icon-bell mw-echo-notifications-badge-all-read" data-counter-num="0" data-counter-text="0" title="Your alerts">Alerts (0)</a></li><li id="pt-notifications-notice"><a href="/wiki/Special:Notifications" class="mw-echo-notifications-badge mw-echo-notification-badge-nojs oo-ui-icon-tray" data-counter-num="3" data-counter-text="3" title="Your notices">Notices (3)</a></li><li id="pt-mytalk"><a href="/wiki/User_talk:Jdlrobson" title="Your talk page [⌃⌥n]" accesskey="n">Talk</a></li><li id="pt-sandbox"><a href="/wiki/User:Jdlrobson/sandbox" title="Your sandbox">Sandbox</a></li><li id="pt-preferences"><a href="/wiki/Special:Preferences" title="Your preferences">Preferences</a></li><li id="pt-betafeatures"><a href="/wiki/Special:Preferences#mw-prefsection-betafeatures" title="Beta features">Beta</a></li><li id="pt-watchlist"><a href="/wiki/Special:Watchlist" title="A list of pages you are monitoring for changes [⌃⌥l]" accesskey="l">Watchlist</a></li><li id="pt-mycontris"><a href="/wiki/Special:Contributions/Jdlrobson" title="A list of your contributions [⌃⌥y]" accesskey="y">Contributions</a></li><li id="pt-logout"><a href="/w/index.php?title=Special:UserLogout&amp;returnto=Main+Page&amp;returntoquery=useskin%3Dvector" title="Log out">Log out</a></li>`
};

const loggedInWithULS = {
	'msg-label': 'Personal tools',
	'html-userlangattributes': htmluserlangattributes,
	'html-lang-selector': '<li class="uls-trigger active"><a href="#">English</a></li>',
	'html-loggedin': '',
	'html-personal-tools': `<li id="pt-userpage"><a href="/wiki/User:Jdlrobson" dir="auto" title="Your user page [⌃⌥.]" accesskey=".">Jdlrobson</a></li><li id="pt-notifications-alert"><a href="/wiki/Special:Notifications" class="mw-echo-notifications-badge mw-echo-notification-badge-nojs oo-ui-icon-bell mw-echo-notifications-badge-all-read" data-counter-num="0" data-counter-text="0" title="Your alerts">Alerts (0)</a></li><li id="pt-notifications-notice"><a href="/wiki/Special:Notifications" class="mw-echo-notifications-badge mw-echo-notification-badge-nojs oo-ui-icon-tray" data-counter-num="3" data-counter-text="3" title="Your notices">Notices (3)</a></li><li id="pt-mytalk"><a href="/wiki/User_talk:Jdlrobson" title="Your talk page [⌃⌥n]" accesskey="n">Talk</a></li><li id="pt-sandbox"><a href="/wiki/User:Jdlrobson/sandbox" title="Your sandbox">Sandbox</a></li><li id="pt-preferences"><a href="/wiki/Special:Preferences" title="Your preferences">Preferences</a></li><li id="pt-betafeatures"><a href="/wiki/Special:Preferences#mw-prefsection-betafeatures" title="Beta features">Beta</a></li><li id="pt-watchlist"><a href="/wiki/Special:Watchlist" title="A list of pages you are monitoring for changes [⌃⌥l]" accesskey="l">Watchlist</a></li><li id="pt-mycontris"><a href="/wiki/Special:Contributions/Jdlrobson" title="A list of your contributions [⌃⌥y]" accesskey="y">Contributions</a></li><li id="pt-logout"><a href="/w/index.php?title=Special:UserLogout&amp;returnto=Main+Page&amp;returntoquery=useskin%3Dvector" title="Log out">Log out</a></li>`
};

const PERSONAL_MENU_TEMPLATE_DATA = {
	loggedOut,
	loggedInWithEcho,
	loggedInWithULS
};

export { PERSONAL_MENU_TEMPLATE_DATA, personalMenuTemplate };
