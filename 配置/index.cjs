/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wxf956f628fc6e28be',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: 'fa23fbd073a475e0c89236c1ed6b4b21',

  PROVINCE: '河南',
  CITY: '山东',

  USERS: [
    {
      // 想要发送的人的名字
      name: '你是我的小可爱',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'opBA36hpVSBToim8O_CblPDCiELs',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'Vl7Gn5jeKxBtJ2KzY7bCUT1iKLIu1ii2eySpErUtsSw',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '11-19',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '宝贝', year: '1990', date: '11-19',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日', name: '李四', year: '1991', date: '01-04',
        },
        {
          type: '节日', name: '相识纪念日', year: '2013', date: '08-08',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2023-09-08' },
        // 结婚纪念日
        { keyword: 'marry_day', date: '2013-08-08' },
      ],
    },
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: '',

  CALLBACK_USERS: [
    {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'wxf956f628fc6e28be',
    }
  ],

}

module.exports = USER_CONFIG

