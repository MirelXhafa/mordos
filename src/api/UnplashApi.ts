import axios from "axios";
import BaseApi from "./BaseApi";

class UnsplashApi extends BaseApi {
  base_url = "https://api.unsplash.com/";

  getRandomImage() {
    this.get(
      `${this.base_url}photos/random?client=${process.env.UNPLASH_ACCESS_KEY}`
    );
  }
}

export default UnsplashApi;
