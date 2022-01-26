import {
    Component
} from '@angular/core';
import {
    ChangeDetectorRef
} from '@angular/core';
import {
    ApperyioHelperService
} from '../scripts/apperyio/apperyio_helper';
import {
    ApperyioMappingHelperService
} from '../scripts/apperyio/apperyio_mapping_helper';
import {
    $aio_empty_object
} from '../scripts/interfaces';
import {
    ViewChild
} from '@angular/core';
@Component({
    templateUrl: 'Login.html',
    selector: 'page-login',
    styleUrls: ['Login.scss']
})
export class Login {
    public email: string;
    public password: string;
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
    @ViewChild('j_24_el', {
        static: false
    }) public j_24_el;
    @ViewChild('j_25_el', {
        static: false
    }) public j_25_el;
    @ViewChild('form', {
        static: true
    }) public form;
    constructor(public Apperyio: ApperyioHelperService, private $aio_mappingHelper: ApperyioMappingHelperService, private $aio_changeDetector: ChangeDetectorRef) {}
    async formNgSubmit__j_22(event ? , currentItem ? ) {
        if (this.form.valid) {
            let __aio_tmp_val__: any;
            /* Invoke data service */
            this.invokeService_LoginService();
        }
    }
    async loginbuttonClick__j_27(event ? , currentItem ? ) {
        let __aio_tmp_val__: any;
        /* Form Submit */
        if (this.form && this.form.ngSubmit) this.form.ngSubmit.emit();
    }
    private $aio_dataServices = {
        "LoginService": "invokeService_LoginService"
    }
    invokeService_LoginService(cb ? : Function) {
        this.Apperyio.getService("Users_login_service").then(
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
                data = this.$aio_mappingHelper.updateData(data, ["username"], this.$aio_mappingHelper.getComponentPropValue.call(this, 'j_24', 'ionic5input', 'value'));
                data = this.$aio_mappingHelper.updateData(data, ["password"], this.$aio_mappingHelper.getComponentPropValue.call(this, 'j_25', 'ionic5input', 'value'));
                /* Present Loading */
                await (async () => {
                    let options = {
                        'animated': true,
                        'keyboardClose': true,
                        'message': 'Please wait...',
                        'showBackdrop': true,
                        'spinner': 'crescent',
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
                        /* Dismiss loading */
                        await this.Apperyio.getController("LoadingController").dismiss();
                        /* Mapping */
                        await this.$aio_mappingHelper.setStorageValue("sessionToken", [], this.$aio_mappingHelper.getSubdata(res, ["sessionToken"]));
                        /* Present Alert */
                        await (async () => {
                            let options = {
                                'header': 'Success',
                                'message': 'Success',
                                'buttons': [{
                                    'text': 'OK',
                                }]
                            }
                            let controller = this.Apperyio.getController('AlertController');
                            const alert = await controller.create(options);
                            return await alert.present();
                        })();
                        /* Navigate to Page */
                        this.Apperyio.navigateTo('Home', this.email);
                        this.mappingData = { ...this.mappingData,
                            ...mappingData
                        };
                        if (cb && typeof cb === "function") cb(res);
                    },
                    /* onerror */
                    async (err: any) => {
                        /* Dismiss loading */
                        await this.Apperyio.getController("LoadingController").dismiss();
                        /* Present Alert */
                        await (async () => {
                            let options = {
                                'header': 'Error',
                                'message': 'Incorrect User or Password',
                                'buttons': [{
                                    'text': 'OK',
                                }]
                            }
                            let controller = this.Apperyio.getController('AlertController');
                            const alert = await controller.create(options);
                            return await alert.present();
                        })();
                    }
                )
            }
        );
    }
}