import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ConfigService {
    private readonly CONTROLLER_URL = 'config';

    constructor(private http: HttpClient) { }
}