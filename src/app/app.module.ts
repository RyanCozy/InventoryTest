import {
    NgModule
} from '@angular/core';
import {
    BrowserModule
} from '@angular/platform-browser';
import {
    FormsModule
} from '@angular/forms';
import {
    HttpClientModule
} from '@angular/common/http';
import {
    IonicModule
} from '@ionic/angular';
import {
    IonicStorageModule
} from '@ionic/storage';
import {
    ApperyioModule
} from './scripts/apperyio/apperyio.module';
import {
    ApperyioDeclarablesModule
} from './scripts/apperyio/declarables/apperyio.declarables.module';
import {
    PipesModule
} from './scripts/pipes.module';
import {
    DirectivesModule
} from './scripts/directives.module';
import {
    ComponentsModule
} from './scripts/components.module';
import {
    CustomComponentsModule
} from './scripts/custom-components.module';
import {
    CustomModulesModule
} from './scripts/custom-modules.module';
import {
    app
} from './app';
import {
    AppRoutingModule
} from './app-routing.module';
import {
    ExportedClass as BarcodeScannerService
} from './scripts/custom/BarcodeScanner_Impl';
import {
    ExportedClass as Users_logout_service
} from './scripts/services/Users_logout_service';
import {
    ExportedClass as Users_login_service
} from './scripts/services/Users_login_service';
import {
    ExportedClass as Users_me_service
} from './scripts/services/Users_me_service';
import {
    BarcodeScanner
} from '@ionic-native/barcode-scanner/ngx';
import {
    WebView
} from '@ionic-native/ionic-webview/ngx';
import {
    Device
} from '@ionic-native/device/ngx';
import {
    SplashScreen
} from '@ionic-native/splash-screen/ngx';
import {
    StatusBar
} from '@ionic-native/status-bar/ngx';
import {
    Keyboard
} from '@ionic-native/keyboard/ngx';
var getIonicModuleConfig, getIonicStorageModuleConfig;
@NgModule({
    declarations: [
        app
    ],
    imports: [
        BrowserModule,
        FormsModule,
        IonicModule.forRoot((typeof getIonicModuleConfig === "function") ? getIonicModuleConfig() : undefined),
        HttpClientModule,
        ApperyioModule,
        PipesModule,
        DirectivesModule,
        ComponentsModule,
        ApperyioDeclarablesModule,
        CustomComponentsModule,
        CustomModulesModule,
        IonicStorageModule.forRoot((typeof getIonicStorageModuleConfig === "function") ? getIonicStorageModuleConfig() : undefined),
        AppRoutingModule
    ],
    bootstrap: [
        app
    ],
    entryComponents: [
        //app
    ],
    providers: [
        StatusBar,
        SplashScreen,
        WebView,
        Device,
        Keyboard,
        BarcodeScanner,
        BarcodeScannerService,
        Users_logout_service,
        Users_login_service,
        Users_me_service,
    ]
})
export class AppModule {}