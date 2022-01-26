 import { Injectable } from '@angular/core';
import _ from "lodash";
import { Observable } from "rxjs";
import { ApperyioHelperService } from '../apperyio/apperyio_helper';
import { EntityApiService } from '../apperyio/apperyio';
import { BarcodeScanner, BarcodeScannerOptions } from '@ionic-native/barcode-scanner/ngx';

@Injectable()
class BarcodeScannerService {
    constructor(private entityAPI: EntityApiService, private Apperyio: ApperyioHelperService, private barcodeScanner: BarcodeScanner) {
    }
    
    private getBoolean(val) {
        if (typeof val === "boolean") {
            return val;
        }
        if (typeof val === "string") {
            return (val === "false" || !val) ? false : true;
        }
        return !!val;
    }
    
    execute(reqOpts?: any) {
        return new Observable((observer) => {
            try {
                (async () => {
                    let srvName = await this.Apperyio.getGSNameByImpl(this);
                    if (!srvName) {
                        observer.error("Service was not found");
                        return;
                    }
                    let service = this.entityAPI.get(srvName),
                        echo = service.echo;
                    if (_.isUndefined(echo)) {
                        let requestData = _.extend({}, service.request.data, reqOpts.data);
                        
                        let options: BarcodeScannerOptions = {};
                        
                        if (requestData.preferFrontCamera != undefined && requestData.preferFrontCamera !== "") {
                            options.preferFrontCamera = this.getBoolean(requestData.preferFrontCamera);
                        }
                        
                        if (requestData.showFlipCameraButton != undefined && requestData.showFlipCameraButton !== "") {
                            options.showFlipCameraButton = this.getBoolean(requestData.showFlipCameraButton);
                        }
                        
                        if (requestData.showTorchButton != undefined && requestData.showTorchButton !== "") {
                            options.showTorchButton = this.getBoolean(requestData.showTorchButton);
                        }
                        
                        if (requestData.disableAnimations != undefined && requestData.disableAnimations !== "") {
                            options.disableAnimations = this.getBoolean(requestData.disableAnimations);
                        }
                        
                        if (requestData.disableSuccessBeep != undefined && requestData.disableSuccessBeep !== "") {
                            options.disableSuccessBeep = this.getBoolean(requestData.disableSuccessBeep);
                        }
                        
                        if (requestData.torchOn != undefined && requestData.torchOn !== "") {
                            options.torchOn = this.getBoolean(requestData.torchOn);
                        }
                        
                        let resultDisplayDuration = parseInt(requestData.resultDisplayDuration);
                        if (!isNaN(resultDisplayDuration) && resultDisplayDuration >= 0) {
                            options.resultDisplayDuration = resultDisplayDuration;
                        }

                        if (requestData.prompt) {
                            options.prompt = requestData.prompt;
                        }
                        
                        if (requestData.formats) {
                            options.formats = requestData.formats;
                        }
                        
                        if (requestData.orientation === "portrait" || requestData.orientation === "landscape") {
                            options.orientation = requestData.orientation;
                        }
                        this.barcodeScanner.scan(options).then(barcodeData => {
                            observer.next(barcodeData);
                            observer.complete();
                        }).catch(err => {
                            observer.error(err);
                        });
                    } else {
                        try {
                            echo = JSON.parse(echo);
                        } catch (e) {
                        }
    
                        observer.next(echo);
                        observer.complete();
                    }
                })()
            } catch (e) {
                observer.error("Some error");
            }
        });
    }
}

/*
    Service class should be exported as ExportedClass
*/
export { BarcodeScannerService as ExportedClass };