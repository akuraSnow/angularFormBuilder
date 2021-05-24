import { from } from 'rxjs';
import { FormBuilderService } from './form-builder/form-builder.service';
import { LocalServiceService } from './local-service/local-service.service';

export const allServices = [
    LocalServiceService,
    FormBuilderService
]

export const serviceList = [

    {
        name: 'formBuilder',
        type: FormBuilderService
    }
    
];