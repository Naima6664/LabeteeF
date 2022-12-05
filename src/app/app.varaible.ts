import { environment } from 'src/environments/environment';
export class ApiUrl {
  private static baseurl = environment.BaseUrl;
  public static user = ApiUrl.baseurl + 'user';
  public static users = ApiUrl.baseurl + 'users';
  public static login = ApiUrl.baseurl + 'login';
}
//localhost:3000/api/user
