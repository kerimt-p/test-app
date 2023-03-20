import type { AppProps } from 'next/app'
import * as Provider from '@producter/Application/Provider'

export default function App({ Component, pageProps }: AppProps) {
  return (
      <Provider.Mantine.ColorScheme>
          <Provider.Mantine.Theme>
              <Component {...pageProps} />
          </Provider.Mantine.Theme>
      </Provider.Mantine.ColorScheme>
  )
}
