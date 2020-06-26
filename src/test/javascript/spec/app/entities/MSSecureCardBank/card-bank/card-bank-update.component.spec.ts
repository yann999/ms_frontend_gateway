import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { HttpResponse } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';
import { of } from 'rxjs';

import { MsgatewayTestModule } from '../../../../test.module';
import { CardBankUpdateComponent } from 'app/entities/MSSecureCardBank/card-bank/card-bank-update.component';
import { CardBankService } from 'app/entities/MSSecureCardBank/card-bank/card-bank.service';
import { CardBank } from 'app/shared/model/MSSecureCardBank/card-bank.model';

describe('Component Tests', () => {
  describe('CardBank Management Update Component', () => {
    let comp: CardBankUpdateComponent;
    let fixture: ComponentFixture<CardBankUpdateComponent>;
    let service: CardBankService;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [MsgatewayTestModule],
        declarations: [CardBankUpdateComponent],
        providers: [FormBuilder]
      })
        .overrideTemplate(CardBankUpdateComponent, '')
        .compileComponents();

      fixture = TestBed.createComponent(CardBankUpdateComponent);
      comp = fixture.componentInstance;
      service = fixture.debugElement.injector.get(CardBankService);
    });

    describe('save', () => {
      it('Should call update service on save for existing entity', fakeAsync(() => {
        // GIVEN
        const entity = new CardBank(123);
        spyOn(service, 'update').and.returnValue(of(new HttpResponse({ body: entity })));
        comp.updateForm(entity);
        // WHEN
        comp.save();
        tick(); // simulate async

        // THEN
        expect(service.update).toHaveBeenCalledWith(entity);
        expect(comp.isSaving).toEqual(false);
      }));

      it('Should call create service on save for new entity', fakeAsync(() => {
        // GIVEN
        const entity = new CardBank();
        spyOn(service, 'create').and.returnValue(of(new HttpResponse({ body: entity })));
        comp.updateForm(entity);
        // WHEN
        comp.save();
        tick(); // simulate async

        // THEN
        expect(service.create).toHaveBeenCalledWith(entity);
        expect(comp.isSaving).toEqual(false);
      }));
    });
  });
});
