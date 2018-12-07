import { translationMessages } from '../i18n';
import { IntlProvider } from 'react-intl';
import { DEFAULT_LOCALE } from '../containers/App/constants';

export function getIntl(locale = DEFAULT_LOCALE) {
	const intlProvider = new IntlProvider({locale, messages: translationMessages[locale]}, {});
	return intlProvider.getChildContext().intl;
}
