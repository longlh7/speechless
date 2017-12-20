export const config = {
  prod: false,
  protocol: ['http', 'https'],
  ip: ['localhost', 'ec2-18-220-134-62.us-east-2.compute.amazonaws.com'],
  port: ['3001', '80'],
  getEnv: () => {
    if (!config.prod) {
      return config.protocol[0] + '://' + config.ip[0] + ':' + config.port[0]
    } else {
      return config.protocol[1] + '://' + config.ip[1] + ':' + config.port[1]
    }
  }
}