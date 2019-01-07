import React from 'react';
import { Table, TableBody, TableRow, TableCell, TableHead, Paper } from '@material-ui/core';
import styled from 'styled-components';
import { injectIntl } from 'react-intl';

const CustomWrapper = styled(Paper)`
    width: '50%',
    margin-top: '50px',
    margin-left: '120px',
    overflowX: 'auto'
`;

const CustomTableCell = styled(TableCell)`
    font-size: 12,
    width: '20%'
`;

class ExpenseList extends React.PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
                
        return (
            <div>
                <CustomWrapper>
                    <Table>
                    <TableHead>
                        <TableRow>
                            <CustomTableCell>Transaction Date</CustomTableCell>
                            <CustomTableCell align="right">Transaction Details</CustomTableCell>                        
                            <CustomTableCell align="right">Category</CustomTableCell>
                            <CustomTableCell align="right">Price</CustomTableCell>
                        </TableRow>
                        </TableHead>
                        <TableBody>
                            {this.props.expenses && 
                            this.props.expenses.map(expense => {
                                return (
                                    <TableRow key={expense.id}>
                                        <CustomTableCell component="th" scope="row">{expense.time}</CustomTableCell>
                                        <CustomTableCell align="right">
                                            <span>{expense.spentAt}</span><br />
                                            <span>{expense.description}</span><br />
                                            <span>{expense.expenseType}</span>
                                        </CustomTableCell>
                                        <CustomTableCell align="right">
                                            <span>{expense.mainCategoryName}</span><br />
                                            <span>{expense.subCategoryName}</span>                                             
                                        </CustomTableCell>
                                        <CustomTableCell align="right">{expense.price} CAD</CustomTableCell>                                                                                
                                    </TableRow>
                                );
                            })}
                        </TableBody>
                    </Table>
                </CustomWrapper>
            </div>
        );
    }
}

export default injectIntl(ExpenseList);