import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization:
      'Bearer 5EaK5wA_rkbEfuhH_MIRYh4p0mD04ivpjHes4k0HgQRWXVOh1AUFnowvHF8wLkT6QlcYhXegK_I1wsH7Zplkz8zrFwV_ACQsf2SlavS5L7h0Q4k4L77O4AdNrhLLYHYx',
  },
});
