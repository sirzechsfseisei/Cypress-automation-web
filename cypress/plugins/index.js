module.exports = (on, config) => {
    on('before:browser:launch', (browser = {}, launchOptions) => {
      if (browser.name === 'chrome' && browser.isHeadless) {
        // pengaturan tambahan untuk Chrome headless
        launchOptions.args.push('--disable-gpu');
        launchOptions.args.push('--allow-insecure-localhost');
        launchOptions.args.push('--allow-running-insecure-content');
        launchOptions.args.push('--autoplay-policy=no-user-gesture-required');
        launchOptions.args.push('--use-fake-ui-for-media-stream');
        launchOptions.args.push('--use-fake-device-for-media-stream');
        launchOptions.args.push('--enable-experimental-web-platform-features');
        launchOptions.args.push('--disable-features=BlockInsecurePrivateNetworkRequests');
        launchOptions.args.push('--disable-notifications');
        launchOptions.args.push('--disable-geolocation')
  
        launchOptions.preferences.default['profile.default_content_setting_values.geolocation'] = 1;
        launchOptions.preferences.default['profile.default_content_setting_values.notifications'] = 1;
  
        return launchOptions
      }
  
      if (browser.name === 'chrome') {
        // pengaturan untuk Chrome non-headless
        launchOptions.args.push('--use-fake-ui-for-media-stream')
        launchOptions.args.push('--use-fake-device-for-media-stream')
        launchOptions.args.push('--disable-geolocation')
  
        launchOptions.preferences.default['profile.default_content_setting_values.geolocation'] = 1;
        launchOptions.preferences.default['profile.default_content_setting_values.notifications'] = 1;
  
        return launchOptions
      }
  
      if (browser.name === 'firefox') {
        launchOptions.preferences['permissions.default.desktop-notification'] = 1;
        launchOptions.preferences['permissions.default.geo'] = 1;
  
        return launchOptions;
      }
  
      return launchOptions
    })
  }