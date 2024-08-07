import React from 'react';

export default function ListCardsComponent(){

    const cards = [
    {
        id: 1,
        name: 'Chase Sapphire Preferred',
        lastFourDigits: '1234',
        type: 'Visa',
        creditLimit: 10000,
        availableCredit: 6000,
        balance: 4000,
        dueDate: '2024-08-15',
        minimumPayment: 100,
        interestRate: 15.99,
        status: 'Active'
    },
    {
        id: 2,
        name: 'American Express Gold',
        lastFourDigits: '5678',
        type: 'Amex',
        creditLimit: 15000,
        availableCredit: 11000,
        balance: 4000,
        dueDate: '2024-08-20',
        minimumPayment: 150,
        interestRate: 20.99,
        status: 'Active'
    },
    {
        id: 3,
        name: 'Citi Double Cash',
        lastFourDigits: '9012',
        type: 'MasterCard',
        creditLimit: 8000,
        availableCredit: 7500,
        balance: 500,
        dueDate: '2024-08-25',
        minimumPayment: 50,
        interestRate: 18.24,
        status: 'Inactive'
    }
];
    return (
        <div className='container'>
        <table className="table">
            <thead>
                <tr>
                    <th>Card Name</th>
                    <th>Card Number</th>
                    <th>Card Type</th>
                    <th>Credit Limit</th>
                    <th>Available Credit</th>
                    <th>Balance</th>
                    <th>Due Date</th>
                    <th>Minimum Payment</th>
                    <th>Interest Rate</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody>
                {cards.map((card) => (
                    <tr key={card.id}>
                        <td>{card.name}</td>
                        <td>{`**** **** **** ${card.lastFourDigits}`}</td>
                        <td>{card.type}</td>
                        <td>{`$${card.creditLimit.toFixed(2)}`}</td>
                        <td>{`$${card.availableCredit.toFixed(2)}`}</td>
                        <td>{`$${card.balance.toFixed(2)}`}</td>
                        <td>{new Date(card.dueDate).toLocaleDateString()}</td>
                        <td>{`$${card.minimumPayment.toFixed(2)}`}</td>
                        <td>{`${card.interestRate}%`}</td>
                        <td>{card.status}</td>
                        
                    </tr>
                ))}
            </tbody>
        </table>
        </div>
    );
};