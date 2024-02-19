import React from 'react'
import {TiArrowUnsorted} from 'react-icons/ti'
import {FaSearch} from 'react-icons/fa'
import {FaChevronDown} from 'react-icons/fa'
import './index.css'

const DataTable = () => {
  const orders = [
    {
      channel: 'Channel',
      orderNo: '#TKN20203754',
      orderDate: '2022-05-04',
      city: 'Lucknow',
      customerName: 'Abhishek Dixit',
      value: '0.00',
      status: 'Pending',
      operation: 'Actions',
    },
    {
      channel: 'Channel',
      orderNo: '#TKN20203753',
      orderDate: '2022-05-04',
      city: 'Lucknow',
      customerName: 'Abhishek Dixit',
      value: '0.00',
      status: 'Pending',
      operation: 'Actions',
    },
    {
      channel: 'Channel',
      orderNo: '#TKN20203752',
      orderDate: '2022-05-04',
      city: 'Lucknow',
      customerName: 'Abhishek Dixit',
      value: '0.00',
      status: 'Pending',
      operation: 'Actions',
    },
  ]

  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>
              <input type="checkbox" />
            </th>
            <th>
              Channel{' '}
              <TiArrowUnsorted
                style={{verticalAlign: 'middle', marginLeft: '5px'}}
              />
            </th>
            <th>
              Order No{' '}
              <TiArrowUnsorted
                style={{verticalAlign: 'middle', marginLeft: '5px'}}
              />
              <FaSearch style={{verticalAlign: 'middle', marginLeft: '5px'}} />
            </th>
            <th>
              Order Date{' '}
              <TiArrowUnsorted
                style={{verticalAlign: 'middle', marginLeft: '5px'}}
              />
              <FaSearch style={{verticalAlign: 'middle', marginLeft: '5px'}} />
            </th>
            <th>
              City{' '}
              <TiArrowUnsorted
                style={{verticalAlign: 'middle', marginLeft: '5px'}}
              />
            </th>
            <th>
              Customer Name{' '}
              <FaSearch style={{verticalAlign: 'middle', marginLeft: '5px'}} />
            </th>
            <th>
              Order Value{' '}
              <TiArrowUnsorted
                style={{verticalAlign: 'middle', marginLeft: '5px'}}
              />
            </th>
            <th>
              Status{' '}
              <TiArrowUnsorted
                style={{verticalAlign: 'middle', marginLeft: '5px'}}
              />
            </th>
            <th>Operation</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order, index) => (
            <tr key={index}>
              <td>
                <input type="checkbox" />
              </td>
              <td>{order.channel}</td>
              <td>{order.orderNo}</td>
              <td>{order.orderDate}</td>
              <td>{order.city}</td>
              <td>{order.customerName} </td>
              <td>{order.value}</td>
              <td
                style={{
                  borderRadius: order.status === 'Pending' ? '5px' : '0',
                  border:
                    order.status === 'Pending' ? '2px solid #ff9800' : 'none',
                  color: order.status === 'Pending' ? '#ff9800' : 'none',
                }}
              >
                {order.status}
              </td>
              <td
                style={{
                  border: '1px solid #ddd',
                  padding: '5px',
                }}
              >
                {order.operation} <FaChevronDown />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default DataTable
