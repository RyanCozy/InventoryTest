import {
    Component
} from '@angular/core';
import {
    ChangeDetectorRef
} from '@angular/core';
import {
    ApperyioHelperService
} from './scripts/apperyio/apperyio_helper';
import {
    ApperyioMappingHelperService
} from './scripts/apperyio/apperyio_mapping_helper';
import {
    MenuController
} from '@ionic/angular';
import {
    NavController
} from '@ionic/angular';
import {
    Platform
} from '@ionic/angular';
import {
    ViewChild
} from '@angular/core';
import {
    SplashScreen
} from '@ionic-native/splash-screen/ngx';
import {
    StatusBar
} from '@ionic-native/status-bar/ngx';
import {
    $aio_empty_object
} from './scripts/interfaces';
@Component({
    templateUrl: 'app.html',
    selector: 'app-root',
    styleUrls: ['app.scss']
})
export class app {
    public currentItem: any = null;
    public mappingData: any = {};
    public __getMapping(_currentItem, property, defaultValue, isVariable ? , isSelected ? ) {
        return this.$aio_mappingHelper.getMapping(this.mappingData, _currentItem, property, defaultValue, isVariable, isSelected);
    }
    public __isPropertyInMapping(_currentItem, property) {
        return this.$aio_mappingHelper.isPropertyInMapping(this.mappingData, _currentItem, property);
    }
    public __setMapping(data: any = {}, keyName: string, propName ? : string): void {
        const changes = data.detail || {};
        if (propName) {
            this.mappingData = this.$aio_mappingHelper.updateData(this.mappingData, [keyName], changes[propName]);
        } else {
            this.mappingData = this.$aio_mappingHelper.updateData(this.mappingData, [keyName], changes.value);
        }
        this.$aio_changeDetector.detectChanges();
    }
    constructor(public Apperyio: ApperyioHelperService, private $aio_mappingHelper: ApperyioMappingHelperService, private $aio_changeDetector: ChangeDetectorRef, public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, private menuCtrl: MenuController) {
        // do not remove this code unless you know what you do
        this.platform.ready().then(() => {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            this.statusBar.styleDefault();
            this.splashScreen.hide();
        });
    }
    async menulistClick__j_3(event ? , currentItem ? ) {
        let __aio_tmp_val__: any;
        /* Menu close */
        this.Apperyio.getController("MenuController").close();
    }
    async logout_btnClick__j_17(event ? , currentItem ? ) {
        let __aio_tmp_val__: any;
        /* Invoke data service */
        this.invokeService_SideBar_Logout();
    }
    private $aio_dataServices = {
        "SideBar_Logout": "invokeService_SideBar_Logout"
    }
    invokeService_SideBar_Logout(cb ? : Function) {
        this.Apperyio.getService("Users_logout_service").then(
            async (service) => {
                if (!service) {
                    console.log("Error. Service was not found.");
                    return;
                }
                let data = {};
                let params = {};
                let headers = {};
                let __aio_tmp_val__: any;
                this.$aio_changeDetector.detectChanges();
                /* Mapping */
                headers = this.$aio_mappingHelper.updateData(headers, ['X-Appery-Session-Token'], __aio_tmp_val__ = await this.$aio_mappingHelper.getStorageValue("sessionToken", []));
                /* Present Loading */
                await (async () => {
                    let options = {
                        'animated': true,
                        'keyboardClose': true,
                        'message': 'Logging Out...',
                        'showBackdrop': true,
                        'spinner': 'circular',
                    }
                    let controller = this.Apperyio.getController('LoadingController');
                    const loading = await controller.create(options);
                    return await loading.present();
                })();
                service.execute({
                    data: data,
                    params: params,
                    headers: headers
                }).subscribe(
                    /* onsuccess */
                    async (res: any) => {
                        let mappingData: any = {};
                        /* Navigate to Page */
                        this.Apperyio.navigateTo('Login');
                        /* Dismiss loading */
                        await this.Apperyio.getController("LoadingController").dismiss();
                        this.mappingData = { ...this.mappingData,
                            ...mappingData
                        };
                        if (cb && typeof cb === "function") cb(res);
                    },
                    (err: any) => {
                        console.log(err);
                    }
                )
            }
        );
    }
}