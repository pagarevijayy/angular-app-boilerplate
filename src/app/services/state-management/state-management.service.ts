import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { UtilsService } from '../utils/utils.service';

@Injectable({
  providedIn: 'root'
})
export class StateManagementService {

  // private homepageItems = new BehaviorSubject<any>(this.setHomepageItems());
  // homepageItemsBroadcast$ = this.homepageItems.asObservable();


  constructor(
    // private _utilService: UtilsService,
  ) { }

  // setHomepageItems() {
  //   const homepageDataSessionStorage = this._utilService.getDataFromSessionStorage('homepageItems');
  //   return homepageDataSessionStorage;
  // }

  // updateHomepageItems(data: any, sessionStorageLabel: string) {
  //   // update the data value
  //   this.homepageItems.next(data);

  //   // store in session storage
  //   this._utilService.setDataIntoSessionStorage(data, sessionStorageLabel);
  // }

}
