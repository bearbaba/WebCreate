import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const TabJavaModule = () => import('views/tabBarItem/TabJavaModule')
const TabPHPModule = () => import('views/tabBarItem/TabPHPModule')
const TabPythonModule = () => import('views/tabBarItem/TabPythonModule')
const TabJavaScriptModule = () => import('views/tabBarItem/TabJavaScriptModule')
const TopNewMessage = () => import('views/topBarItem/TopNewMessage')
const TopPersonalInformaiton = () => import('views/topBarItem/TopPersonalInformation')
const TopSetting = () => import('views/topBarItem/TopSetting')

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home'
    },
    {
      path: '/TabJavaModule',
      component: TabJavaModule
    },
    {
      path: '/TabPHPModule',
      component: TabPHPModule
    },
    {
      path: '/TabJavaScriptModule',
      component: TabJavaScriptModule
    },
    {
      path: '/TabPythonModule',
      component: TabPythonModule
    },
    {
      path: '/TopNewMessage',
      component: TopNewMessage
    },
    {
      path: '/TopSetting',
      component: TopSetting
    },
    {
      path: '/TopPersonalInformation',
      component: TopPersonalInformaiton
    }
  ]
})
