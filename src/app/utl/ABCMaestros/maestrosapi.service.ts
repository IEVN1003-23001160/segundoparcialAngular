
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { MaestrosUTL, RespuestaMaestros } from "./maestrosUTL";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class MaestrosapiService {

    constructor(private http: HttpClient) { }

    public getMaestros(): Observable<RespuestaMaestros> {
        return this.http.get<RespuestaMaestros>
        ('http://127.0.0.1:5000/api/maestros/')
    }

    agregarNuevoMaestro(datos: MaestrosUTL) {
        return this.http.post
        ('http://127.0.0.1:5000/api/maestros/', datos)
    }

}
