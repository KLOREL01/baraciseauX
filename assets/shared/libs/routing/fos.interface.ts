export interface RouteDefaults {
  [index: string]: string;
}

export interface RouteRequirements {
  [index: string]: string;
}

export interface RouteParams {
  [index: string]: any;
}

export interface QueryParamAddFunction {
  (prefix: string, params: any): void;
}

export interface Route {
  tokens: string[][];
  defaults: RouteDefaults;
  requirements: RouteRequirements;
  hosttokens: string[];
}

export interface RoutesMap {
  [index: string]: Route;
}

export interface Context {
  base_url: string;
}

export interface RoutingData {
  base_url: string;
  routes: RoutesMap;
  prefix?: string;
  host: string;
  scheme: string;
}

export default interface Router {
  new(optContext?: Context, optRoutes?: RoutesMap): Router;

  setRoutingData(data: RoutingData): void;

  setRoutes(routes: RoutesMap): void;

  getRoutes(): RoutesMap;

  setBaseUrl(baseUrl: string): void;

  getBaseUrl(): string;

  setPrefix(prefix: string): void;

  setScheme(scheme: string): void;

  getScheme(): string;

  setHost(host: string): void;

  getHost(): string;

  /**
   * Builds query string params added to a URL.
   * Port of jQuery's $.param() function, so credit is due there.
   */
  buildQueryParams(prefix: string, params: any, add: QueryParamAddFunction): void;

  /**
   * Returns a raw route object.
   */
  getRoute(name: string): Route;

  /**
   * Generates the URL for a route.
   */
  generate(name: string, optParams?: RouteParams, absolute?: boolean): string;
}