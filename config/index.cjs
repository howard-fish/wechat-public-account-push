/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = 
{"APP_ID":"wx54b36c9b1446ea75"
    ,"APP_SECRET":"8906eb4dec542970ab1150e2b3aa67ae",
   "IS_SHOW_COLOR":true,"
    CALLBACK_TEMPLATE_ID":"G-7IFh5n85ev0ERiEl5ImSxtKet_yBahbuCluuD_WK4",
 "CALLBACK_USERS":[{"name":"自己","id":""}],
 "USERS":[{"name":"友友","
  id":"8906eb4dec542970ab1150e2b3aa67ae",
           "useTemplateId":"G-7IFh5n85ev0ERiEl5ImSxtKet_yBahbuCluuD_WK4",
           "province":"江苏","city":"南通",
           "horoscopeDate":"05-27",
           "horoscopeDateType":"今日",
           "openUrl":"https://shuangxunian.github.io/",
           "festivals":[{"type":"生日",
                         "name":"友友","date":"05-27","year":"2024"}],
           "customizedDateList":[{"date":"NaN-NaN-NaN"}]}],
 "SWITCH":{"weather":true,"holidaytts":true,"CIBA":true,"oneTalk":true,"earthyLoveWords":true,"momentCopyrighting":true,"poisonChickenSoup":false,"poetry":false,"horoscope":false,"birthdayMessage":true}}

  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: 'sY8cc0ABQC78xM5qtHV1PPzEy7WEOR_wVUwXFl2EP64',

  CALLBACK_USERS: [
    {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'G-7IFh5n85ev0ERiEl5ImSxtKet_yBahbuCluuD_WK4',
    }
  ],

}

module.exports = USER_CONFIG

