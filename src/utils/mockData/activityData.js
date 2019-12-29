import Mock from '@utils/mockData/commonData.js'
const activityData = {
  status: "200",
  data: {
    list: [
      {
        id: "1",
        icon: "http://imooc.res.lgdsunday.club/520-1.gif"
      },
      {
        id: "2",
        icon: "http://imooc.res.lgdsunday.club/520-2.gif"
      },
      {
        id: "3",
        icon: "http://imooc.res.lgdsunday.club/520-3.gif"
      }
    ]
  }
};
Mock('activityData', activityData)