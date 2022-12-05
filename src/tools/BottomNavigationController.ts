import {NavigationProps} from '../navigation/NavigationProps';

/**
 * @param {NavigationProps} navigation navigation props
 * @returns 리턴시 flex
 * @description 페이지 이동시 네비게이션이 사라지고 첫스택으로 이동시 다시 나타납니다
 */
export function hideAppearNav(navigation: any) {
  const parent = navigation.getParent();
  parent?.setOptions({
    tabBarStyle: {display: 'none'},
  });

  return () => {
    parent?.setOptions({
      tabBarStyle: {display: 'flex'},
    });
  };
}

/**
 *
 * @param {NavigationProps} navigation navigation props
 * @description 네비게이션을 숨깁니다.
 */
export function hideNav(navigation: any) {
  const parent = navigation.getParent();
  parent?.setOptions({
    tabBarStyle: {display: 'none'},
  });
}
/**
 *
 * @param {NavigationProps} navigation navigation props
 * @description 네비게이션을 나타냅니다.
 */
export function appearNav(navigation: any) {
  const parent = navigation.getParent();
  parent?.setOptions({
    tabBarStyle: {display: 'flex'},
  });
}
