import Mock from "@utils/mockData/commonData.js";
const commodityInfoData = {
  status: "200",
  data: {
    id: "0",
    img: "http://imooc.res.lgdsunday.club/goods-1.jpg",
    name: "【二手95新】劳力士 日志型系列 奢侈品18K白金男腕表 自动机械男士手表 116264 白色表盘",
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
  }
}

Mock("commodityInfoData", commodityInfoData);
