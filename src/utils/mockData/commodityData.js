import Mock from "@utils/mockData/commonData.js";
const commodityData = {
  status: "200",
  data: {
    list: [
      {
        id: "0",
        img: "http://imooc.res.lgdsunday.club/goods-1.jpg",
        name:
          "【二手95新】劳力士 日志型系列 奢侈品18K白金男腕表 自动机械男士手表 116264 白色表盘",
        price: "38000",
        volume: "143",
        isHave: true,
        isDirect: false,
        swiperImgs: [
          "http://imooc.res.lgdsunday.club/goods-swiper-1-1.webp.jpg",
          "http://imooc.res.lgdsunday.club/goods-swiper-1-2.webp.jpg",
          "http://imooc.res.lgdsunday.club/goods-swiper-1-3.webp.jpg",
          "http://imooc.res.lgdsunday.club/goods-swiper-1-4.webp.jpg"
        ],
        detailImgs: [
          "http://imooc.res.lgdsunday.club/goods-detail-1-1.jpg",
          "http://imooc.res.lgdsunday.club/goods-detail-1-2.jpg",
          "http://imooc.res.lgdsunday.club/goods-detail-1-3.jpg",
          "http://imooc.res.lgdsunday.club/goods-detail-1-4.jpg",
          "http://imooc.res.lgdsunday.club/goods-detail-1-5.jpg",
          "http://imooc.res.lgdsunday.club/goods-detail-1-6.jpg"
        ]
      },
      {
        id: "1",
        img: "http://imooc.res.lgdsunday.club/goods-2.jpg",
        name: "Apple iPhone X (A1865) 64GB 黑色 移动联通电信4G手机",
        price: "5999",
        volume: "7356",
        isHave: true,
        isDirect: true,
        swiperImgs: [
          "http://imooc.res.lgdsunday.club/goods-swiper-2-1.webp.jpg",
          "http://imooc.res.lgdsunday.club/goods-swiper-2-2.webp.jpg",
          "http://imooc.res.lgdsunday.club/goods-swiper-2-3.webp.jpg",
          "http://imooc.res.lgdsunday.club/goods-swiper-2-4.webp.jpg"
        ],
        detailImgs: [
          "http://imooc.res.lgdsunday.club/goods-detail-2-1.jpg",
          "http://imooc.res.lgdsunday.club/goods-detail-2-2.jpg",
          "http://imooc.res.lgdsunday.club/goods-detail-2-3.jpg",
          "http://imooc.res.lgdsunday.club/goods-detail-2-4.jpg",
          "http://imooc.res.lgdsunday.club/goods-detail-2-5.jpg",
          "http://imooc.res.lgdsunday.club/goods-detail-2-6.jpg",
          "http://imooc.res.lgdsunday.club/goods-detail-2-7.jpg"
        ]
      },
      {
        id: "2",
        img: "http://imooc.res.lgdsunday.club/goods-3.jpg",
        name:
          "坚果（JmGO）G7 家庭投影仪 投影机家用（1080P全高清 四方梯形校正 16GB存储 全玻璃镜头）",
        price: "2698",
        volume: "4876",
        isHave: true,
        isDirect: false,
        swiperImgs: [
          "http://imooc.res.lgdsunday.club/goods-swiper-3-1.webp.jpg",
          "http://imooc.res.lgdsunday.club/goods-swiper-3-2.webp.jpg",
          "http://imooc.res.lgdsunday.club/goods-swiper-3-3.webp.jpg",
          "http://imooc.res.lgdsunday.club/goods-swiper-3-4.webp.jpg"
        ],
        detailImgs: [
          "http://imooc.res.lgdsunday.club/goods-detail-3-1.jpg",
          "http://imooc.res.lgdsunday.club/goods-detail-3-2.jpg",
          "http://imooc.res.lgdsunday.club/goods-detail-3-3.jpg",
          "http://imooc.res.lgdsunday.club/goods-detail-3-4.gif",
          "http://imooc.res.lgdsunday.club/goods-detail-3-5.jpg",
          "http://imooc.res.lgdsunday.club/goods-detail-3-6.jpg",
          "http://imooc.res.lgdsunday.club/goods-detail-3-7.jpg",
          "http://imooc.res.lgdsunday.club/goods-detail-3-8.jpg",
          "http://imooc.res.lgdsunday.club/goods-detail-3-9.jpg"
        ]
      },
      {
        id: "3",
        img: "http://imooc.res.lgdsunday.club/goods-4.jpg",
        name: "三只松鼠 坚果炒货 孕妇坚果每日坚果干果零食奶油味夏威夷果160g/袋",
        price: "29.8",
        volume: "734",
        isHave: true,
        isDirect: false,
        swiperImgs: [
          "http://imooc.res.lgdsunday.club/goods-swiper-4-1.webp.jpg",
          "http://imooc.res.lgdsunday.club/goods-swiper-4-2.webp.jpg",
          "http://imooc.res.lgdsunday.club/goods-swiper-4-3.webp.jpg"
        ],
        detailImgs: [
          "http://imooc.res.lgdsunday.club/goods-detail-4-1.jpg",
          "http://imooc.res.lgdsunday.club/goods-detail-4-2.jpg",
          "http://imooc.res.lgdsunday.club/goods-detail-4-3.jpg",
          "http://imooc.res.lgdsunday.club/goods-detail-4-4.jpg",
          "http://imooc.res.lgdsunday.club/goods-detail-4-5.jpg",
          "http://imooc.res.lgdsunday.club/goods-detail-4-6.jpg",
          "http://imooc.res.lgdsunday.club/goods-detail-4-7.jpg",
          "http://imooc.res.lgdsunday.club/goods-detail-4-8.jpg",
          "http://imooc.res.lgdsunday.club/goods-detail-4-9.jpg"
        ]
      },
      {
        id: "4",
        img: "http://imooc.res.lgdsunday.club/goods-5.jpg",
        name:
          "劳力士 潜航者型系列 男士绿水鬼手表 自动机械男腕表 116610LV-97200",
        price: "96000",
        volume: "9983",
        isHave: false,
        isDirect: false,
        swiperImgs: [],
        detailImgs: []
      },
      {
        id: "5",
        img: "http://imooc.res.lgdsunday.club/goods-6.jpg",
        name: "光明 纯牛奶 PURE MILK 250ml*16 礼盒装",
        price: "37.9",
        volume: "10234",
        isHave: true,
        isDirect: false,
        swiperImgs: [
          "http://imooc.res.lgdsunday.club/goods-swiper-6-1.webp.jpg",
          "http://imooc.res.lgdsunday.club/goods-swiper-6-2.webp.jpg",
          "http://imooc.res.lgdsunday.club/goods-swiper-6-3.webp.jpg"
        ],
        detailImgs: [
          "http://imooc.res.lgdsunday.club/goods-detail-6-1.jpg",
          "http://imooc.res.lgdsunday.club/goods-detail-6-2.jpg",
          "http://imooc.res.lgdsunday.club/goods-detail-6-3.jpg",
          "http://imooc.res.lgdsunday.club/goods-detail-6-4.jpg",
          "http://imooc.res.lgdsunday.club/goods-detail-6-5.jpg",
          "http://imooc.res.lgdsunday.club/goods-detail-6-6.jpg"
        ]
      },
      {
        id: "6",
        img: "http://imooc.res.lgdsunday.club/goods-7.jpg",
        name:
          "瑞士欧米茄(OMEGA)手表 海马系列300米潜水表钢带自动机械男表防水 210.30.42.20.06.001灰盘男表",
        price: "31599",
        volume: "234",
        isHave: false,
        isDirect: true,
        swiperImgs: [],
        detailImgs: []
      },
      {
        id: "7",
        img: "http://imooc.res.lgdsunday.club/goods-8.jpg",
        name: "简易迷你手动榨汁机儿童榨汁水果挤压汁机橙子语家用压柠檬汁器 粉色",
        price: "10",
        volume: "8642",
        isHave: true,
        isDirect: false,
        swiperImgs: [
          "http://imooc.res.lgdsunday.club/goods-swiper-8-1.webp.jpg",
          "http://imooc.res.lgdsunday.club/goods-swiper-8-2.webp.jpg",
          "http://imooc.res.lgdsunday.club/goods-swiper-8-3.webp.jpg",
          "http://imooc.res.lgdsunday.club/goods-swiper-8-4.webp.jpg"
        ],
        detailImgs: [
          "http://imooc.res.lgdsunday.club/goods-detail-8-1.jpg",
          "http://imooc.res.lgdsunday.club/goods-detail-8-2.jpg",
          "http://imooc.res.lgdsunday.club/goods-detail-8-3.jpg",
          "http://imooc.res.lgdsunday.club/goods-detail-8-4.jpg",
          "http://imooc.res.lgdsunday.club/goods-detail-8-5.jpg",
          "http://imooc.res.lgdsunday.club/goods-detail-8-6.jpg",
          "http://imooc.res.lgdsunday.club/goods-detail-8-7.jpg"
        ]
      },
      {
        id: "8",
        img: "http://imooc.res.lgdsunday.club/goods-9.jpg",
        name:
          "澜杉 短袖t恤男2019新款衬衫领打底衫潮流polo衫修身男士半袖纯棉丅恤夏季潮牌衣服五分袖体恤 W7012藏青色 XL",
        price: "88",
        volume: "28362",
        isHave: true,
        isDirect: false,
        swiperImgs: [
          "http://imooc.res.lgdsunday.club/goods-swiper-9-1.webp.jpg",
          "http://imooc.res.lgdsunday.club/goods-swiper-9-2.webp.jpg",
          "http://imooc.res.lgdsunday.club/goods-swiper-9-3.webp.jpg",
          "http://imooc.res.lgdsunday.club/goods-swiper-9-4.webp.jpg"
        ],
        detailImgs: [
          "http://imooc.res.lgdsunday.club/goods-detail-9-1.jpg",
          "http://imooc.res.lgdsunday.club/goods-detail-9-2.jpg",
          "http://imooc.res.lgdsunday.club/goods-detail-9-3.jpg",
          "http://imooc.res.lgdsunday.club/goods-detail-9-4.jpg",
          "http://imooc.res.lgdsunday.club/goods-detail-9-5.jpg",
          "http://imooc.res.lgdsunday.club/goods-detail-9-6.jpg",
          "http://imooc.res.lgdsunday.club/goods-detail-9-7.jpg",
          "http://imooc.res.lgdsunday.club/goods-detail-9-7.jpg"
        ]
      },
      {
        id: "9",
        img: "http://imooc.res.lgdsunday.club/goods-10.jpg",
        name:
          "三只松鼠营养早餐口袋面包网红零食饼干蛋糕乳酸菌小伴侣面包520g整箱装",
        price: "26.9",
        volume: "43892",
        isHave: false,
        isDirect: true,
        swiperImgs: [],
        detailImgs: []
      },
      {
        id: "10",
        img: "http://imooc.res.lgdsunday.club/goods-11.jpg",
        name:
          "微麦m200微型手机投影仪家用迷你全高清投影机便携式掌上电脑办公智能无线无屏电视4K家庭影院 星耀红",
        price: "1899",
        volume: "989",
        isHave: false,
        isDirect: false,
        swiperImgs: [],
        detailImgs: []
      },
      {
        id: "11",
        img: "http://imooc.res.lgdsunday.club/goods-12.jpg",
        name: "伊利 安慕希希腊风味常温酸奶原味205g*16盒",
        price: "59.9",
        volume: "7654",
        isHave: false,
        isDirect: false,
        swiperImgs: [],
        detailImgs: []
      },
      {
        id: "12",
        img: "http://imooc.res.lgdsunday.club/goods-13.jpg",
        name:
          "图拉斯（TORRAS）汽车香水 车载香水空调出风口车用香水摆件 汽车用品饰品香薰 车内除异味香膏棒 黑色",
        price: "50.8",
        volume: "876",
        isHave: true,
        isDirect: false,
        swiperImgs: [
          "http://imooc.res.lgdsunday.club/goods-swiper-13-1.webp.jpg",
          "http://imooc.res.lgdsunday.club/goods-swiper-13-2.webp.jpg",
          "http://imooc.res.lgdsunday.club/goods-swiper-13-3.webp.jpg",
          "http://imooc.res.lgdsunday.club/goods-swiper-13-4.webp.jpg",
          "http://imooc.res.lgdsunday.club/goods-swiper-13-5.webp.jpg"
        ],
        detailImgs: [
          "http://imooc.res.lgdsunday.club/goods-detail-13-1.jpg",
          "http://imooc.res.lgdsunday.club/goods-detail-13-2.jpg",
          "http://imooc.res.lgdsunday.club/goods-detail-13-3.jpg",
          "http://imooc.res.lgdsunday.club/goods-detail-13-4.jpg",
          "http://imooc.res.lgdsunday.club/goods-detail-13-5.jpg"
        ]
      },
      {
        id: "13",
        img: "http://imooc.res.lgdsunday.club/goods-14.jpg",
        name:
          "满199减120 三只松鼠 蜀香牛肉100g 休闲零食肉脯手撕牛肉麻辣味 牛肉粒牛肉片 麻辣味",
        price: "25.8",
        volume: "57356",
        isHave: false,
        isDirect: true,
        swiperImgs: [],
        detailImgs: []
      }
    ]
  }
};
Mock("commodityData", commodityData);
