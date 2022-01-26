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
    templateUrl: 'Profile.html',
    selector: 'page-profile',
    styleUrls: ['Profile.scss']
})
export class Profile {
    public firstName: string;
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
    constructor(public Apperyio: ApperyioHelperService, private $aio_mappingHelper: ApperyioMappingHelperService, private $aio_changeDetector: ChangeDetectorRef) {}
    ionViewWillEnter() {
        this.pageIonViewWillEnter__j_29();
    }
    async pageIonViewWillEnter__j_29(event ? , currentItem ? ) {
        let __aio_tmp_val__: any;
        /* Invoke data service */
        this.invokeService_Users_me_service1();
    }
    private $aio_dataServices = {
        "Users_me_service1": "invokeService_Users_me_service1"
    }
    invokeService_Users_me_service1(cb ? : Function) {
        this.Apperyio.getService("Users_me_service").then(
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
                        /* Mapping */
                        this.firstName = this.$aio_mappingHelper.updateData(this.firstName, [], this.$aio_mappingHelper.getSubdata(res, ["FirstName"]));
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