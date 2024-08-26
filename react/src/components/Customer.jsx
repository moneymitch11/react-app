
export const Customer = ( {customer}) => {

    return (
        //ASK RAP ABOUT QUESTION-MARK
        <tr>
            <td>{customer.name}</td>
            <td>{customer.email}</td>
            <td>{customer.pass}</td>
        </tr>
    )
}