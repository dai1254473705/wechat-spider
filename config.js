/*
 * @Author: daiyunzhou daiyunz@chanjet.com
 * @Date: 2022-09-12 12:09:36
 * @LastEditors: daiyunzhou daiyunz@chanjet.com
 * @LastEditTime: 2022-11-19 20:27:20
 * @FilePath: /wechat-spider/config.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const path = require("path");
/**
 * 爬取配置文件
 */
module.exports = {
  filePath: {
    rootDir: path.resolve(__dirname, "../wechat-images-lib/"),
    subDir: "/bizhi/",
  },
  // 要爬的地址
  bizhiUrl: [
    "https://mp.weixin.qq.com/s/qMSebbh-DZcv7O0cMEbxkw",
    "https://mp.weixin.qq.com/s/e8p369So2Oo4LG-EMd78OA",
    "https://mp.weixin.qq.com/s/p9EKEW5RGa19UreVn236Aw",
    "https://mp.weixin.qq.com/s/-yMmzkXdJ6oBrvG62B7DHA",
    "https://mp.weixin.qq.com/s/HAk55VYx3JRDAqV4YT4zjw",
    "https://mp.weixin.qq.com/s/51umFJZ-rGVLl6A7mcRu8g",
    "https://mp.weixin.qq.com/s/4H65bmNRXwZi49uQTYS0Kg",
    "https://mp.weixin.qq.com/s/rAZsT9eSgPEFe81JOEENAQ",
    "https://mp.weixin.qq.com/s/D9fPdOCkMefnC2EobOPs2w",
    "https://mp.weixin.qq.com/s/f68TO-Gl_Gl3LfAfP6karg",
    "https://mp.weixin.qq.com/s/ghFKmHwJAhCh1vesHqH30A",
    "https://mp.weixin.qq.com/s/FtutooeKJ6DpNSVknYOWqA",
    "https://mp.weixin.qq.com/s/B2jGnt4XtSUVX2X4ANDZTw",
    "https://mp.weixin.qq.com/s/KCe5-kDBJDSP_xaXRi-aJQ",
    "https://mp.weixin.qq.com/s/CbgK2D11MRU25DKWOlcjog",
    "https://mp.weixin.qq.com/s/gvsfziM5WmzKfr2_kjueOg",
    "https://mp.weixin.qq.com/s/eiTM2YiDzkdQyseKOYD7TQ",
    "https://mp.weixin.qq.com/s/il6geKQ5Xl9Fzoebj1kdTg",
    "https://mp.weixin.qq.com/s/Rq2jWDOXNJoeVdE7AOQCqw",
    "https://mp.weixin.qq.com/s/n4GZC7pxkSRZLZI5uBgPvw",
    "https://mp.weixin.qq.com/s/z3Vc7cKcaghvQlGc_phWbg",
    "https://mp.weixin.qq.com/s/OMtgQOjWGwkZkCGcd73SgA",
    "https://mp.weixin.qq.com/s/hEDsnCHMTVg47OXDQKVCQQ",
    "https://mp.weixin.qq.com/s/EJwRw1dzurh2d-MFTim_WA",
    "https://mp.weixin.qq.com/s/_rR4Kx0Yirc7J-JCcDxImA",
    "https://mp.weixin.qq.com/s/3okwQ8Ne68hI4vK-sxvG2g",
    "https://mp.weixin.qq.com/s/w_-8Drns_2aNiv1aNZMT9A",
    "https://mp.weixin.qq.com/s/sMq1nnacgOeiG6WIJdgrig",
    'https://mp.weixin.qq.com/s/QHS53lEWlF23UeCNRacnBw',
    'https://mp.weixin.qq.com/s/YBT-mrQ9ump-jPH6ngPZ2A',
    'https://mp.weixin.qq.com/s/vTFF9BzI1KuDMpoYn7B2Mw',
    'https://mp.weixin.qq.com/s/o9wOHZpbFtSXiVf8Khncew',
    'https://mp.weixin.qq.com/s/pqRGtn12hMUbVcs4wG8TYQ',
    'https://mp.weixin.qq.com/s/n2UZv3t84cLruo9HB99NdQ',
    'https://mp.weixin.qq.com/s/kd4MKOkNwYehevBuAAkY2Q',
    'https://mp.weixin.qq.com/s/N6tvkzceW8UEKYMLnirFMA',
    'https://mp.weixin.qq.com/s/kKzFIxzBARG8RvvkhKVC9A',
    'https://mp.weixin.qq.com/s/UzRX8rWfgNw9YmOXxYc3ww',
    'https://mp.weixin.qq.com/s/BfohHWZ5MT2oNikw9ZWH_A',
    'https://mp.weixin.qq.com/s/pfnipBTtTHH4ts6EXH7NMQ',
    'https://mp.weixin.qq.com/s/POksXUuy0rTF8cIbvqUlyw',
    'https://mp.weixin.qq.com/s/cTwBZh-zpk30hOFSDT0Yjg',
    'https://mp.weixin.qq.com/s/muS0QSoXo0D2-_Wez3BBcw',
    'https://mp.weixin.qq.com/s/mCD5sx9_IO3g2eNyyXssUA',
    'https://mp.weixin.qq.com/s/mW2A1x_4JWboquAJm7z1tA',
    'https://mp.weixin.qq.com/s/8qpDqzrRTazSj-9RZF9jOA',
    'https://mp.weixin.qq.com/s/OV9gYiIvEm-pQKo3ZXVtjQ',
'https://mp.weixin.qq.com/s/9fHyBiD58wH_Ckt9NRjJwQ',    'https://mp.weixin.qq.com/s/b-z_wMUP0UwvLyVuggvVrQ',
'https://mp.weixin.qq.com/s/1QduDyqI3BWRtqoMFMCJwA',
'https://mp.weixin.qq.com/s/bsjO6MigWBmAQ0uKFlN79w',
'https://mp.weixin.qq.com/s/InY5a7DJDOtpFFlmTgYguA',
'https://mp.weixin.qq.com/s/8JSAtCZUbaGUSS12WND9sw',
'https://mp.weixin.qq.com/s/1Z1HDRyt21vAWhxKIGBkIw',
'https://mp.weixin.qq.com/s/rFFzl2dSCi9bMlSO3Gg4fg',
'https://mp.weixin.qq.com/s/IZlYl0rHSURyYaYNCPXRpw',
'https://mp.weixin.qq.com/s/XvNd37Kf0m60HfiRpiw9sQ',
'https://mp.weixin.qq.com/s/1MOBkKs0CMFG2LC5zcAqzw',
'https://mp.weixin.qq.com/s/zPRNiQ9v3NZrrwysV52t1Q',
'https://mp.weixin.qq.com/s/O6Z6gjVLAFyEKshi75DX8Q',
'https://mp.weixin.qq.com/s/KRuxlUu6D15U7rUa4Rzl1w',
'https://mp.weixin.qq.com/s/oPhgpf4DqP2vlsHL3a6WQQ',
'https://mp.weixin.qq.com/s/ij0JpjQe_JhokmdjypsDbA',
'https://mp.weixin.qq.com/s/2rI4W59R84tv-Upn7Gd8lw',
'https://mp.weixin.qq.com/s/aXMVY5z3f7CopBUSlvZwOQ',
'https://mp.weixin.qq.com/s/S6git58Vjfd7pM4qTbxgXw',
'https://mp.weixin.qq.com/s/B7gP7sRF2NY_ICEwJydwvg',
'https://mp.weixin.qq.com/s/6lM4qicvrLtJkAAuMg8tow',
'https://mp.weixin.qq.com/s/PIovlYddVaaWabDQnVFtqA',
'https://mp.weixin.qq.com/s/FMZ7Sd25umW2Omg6Cagv9w',
'https://mp.weixin.qq.com/s/DBNFKftiA4hLgqwdoB2UCg',
'https://mp.weixin.qq.com/s/QJFN4KsL-H50Kni4tp9KBw',
'https://mp.weixin.qq.com/s/PCRkUdjA1n_UNhN0CIZ1hw',
'https://mp.weixin.qq.com/s/bvi5O67zVbC3eAFDwOxV6A',
'https://mp.weixin.qq.com/s/2uRFA95vsCWsVg-e80zzlA',
'https://mp.weixin.qq.com/s/CSTqgpu1yHWxAvZNimgL6w',
'https://mp.weixin.qq.com/s/GlER-0I-Bx60hg27ZuU5oA',
'https://mp.weixin.qq.com/s/wj1uHaHWDzMXyjAXK8zcow',
'https://mp.weixin.qq.com/s/niWfoUdT59HlPnxMSUVsgQ',
'https://mp.weixin.qq.com/s/eDmRXEaucGi3IcDGuKBR6Q',
'https://mp.weixin.qq.com/s/sWvzKfQ_NxhQ_KHm7Tzxqw',
'https://mp.weixin.qq.com/s/CQbx3Za5WvlVeC1dHSlGQw',
'https://mp.weixin.qq.com/s/1fkrLkw_X7gagBTluTlQVg',
'https://mp.weixin.qq.com/s/Ut5CusiWsZZ8C1HqMfcs3g',
'https://mp.weixin.qq.com/s/Ee5BkCsmaf1cIujh4i5EDg',
'https://mp.weixin.qq.com/s/XwqK74KzNLeHChG7DzQwjQ',
'https://mp.weixin.qq.com/s/MO5zJIulIOikAtcfGTfGLA',
'https://mp.weixin.qq.com/s/lnHmfxcwW4XxfMnpRVOqfw',
'https://mp.weixin.qq.com/s/Xe7CXaRX5-j4D3p_xJPRlA',
'https://mp.weixin.qq.com/s/k7XmGvRahEOEYpgXpoz01A',
'https://mp.weixin.qq.com/s/MRGXPaPRXbUtMP4lZjYD9w',
'https://mp.weixin.qq.com/s/9FGQICnCBc07HuJ0f67qxA',
'https://mp.weixin.qq.com/s/_ELWhc3h_Gdc2Wpct0uWMw',
'https://mp.weixin.qq.com/s/t-g7XWvDWWQto5w9XSiClA',
'https://mp.weixin.qq.com/s/8igJXh_bANlBPFf8w-OwKw',
'https://mp.weixin.qq.com/s/Z4UzbySkONFTytAfZ3dsJg',
'https://mp.weixin.qq.com/s/RHKbTAPAPsGe3oIqeo6XZQ',
'https://mp.weixin.qq.com/s/HBvA2O40WVLEwmQgaM4oNw',
'https://mp.weixin.qq.com/s/PFx8LUO61vjCk4ksbzrJvw',
'https://mp.weixin.qq.com/s/rlNxnMkxRCgyIMMM7NOpdQ',
'https://mp.weixin.qq.com/s/3miGz988BWpWEnoIepYV4A',
'https://mp.weixin.qq.com/s/dsucTlu2Loxk_BJYJYH4GQ',
'https://mp.weixin.qq.com/s/EsKLovfVEmhsOhEnC9ExqA',
'https://mp.weixin.qq.com/s/69GYHB_ctwEd-So0UdUCjA',
'https://mp.weixin.qq.com/s/r5-cRxATjRz0d0yrgf8srg','https://mp.weixin.qq.com/s/ENocmtRJ0XfT_kCc9oCnOg',
'https://mp.weixin.qq.com/s/2e7bgZTUeECzkA0_olzs8A',
'https://mp.weixin.qq.com/s/hnspgd8ZJCzJMs1VKi9EJw',
'https://mp.weixin.qq.com/s/-GAFcBPoRU8jiqNi7eacCw',
'https://mp.weixin.qq.com/s/fMKfPW7OP-j-Cos5fib2dw',
'https://mp.weixin.qq.com/s/f4IP1vOiCUomJaotdu_yKw',
'https://mp.weixin.qq.com/s/pxzGk0zSSTJbeFU_LnsEHw',
'https://mp.weixin.qq.com/s/htTzx4FaQCHNlaGCZTnFWA',
'https://mp.weixin.qq.com/s/Xb0kY4oyOlpEq8bK4UEMxw',
'https://mp.weixin.qq.com/s/H71A66slYX_ZW8os39TAtw',
'https://mp.weixin.qq.com/s/nBqgIQ5X-SCFpuqgPjFRZw',
'https://mp.weixin.qq.com/s/tCKjQplHiebgcNYxWskD7w',
'https://mp.weixin.qq.com/s/IEjskVX7JeH2xmzwKCvV0g',
'https://mp.weixin.qq.com/s/lVJlaZ1Q7Cfj2MAfmWXqmg',
'https://mp.weixin.qq.com/s/SYhiTsAXu_NQ92XDJ9WwQg',
'https://mp.weixin.qq.com/s/pE0ENh0QamjRL577BACeZQ',
'https://mp.weixin.qq.com/s/tNYm_QwddoviSotxV5vNQw',
'https://mp.weixin.qq.com/s/tXDG7OWJxxaket6LwhMVhw',
'https://mp.weixin.qq.com/s/D3hJejDCC4O3MAVVo_Vxfw',
'https://mp.weixin.qq.com/s/8Hox80D2ioKTxJnIcrHSEA',
'https://mp.weixin.qq.com/s/GAY8GyUyfufjjm4YYBgcZQ',
'https://mp.weixin.qq.com/s/Z2wrSpjy94Leu_TDm6rorA',
'https://mp.weixin.qq.com/s/zwrqD0H1SRhBNVdfupcDRA',
'https://mp.weixin.qq.com/s/X87e0f09K_WrKrjh8JqVhQ',
'https://mp.weixin.qq.com/s/1fIp2ffY_7WkMzWkTX5M6w',
'https://mp.weixin.qq.com/s/XePV9DPVQgbA0LVjMnEtKA',
'https://mp.weixin.qq.com/s/FEbEbXIV5uBehTJuMWlMEQ',
'https://mp.weixin.qq.com/s/kfFV4R6cxXLDTyb1uXwxxw',
'https://mp.weixin.qq.com/s/G-BXxul6_eMtkW72MvDJXw',
'https://mp.weixin.qq.com/s/D615XjBl4f2R1FhzDzisjQ',
'https://mp.weixin.qq.com/s/3fhsBI6zrTaS5Q0XUl5OUQ',
'https://mp.weixin.qq.com/s/gG9Znp_9TtOvgwLEiIdS1Q',
'https://mp.weixin.qq.com/s/1-2ZQiCgla6UnA07b8JwWA',
'https://mp.weixin.qq.com/s/T0418KD8faYCBS36KrZodw',
'https://mp.weixin.qq.com/s/kzRRbzlEkGwoPB1fNplKug',
'https://mp.weixin.qq.com/s/8G23ZsDXBupUSecx7qEMSQ',
'https://mp.weixin.qq.com/s/B0ELOvtWyXxQh4AUOOt_6g',
'https://mp.weixin.qq.com/s/utlwbNWVBql8DWzMNbWhEw',

  ],
};
