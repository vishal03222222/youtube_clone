export const API_KEY ='AIzaSyBACizxS1Ict-S1-TbvOUyZB5nThn2tsdM'

export const value_converter = (value) => {
    if (value >= 1000000) {
      return Math.floor(value / 1000000) + "M";
    } else if (value >= 1000) {
      return Math.floor(value / 1000) + "K";
    } else {
      return value;
    }
  };
  