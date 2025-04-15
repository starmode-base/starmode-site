/**
 Use tailwind intellisense

 see: `.vscode\settings.json`
 regex defined by `tailwindCSS.experimental.classRegex`
 should match the literal string argument passed to this function.

 @returns the argument as is.
  */
export const tw = <T extends string>(classes: T) => classes;
