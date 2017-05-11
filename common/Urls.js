

export default {
  pages: {
    home: () => '/',
    agents: () => '/agents',
    dashBoard: () => '/dashboard',
    addWidget: () => '/dashboard/add-widget',
  },
  apis: {
    agents: () => '/api/agents',
    metrics: () => '/api/metrics',
    metricSampleQuery: q => '/api/metrics/sample-query' + (q == null ? '' : `?q=${q}`),
    widgets: () => '/api/dashboard/widgets',
  },
}
