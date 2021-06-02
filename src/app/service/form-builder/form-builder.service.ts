import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { from, Observable } from 'rxjs';

@Injectable()
export class FormBuilderService {

  getFiles = new Observable();

  constructor(
    private http: HttpClient
  ) { }

  public getFilesList(name: string) {

    return new Observable((subscript)=> {

      let url = "app/action/" + name + ".json";
      this.http.get(url).subscribe((response:any) => {
        subscript.next(response);
        subscript.complete();
      });
    })
  }

  AsynchronousLoadingComponent(crf, formBuilder, BaseRowComponent, model) {
    let component: any = crf.resolveComponentFactory(BaseRowComponent);
    let ceateComponent: any = formBuilder.createComponent(component);

    for (const key in model) {
      if (Object.prototype.hasOwnProperty.call(model, key)) {
        const element = model[key];
        ceateComponent.instance[key] = element;
      }
    }
   
    return ceateComponent;
  }


  protected serialize(list: any []) {

    let newList = []
    if (!Array.isArray(list)) return newList;

    for (let index = 0; index < list.length; index++) {
      const element = list[index];
      let { index: i, order, col, row } = element.position;

      if (!newList[i]) {
        newList[i] = [];
      } 
      newList[i][order] = element
    }

    return newList;
  }
}
