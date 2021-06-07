import { from } from 'rxjs';
import { BaseActionService } from './reducer/baseAction/baseAction.service';
import { FormBuilderService } from './form-builder/form-builder.service';
import { LocalServiceService } from './local-service/local-service.service';
import { BaseDataService } from './reducer/baseData/baseData.service';

import { ChangeRadioService } from './reducer/change-radio.service';
import { LoadDataService } from './action/loadData.service';
import { GetRadioListService } from './action/get-radio-list.service';
import { GetCheckboxListService } from './action/get-checkbox-list.service';

export const allServices = [
    LocalServiceService,
    FormBuilderService,
    ChangeRadioService,
    GetRadioListService,
    GetCheckboxListService,
    BaseActionService,
    BaseDataService
]

export const serviceList = [
    {
        name: 'baseAction',
        type: BaseActionService
    },
    {
        name: 'baseData',
        type: BaseDataService
    },

    {
        name: 'formBuilder',
        type: FormBuilderService
    },
    {
        name: 'changeRadio',
        type: ChangeRadioService
    },
    {
        name: 'loadData',
        type: LoadDataService
    },
    {
        name: 'getRadioList',
        type: GetRadioListService
    },
    {
        name: 'getcheckboxList',
        type: GetCheckboxListService
    },
];