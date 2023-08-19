import { platformNativeScript, runNativeScriptAngularApp } from '@nativescript/angular';

import { AppModule } from './app/app.module';
import { registerElement } from '@nativescript/angular';

registerElement('HTMLLabel', () => require('@nativescript-community/ui-label').Label);

runNativeScriptAngularApp({
  appModuleBootstrap: () => platformNativeScript().bootstrapModule(AppModule),
});

