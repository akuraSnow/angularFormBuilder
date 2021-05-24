
import { FormBuilderComponent } from './form-builder/form-builder.component';
import { RadioButtonComponent } from './ui/radio-button/radio-button.component';
import { CheckBoxComponent } from './ui/check-box/check-box.component'
import BaseRowComponent from './form-builder/base-row/base-row.component';
import  BaseColComponent from './form-builder/base-col/base-col.component';

export const allComponentList = [
    FormBuilderComponent,
    RadioButtonComponent,
    CheckBoxComponent,
    BaseRowComponent,
    BaseColComponent
];


export const componentsList = [
    {
        name: 'radioButton',
        type: RadioButtonComponent
    },
    {
        name: 'checkbox',
        type: CheckBoxComponent
    },
]