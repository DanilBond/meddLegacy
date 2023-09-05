import {config, createConfig} from '@gluestack-ui/themed';

export const conf = createConfig({
  ...config.theme,
  aliases: {
    ...config.theme.aliases,
  },
  tokens: {
    ...config.theme.tokens,
    colors: {
      ...config.theme.tokens.colors,
      secondary: 'green',
    },
  },
  components: {
    Button: {
      theme: {
        bgColor: '$purple200',
        borderRadius: 16,
        minHeight: 48,
      },
    },
    ButtonText: {
      theme: {
        color: '#FFFFFF',
        fontFamily: 'Poppins-Regular',
        fontSize: 16,
      },
    },
  },
} as const);
