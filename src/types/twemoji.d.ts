declare var twemoji: {
  parse(
    icon: string,
    callback: (icon: string, options: {
      className: string;
      base: string;
      size: string;
      ext: string;
    }, variant: string) => void
  ): void;
};
