import Urls from '../app/client/common/Urls';
import { fetchPost } from '../app/client/common/Api';


const fetchMetric = (key1, key2, key3, key4, key5, value) => {
  fetchPost(Urls.apis.metrics(), {
    metrics: [
      { key1, key2, key3, key4, key5, value, }
    ]
  })
}
