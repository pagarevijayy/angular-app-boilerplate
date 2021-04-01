import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { UtilsService } from 'src/app/services';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss']
})
export class MainNavComponent {

  isHandset$: Observable<boolean> = this._utilService.isHandset$;

  constructor(
    private _utilService: UtilsService,
  ) { }

  poweredByEragapTech(){
    window.open(`https://eragap.co.in`, "_blank");
  }

}
