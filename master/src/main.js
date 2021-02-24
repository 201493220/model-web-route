import store from './store'
import appStore from './utils/app-store'
import subApps from './core/app-config'

import { vueRender } from './core/render'
vueRender({}, true)

import {
  registerMicroApps,
  // setDefaultMountApp,
  start,
  runAfterFirstMounted,
  initGlobalState
} from 'qiankun'

let apps = []
let props = {
  data: store.getters
  // emits,
  // GLOBAL[]
}
let isDev = process.env.NODE_ENV === 'development' // 根据开发环境|线上环境加载不同entry
subApps.forEach(i => {
  apps.push({
    name: i.module,
    entry: isDev ? i.devEntry : i.depEntry,
    container: '#subapp-viewport',
    activeRule: i.routerBase,
    props: { ...props, routes: i.data, routerBase: i.routerBase }
  })
})

// qiankun相关启动函数
registerMicroApps(apps, {
  beforeLoad: [
    app => {
      console.log('[LifeCycle] before load %c%s', 'color: green;', app.name)
    }
  ],
  beforeMount: [
    app => {
      console.log('[LifeCycle] before mount %c%s', 'color: green;', app.name)
    }
  ],
  afterUnmount: [
    app => {
      console.log('[LifeCycle] after unmount %c%s', 'color: green;', app.name)
    }
  ]
})

// setDefaultMountApp(store.getters.defaultApp + '/')
start()
/**
 * @name 微前端启动进入第一个子应用后回调函数
 */
runAfterFirstMounted(() => {})

/**
 * @name 启动qiankun应用间通信机制
 */
appStore(initGlobalState)

