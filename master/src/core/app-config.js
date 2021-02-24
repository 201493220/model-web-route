const subApps = [
  {
    module: 'subapp-home',
    defaultRegister: true,
    devEntry: apiDomain.default.subHomeDevUrl,
    depEntry: apiDomain.default.subHomeDepUrl,
    routerBase: '/',
    data: [
      {
        id: '2',
        title: 'wl-ui',
        icon: 'el-icon-monitor',
        children: [
          {
            id: '2-1',
            title: 'home',
            url: '/home'
          }
        ]
      }
    ]
  },
  // {
  //   module: 'subapp-homempa',
  //   defaultRegister: true,
  //   devEntry: '//localhost:8083/homempa/app.html',
  //   depEntry: '//localhost:8082/homempa/app.html',
  //   routerBase: '/homempa',
  //   data: []
  // },
  // {
  //   module: 'subapp-app1',
  //   defaultRegister: true,
  //   devEntry: '//localhost:8083/homempa/app1.html',
  //   depEntry: '//localhost:8082/homempa/app1.html',
  //   routerBase: '/homempa1',
  //   data: []
  // }
]

export default subApps
