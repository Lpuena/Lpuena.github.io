import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

export default defineConfig({
  shortcuts: [
    {
      btn: 'transition-all duration-200 transform hover:scale-105 active:scale-95 text-white font-medium px-7 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 shadow-lg hover:shadow-xl transition-all duration-300',
    },
    {
      'a-btn': 'relative text-gray-600 hover:text-gray-900 transition-colors after:block after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-blue-600  hover:after:w-full after:transition-all',
    },
    {
      bgtf: 'from-[#CFFFBD] to-[#B9DFFF]',
    },
    {
      'dark-btn': 'dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-gray-100',
    },
    {
      dbg: 'bg-[#222]',
      dbr: 'border-gray-700/50',
    },
    {
      fr: 'transition-all duration-200 focus:ring-2 focus:ring-blue-500',
    },
    {
      textCol: 'text-blue-600 font-bold dark:text-blue-400',
    },
    {
      headerImgLight: 'bg-[radial-gradient(transparent_1px,_rgba(255,_255,_255,_0.8)_1px)]',
      headerImgDark: 'bg-[radial-gradient(transparent_1px,_rgba(34,_34,_34,_0.8)_1px)]',
    },
  ],
  rules: [
    ['bg-custom-size', { 'background-size': '4px 4px' }],
  ],
  theme: {
  },
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons(),
    presetTypography(),
    presetWebFonts({
      fonts: {
        // ...
      },
    }),
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
})
