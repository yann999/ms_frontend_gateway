import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { SERVER_API_URL } from 'app/app.constants';
import { createRequestOption } from 'app/shared/util/request-util';
import { ICardBank } from 'app/shared/model/MSSecureCardBank/card-bank.model';

type EntityResponseType = HttpResponse<ICardBank>;
type EntityArrayResponseType = HttpResponse<ICardBank[]>;

@Injectable({ providedIn: 'root' })
export class CardBankService {
  public resourceUrl = SERVER_API_URL + 'services/mssecurecardbank/api/card-banks';

  constructor(protected http: HttpClient) {}

  create(cardBank: ICardBank): Observable<EntityResponseType> {
    return this.http.post<ICardBank>(this.resourceUrl, cardBank, { observe: 'response' });
  }

  update(cardBank: ICardBank): Observable<EntityResponseType> {
    return this.http.put<ICardBank>(this.resourceUrl, cardBank, { observe: 'response' });
  }

  find(id: number): Observable<EntityResponseType> {
    return this.http.get<ICardBank>(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }

  query(req?: any): Observable<EntityArrayResponseType> {
    const options = createRequestOption(req);
    return this.http.get<ICardBank[]>(this.resourceUrl, { params: options, observe: 'response' });
  }

  delete(id: number): Observable<HttpResponse<{}>> {
    return this.http.delete(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }
}
