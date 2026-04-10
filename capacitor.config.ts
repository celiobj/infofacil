import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.infofacil.app',
  appName: 'infoFacil',
  webDir: 'www',
  plugins: {
    CapacitorHttp: {
      enabled: true,
    },
  },
};

export default config;