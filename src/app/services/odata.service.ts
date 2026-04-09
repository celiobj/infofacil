import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OdataService {

  private baseUrl = environment.odataApiUrl;
  private username = 'ws.plantarforest';
  private password = 'PLws@2025';

  constructor(private http: HttpClient) { }

  /**
   * Cria headers com autenticação básica
   */
  private getAuthHeaders(username = this.username, password = this.password): HttpHeaders {
    const auth = btoa(`${username}:${password}`);
    return new HttpHeaders({
      'Authorization': `Basic ${auth}`,
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    });
  }

  /**
   * Faz uma chamada OData GET e retorna os dados como JSON
   * @param url URL do endpoint OData
   * @param params Parâmetros de consulta opcionais (ex: $filter, $select, $orderby)
   * @param username Usuário para autenticação básica (opcional)
   * @param password Senha para autenticação básica (opcional)
   * @returns Observable com os dados JSON
   */
  getOdataData(url: string, params?: { [key: string]: string }, username?: string, password?: string): Observable<any> {
    let httpParams = new HttpParams();

    if (params) {
      Object.keys(params).forEach(key => {
        httpParams = httpParams.set(key, params[key]);
      });
    }

    // Para URLs relativas, o proxy adiciona autenticação
    // Para URLs absolutas, adiciona headers de autenticação
    const headers = url.startsWith('http') ? this.getAuthHeaders(username, password) : {};

    return this.http.get(url, {
      params: httpParams,
      headers: headers
    });
  }

  /**
   * Busca dados da API Plantar Forest
   * @param entity Nome da entidade OData (ex: 'Apontamento')
   * @param params Parâmetros de consulta opcionais
   * @param useProxy Se true, usa proxy local; se false, usa URL remota direta
   * @param username Usuário para autenticação básica (opcional)
   * @param password Senha para autenticação básica (opcional)
   */
  getPlantarData(entity: string, params?: { [key: string]: string }, useProxy = true, username?: string, password?: string): Observable<any> {
    const url = useProxy ? `/odata/${entity}` : `${this.baseUrl}/${entity}`;
    return this.getOdataData(url, params, username, password);
  }

  /**
   * Busca apontamentos (exemplo específico)
   */
  getApontamentos(params?: { [key: string]: string }): Observable<any> {
    const url = `${this.baseUrl}/ConsultaApontamentos`;
    return this.getOdataData(url, params);
  }

  /**
   * Busca metadados do serviço OData
   */
  getMetadata(): Observable<any> {
    const url = `${this.baseUrl}/$metadata`;
    return this.http.get(url, {
      headers: this.getAuthHeaders(),
      responseType: 'text'
    });
  }
}