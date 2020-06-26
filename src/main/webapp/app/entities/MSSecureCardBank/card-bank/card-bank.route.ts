import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Resolve, ActivatedRouteSnapshot, Routes, Router } from '@angular/router';
import { Observable, of, EMPTY } from 'rxjs';
import { flatMap } from 'rxjs/operators';

import { UserRouteAccessService } from 'app/core/auth/user-route-access-service';
import { ICardBank, CardBank } from 'app/shared/model/MSSecureCardBank/card-bank.model';
import { CardBankService } from './card-bank.service';
import { CardBankComponent } from './card-bank.component';
import { CardBankDetailComponent } from './card-bank-detail.component';
import { CardBankUpdateComponent } from './card-bank-update.component';

@Injectable({ providedIn: 'root' })
export class CardBankResolve implements Resolve<ICardBank> {
  constructor(private service: CardBankService, private router: Router) {}

  resolve(route: ActivatedRouteSnapshot): Observable<ICardBank> | Observable<never> {
    const id = route.params['id'];
    if (id) {
      return this.service.find(id).pipe(
        flatMap((cardBank: HttpResponse<CardBank>) => {
          if (cardBank.body) {
            return of(cardBank.body);
          } else {
            this.router.navigate(['404']);
            return EMPTY;
          }
        })
      );
    }
    return of(new CardBank());
  }
}

export const cardBankRoute: Routes = [
  {
    path: '',
    component: CardBankComponent,
    data: {
      authorities: ['ROLE_USER'],
      pageTitle: 'CardBanks'
    },
    canActivate: [UserRouteAccessService]
  },
  {
    path: ':id/view',
    component: CardBankDetailComponent,
    resolve: {
      cardBank: CardBankResolve
    },
    data: {
      authorities: ['ROLE_USER'],
      pageTitle: 'CardBanks'
    },
    canActivate: [UserRouteAccessService]
  },
  {
    path: 'new',
    component: CardBankUpdateComponent,
    resolve: {
      cardBank: CardBankResolve
    },
    data: {
      authorities: ['ROLE_USER'],
      pageTitle: 'CardBanks'
    },
    canActivate: [UserRouteAccessService]
  },
  {
    path: ':id/edit',
    component: CardBankUpdateComponent,
    resolve: {
      cardBank: CardBankResolve
    },
    data: {
      authorities: ['ROLE_USER'],
      pageTitle: 'CardBanks'
    },
    canActivate: [UserRouteAccessService]
  }
];
