declare namespace IMainLayout {
  export type IProps = {
    children: JSXElement,
    fetcher: (url: string) => Promise<any>,
    url: string,
    serverData?: any,
    revalidateOnFocus?: boolean,
  };
}

export { IMainLayout };
