import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { allComponentList, componentsList } from './index';

import { COMPONENT_TOKEN_LIST } from '@myproject/model/injectToken/index';
import { FormsModule } from '@angular/forms';

import {MatRadioModule} from  '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';

@NgModule({
  declarations: [...allComponentList],
  imports: [CommonModule, FormsModule, MatRadioModule, MatCheckboxModule],
  exports: [...allComponentList],
  providers: [
    ...allComponentList,
    {
      provide: COMPONENT_TOKEN_LIST,
      multi: true,
      useValue: componentsList,
    },

  ],
})
export class ComponentsModule {}
