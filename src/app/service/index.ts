import { from } from 'rxjs';
import { FormBuilderService } from './form-builder/form-builder.service';
import { LocalServiceService } from './local-service/local-service.service';

import { ChangeRadioService } from './reducer/change-radio.service';

export const allServices = [
    LocalServiceService,
    FormBuilderService,
    ChangeRadioService
]

export const serviceList = [

    {
        name: 'formBuilder',
        type: FormBuilderService
    },
    {
        name: 'changeRadio',
        type: ChangeRadioService
    }
];