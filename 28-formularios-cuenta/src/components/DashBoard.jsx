import React from 'react'
import { PieChart, Pie, Cell } from 'recharts';
import { CHARGE_TYPE_EXPENSE, CHARGE_TYPE_INCOME } from '../config/config'

const DashBoard = props => {




    const data =
        props.items.map(
            item => {
                return {
                    name: item.subject,
                    value: item.amount,
                    color: item.type === CHARGE_TYPE_EXPENSE ? '#FF8042' : '#0088FE'
                }
            }
        )



    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
            <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
                {`${(percent * 100).toFixed(0)}%`}
            </text>
        );
    };

    return (
        <div className="project-dashboard">
            <PieChart width={800} height={400} >
                <Pie
                    data={data}
                    cx={300}
                    cy={200}
                    labelLine={false}
                    label={renderCustomizedLabel}
                    outerRadius={80}
                    fill="#8884d8"
                >
                    {
                        data.map(entry => <Cell fill={entry.color} />)
                    }
                </Pie>
            </PieChart>
        </div>
    )
}

export default DashBoard
