import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class HttpRequestor {
    constructor(public http: HttpClient) {}

    public getRequest(url: string): Promise<any> {
        return this.http.get(url)
            .toPromise()
            .catch(this.handleError);
    }

    public postRequest(url: string, data: any): Promise<any> {
        const body = JSON.stringify(data);
        const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

        return this.http.post(url, body, {headers})
            .toPromise()
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
};