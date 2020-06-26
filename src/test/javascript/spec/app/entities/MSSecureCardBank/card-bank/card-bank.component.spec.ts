import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { HttpHeaders, HttpResponse } from '@angular/common/http';

import { MsgatewayTestModule } from '../../../../test.module';
import { CardBankComponent } from 'app/entities/MSSecureCardBank/card-bank/card-bank.component';
import { CardBankService } from 'app/entities/MSSecureCardBank/card-bank/card-bank.service';
import { CardBank } from 'app/shared/model/MSSecureCardBank/card-bank.model';

describe('Component Tests', () => {
  describe('CardBank Management Component', () => {
    let comp: CardBankComponent;
    let fixture: ComponentFixture<CardBankComponent>;
    let service: CardBankService;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [MsgatewayTestModule],
        declarations: [CardBankComponent]
      })
        .overrideTemplate(CardBankComponent, '')
        .compileComponents();

      fixture = TestBed.createComponent(CardBankComponent);
      comp = fixture.componentInstance;
      service = fixture.debugElement.injector.get(CardBankService);
    });

    it('Should call load all on init', () => {
      // GIVEN
      const headers = new HttpHeaders().append('link', 'link;link');
      spyOn(service, 'query').and.returnValue(
        of(
          new HttpResponse({
            body: [new CardBank(123)],
            headers
          })
        )
      );

      // WHEN
      comp.ngOnInit();

      // THEN
      expect(service.query).toHaveBeenCalled();
      expect(comp.cardBanks && comp.cardBanks[0]).toEqual(jasmine.objectContaining({ id: 123 }));
    });
  });
});
