import * as Influx from 'influx';
import Config from '../../Config';


export const influx = new Influx.InfluxDB({
  database: Config.influxdb.database,
  host: Config.influxdb.host,
  port: Config.influxdb.port,
  username: Config.influxdb.user,
  password: Config.influxdb.password,
})

export const initializeInflux = async () => {
  try {
    const dbNames = await influx.getDatabaseNames()
    if (!dbNames.includes(Config.influxdb.database)) {
      await influx.createDatabase(Config.influxdb.database)
    }
  } catch (err) {
    console.error(err)
  }
}
