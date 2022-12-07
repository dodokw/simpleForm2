//네비게이션 props 정리
export type NavigationProps = {
  navigation: {
    navigate: (routeName: string, params?: any) => void;
    goBack: () => void;
    getParam: (param: string) => any;
    setParams: (params: any) => void;
  };
};

export enum AllscreenList {
  //로그인 페이지 이름 리스트
  Login = 'Login',

  //첫번쨰 바텀스택 페이지 이름 리스트
  FirstIndex = 'FirstIndex',

  //두번째 바바텀스택 페이지 이름 리스트
  SecondIndex = 'SecondIndex',

  //세번째 바텀스택 페이지 이름 리스트
  ThirdIndex = 'ThirdIndex',

  //네번쨰 바텀스택 페이지 이름 리스트
  FourthIndex = 'FourthIndex',
}

//bottomnNavigation_name
export enum BottomTabNameList {
  first = '첫번째',
  second = '두번째',
  third = '세번째',
  fourth = '네번째',
}

//for useNavigation
export type RootStackParamList = {
  [key: string]: undefined;
};

//page마다 props정리
export type LoginParamList = {
  [AllscreenList.Login]: {};
};

export type FirstBottomParamList = {
  [AllscreenList.FirstIndex]: {};
};

export type SecondBottomParamList = {
  [AllscreenList.SecondIndex]: {};
};

export type ThirdBottomParamList = {
  [AllscreenList.ThirdIndex]: {};
};

export type FourthBottomParamList = {
  [AllscreenList.FourthIndex]: {};
};

export type LoginStackProps<T extends keyof LoginParamList> = NavigationProps &
  LoginParamList[T];
export type FirstBottomStackProps<T extends keyof FirstBottomParamList> =
  NavigationProps & FirstBottomParamList[T];
export type SecondBottomStackProps<T extends keyof SecondBottomParamList> =
  NavigationProps & SecondBottomParamList[T];
export type ThirdBottomStackProps<T extends keyof ThirdBottomParamList> =
  NavigationProps & ThirdBottomParamList[T];
export type FourthBottomStackProps<T extends keyof FourthBottomParamList> =
  NavigationProps & FourthBottomParamList[T];
