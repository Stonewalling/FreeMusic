export type RouterType = {
  // route props
  path?: string;
  element?: ReactNode;
  children?: RouterType[];
  loader?: () => void;
  // menu props
  icon?: ReactNode;
  name?: string;
  label?: string;
  hide?: boolean;
  // auth props
  auth?: Roles[];
};
