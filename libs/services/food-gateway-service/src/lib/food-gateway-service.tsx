import { User } from '@food/model/user';

export const FoodGatewayService = {
  userLogin: (): User => ({
    name: 'Benjamin Scott',
    isLoggedIn: true
  }),

  userLogout: (): User => ({
    name: '',
    isLoggedIn: false
  })
};

export default FoodGatewayService;
