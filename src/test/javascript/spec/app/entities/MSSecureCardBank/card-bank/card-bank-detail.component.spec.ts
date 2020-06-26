import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

import { MsgatewayTestModule } from '../../../../test.module';
import { CardBankDetailComponent } from 'app/entities/MSSecureCardBank/card-bank/card-bank-detail.component';
import { CardBank } from 'app/shared/model/MSSecureCardBank/card-bank.model';

describe('Component Tests', () => {
  describe('CardBank Management Detail Component', () => {
    let comp: CardBankDetailComponent;
    let fixture: ComponentFixture<CardBankDetailComponent>;
    const route = ({ data: of({ cardBank: new CardBank(123) }) } as any) as ActivatedRoute;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [MsgatewayTestModule],
        declarations: [CardBankDetailComponent],
        providers: [{ provide: ActivatedRoute, useValue: route }]
      })
        .overrideTemplate(CardBankDetailComponent, '')
        .compileComponents();
      fixture = TestBed.createComponent(CardBankDetailComponent);
      comp = fixture.componentInstance;
    });

    describe('OnInit', () => {
      it('Should load cardBank on init', () => {
        // WHEN
        comp.ngOnInit();

        // THEN
        expect(comp.cardBank).toEqual(jasmine.objectContaining({ id: 123 }));
      });
    });
  });
});
