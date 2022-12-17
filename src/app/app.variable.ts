import { environment } from 'src/environments/environment';

export class ApiUrl {
  private static baseUrl = environment.BaseUrl;
  public static count = ApiUrl.baseUrl + 'pb-count';
  public static login = ApiUrl.baseUrl + 'login';
  public static users = ApiUrl.baseUrl + 'users';
  public static user = ApiUrl.baseUrl + 'user';
  public static category = ApiUrl.baseUrl + 'category';
  public static addPb = ApiUrl.baseUrl + 'pb';
  public static addPbWithOutAudio = ApiUrl.baseUrl + 'pb-wi';
  public static updateWithoutImagePb = ApiUrl.baseUrl + 'pbwi';
  public static updateWithoutAudio = ApiUrl.baseUrl + 'pb-ua';
  public static updateWithBoth = ApiUrl.baseUrl + 'pb-wb';
  public static photoBased = ApiUrl.baseUrl + 'pb';
  public static catogries = ApiUrl.baseUrl + 'category';
  public static Photos = ApiUrl.baseUrl + 'pb';
  public static video = ApiUrl.baseUrl + 'vb';
  public static visitor = ApiUrl.baseUrl + 'visitor';
  public static visitors = ApiUrl.baseUrl + 'visitors';
  public static visitorsApproved = ApiUrl.baseUrl + 'v-approved';
  public static approveVisitors = ApiUrl.baseUrl + 'v-approve';
  public static donater = ApiUrl.baseUrl + 'donater';
  public static donaters = ApiUrl.baseUrl + 'donaters';
  public static donatersApproved = ApiUrl.baseUrl + 'd-approved';
  public static approveDonators = ApiUrl.baseUrl + 'd-approve';
  public static home_category = ApiUrl.baseUrl + 'pb-home';
  public static collection_list = ApiUrl.baseUrl + 'pb-paginated';
  public static search_photo = ApiUrl.baseUrl + 'pb-search';
  public static dashboard = ApiUrl.baseUrl + 'dashboard';
  public static comment = ApiUrl.baseUrl + 'comment';
  public static comments = ApiUrl.baseUrl + 'comments';
}
