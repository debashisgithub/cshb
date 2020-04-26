import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable()
export class AddsService {

    constructor(private http: HttpClient) { }

    slotAdds() {
        return this.http.get(`${environment.apiPath}/adds`)
    }

    allAdds() {
        return this.http.get(`${environment.apiPath}/adds/list`)
    }

    saveConv(data) {
        return this.http.post(`${environment.apiPath}/adds/save`, { data });
    }

}
