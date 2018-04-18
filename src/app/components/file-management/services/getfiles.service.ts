import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { retry } from 'rxjs/operators';

const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json'
    })
};

@Injectable()
export class FileService {
    constructor(private httpClient: HttpClient) {}
    url = 'http://192.168.254.102/api/files/get/registrar';
    // url = 'http://192.168.0.105/api/files/get/registrar';
    // url = 'http://10.0.0.39/api/files/get/registrar';

    getFiles(): Observable<Object> {
        return this.httpClient.get(this.url)
        .pipe(
            retry(3)
        );
    }
}
