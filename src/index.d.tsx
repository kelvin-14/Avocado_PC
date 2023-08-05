declare global {
  interface Window {
    versions: {
        node:any,
        chrome:any,
        electron:any
    };
  }
}
export {};