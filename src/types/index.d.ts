declare module '*.module.css' {
  const content: Record<string, string>;
  export default content;
}
declare module '*.jpg' {
  const value: HTMLAttributes;
  export = value;
}
