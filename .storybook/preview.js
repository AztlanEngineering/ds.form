import * as React from 'react'
import { addDecorator } from '@storybook/react'
import { IntlProvider } from 'react-intl'
import '@fwrlines/stylebook/src/main.scss'
import '@fwrlines/swatch/main.scss'
import 'styles/main.scss'

addDecorator(storyFn => <IntlProvider locale='en'>{ storyFn() }</IntlProvider>)

