declare let twemoji: {
  parse(
    icon: string,
    callback: (iconName: string, options: {
      className: string;
      base: string;
      size: string;
      ext: string;
    }, variant: string) => void
  ): void;
};
