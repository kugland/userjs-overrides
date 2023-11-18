///////////////////////
// user.js overrides //
///////////////////////

// 0201
user_pref("geo.provider.network.logging.enabled", true);

// 0601
user_pref("network.prefetch-next", true);

// 0602
user_pref("network.dns.disablePrefetch", false);
user_pref("network.dns.disablePrefetchFromHTTPS", false);

// 0801
user_pref("keyword.enabled", true);

// 1402
user_pref("layout.css.font-visibility.private", 1);
user_pref("layout.css.font-visibility.trackingprotection", 1);

// 1601
user_pref("network.http.referer.XOriginPolicy", 0);

// 2022
user_pref("media.eme.enabled", true);

// 2811
user_pref("privacy.clearOnShutdown.cache", false);
user_pref("privacy.clearOnShutdown.downloads", false);
user_pref("privacy.clearOnShutdown.formdata", false);
user_pref("privacy.clearOnShutdown.history", false);
user_pref("privacy.clearOnShutdown.sessions", false);

// 2815
user_pref("privacy.clearOnShutdown.cookies", false);
user_pref("privacy.clearOnShutdown.offlineApps", false);

// 4501
user_pref("privacy.resistFingerprinting", false);

// 4504
user_pref("privacy.resistFingerprinting.letterboxing", false);

// 4520
user_pref("webgl.disabled", false);

// 5003
user_pref("signon.rememberSignons", false);

// 5016
// 0=desktop, 1=downloads (default), 2=last used
user_pref("browser.download.folderList", 1);

// 5017
user_pref("extensions.formautofill.addresses.enabled", false);
user_pref("extensions.formautofill.creditCards.enabled", false);
user_pref("extensions.formautofill.heuristics.enabled", false);

// 5506
user_pref("javascript.options.wasm", true);

// 9000
user_pref("extensions.pocket.enabled", false);
user_pref("extensions.screenshots.disabled", false);
user_pref("identity.fxaccounts.enabled", false);

///////////////////
// Other options //
///////////////////

// Disable spell checker
user_pref("layout.spellcheckDefault", 0);
user_pref("extensions.spellcheck.inline.max-misspellings", 0);

// Set default fonts
user_pref("font.name.sans-serif.x-western", "Noto Sans");
user_pref("font.name.serif.x-western", "Times New Roman");
user_pref("font.name.monospace.x-western", "JetBrains Mono");

// Disable DNS caching completely
user_pref("network.dnsCacheExpiration", 0);

// Show tabs on fullscreen mode
user_pref("browser.fullscreen.autohide", false);

// Disable translations
user_pref("browser.translations.automaticallyPopup", false);
user_pref("browser.translations.enable", false);
