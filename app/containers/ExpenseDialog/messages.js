/*
 * ExpenseDialog Messages
 *
 * This contains all the text for the ExpenseDialog container.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.containers.ExpenseDialog';

export default defineMessages({	
	  title: {
      id: `${scope}.title`,
      defaultMessage: 'Add Expense'
    },
    cancel: {
      id: `${scope}.cancel`,
		  defaultMessage: 'Cancel'
    },
    submit: {
      id: `${scope}.submit`,
		  defaultMessage: 'ADD'
    },
    category: {
      id: `${scope}.category`,
		  defaultMessage: 'Category'
    }
});