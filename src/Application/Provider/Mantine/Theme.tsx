import React from "react";
import {createEmotionCache, MantineProvider} from "@mantine/core";
import * as Constant from '@producter/Application/Constant'

const themeCache = createEmotionCache({key: 'producter'})

export const ThemeProvider: React.FC<React.PropsWithChildren> = (props) => {
    const {children} = props;
    return (
        <MantineProvider theme={Constant.Mantine.Theme} emotionCache={themeCache} withGlobalStyles withNormalizeCSS>
            {children}
        </MantineProvider>
    )
}