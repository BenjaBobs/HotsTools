export type AppDefinition = {
  name: string;
  path: string;
  nestedApps?: AppDefinition[];
  component?: React.ReactNode;
  overrideLink?: string;
};

export type ExtendedAppDefinition = Omit<AppDefinition, 'nestedApps'> & {
  absolutePath: string;
  nestedApps?: ExtendedAppDefinition[];
};
