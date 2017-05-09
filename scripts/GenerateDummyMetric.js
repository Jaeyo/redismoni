import Urls from '../common/Urls';
import { fetchPost } from '../app/client/common/Api';


const fetchMetric = (key1, key2, key3, key4, key5, value) =>
  fetchPost('http://localhost:3000' + Urls.apis.metrics(), {
    metrics: [
      { key1, key2, key3, key4, key5, value, }
    ]
  })

export default async () => {
  try{
    console.log('GenerateDummyMetric start')

    const { ok, status, statusText } = await fetchMetric('redis', 'test', null, null, null, 44)
    if (!ok) {
      console.log({ status, statusText })
    }
  } catch (err) {
    console.error(err)
  }
}
