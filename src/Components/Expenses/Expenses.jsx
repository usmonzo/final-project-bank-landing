import styles from "./Expenses.module.scss";

import { BarChart, Bar, ResponsiveContainer, Cell } from "recharts";
import React, { useState } from "react";
import optionIcon from "../assets/png/menuIcon.png";
import cartIcon from "../assets/svg/cartIcon.svg";
import transportIcon from "../assets/svg/transportIcon.svg";
import houseIcon from "../assets/svg/houseIcon.svg";
import boxes from "../assets/png/boxes.png";
import plant from "../assets/png/plant.png";
import usmonzo from "../Sidebar/usmonzo.jpeg";
import {
  Stat,
  StatArrow,
  StatGroup,
  StatHelpText,
  StatLabel,
  StatNumber,
} from "@chakra-ui/react";
export default function Expenses({ Logout }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const data = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Page F",
      uv: 3390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Page G",
      uv: 390,
      pv: 4300,
      amt: 2100,
    },
  ];
  const todayExpenses = [
    {
      id: 1,
      expense: "Steam",
      time: "17:12",
      location: "Интернет",
      price: 326.8,
      icon: cartIcon,
      iconBackgroundColor: "#32a7e2",
    },
    {
      id: 2,
      expense: "Такси",
      time: "18:00",
      location: "Транспорт",
      price: 15.0,
      icon: transportIcon,
      iconBackgroundColor: "#B548C6",
    },
    {
      id: 3,
      expense: "Продукты",
      time: "12:12",
      location: "Пайкар",
      price: 185.75,
      icon: houseIcon,
      iconBackgroundColor: "#FF8700",
    },
  ];
  const previousExpenses = [
    {
      id: 1,
      expense: "KFC",
      time: "10:12",
      location: "Еда ",
      price: 156.0,
      icon: cartIcon,
      iconBackgroundColor: "#DC3434",
    },
    {
      id: 2,
      expense: "Книжный Мир",
      time: "19:12 ",
      location: "Книги",
      price: 35.2,
      icon: transportIcon,
      iconBackgroundColor: "#4BA83D",
    },
  ];
  const spendCategories = [
    {
      id: 1,
      category: "Еда и напитки",
      price: 872.4,
    },
    {
      id: 2,
      category: "Интернет магазины",
      price: 1378.2,
    },
    {
      id: 3,
      category: "Автобус",
      price: 928.5,
    },
    {
      id: 4,
      category: "Такси",
      price: 420.7,
    },
    {
      id: 5,
      category: "Интернет",
      price: 520,
    },
  ];

  const onMouseOver = (data, index) => {
    setActiveIndex(index);
  };

  return (
    <>
      <main className={styles.expenses}>
        <div className={styles.expensesCard}>
          <div className={styles.profileDetails}>
            <div className={styles.profileImageDiv}>
              <div className={styles.userNameEmail}>
                <img className={styles.profileAvatar} src={usmonzo} alt="." />
                <div>
                  <p className={styles.userName}>Усмон Тураев</p>
                  <p className={styles.userEmail}>
                    usmonzo@<span className={styles.gmailCom}>gmail.com</span>
                  </p>
                </div>
                <button
                  color="blue"
                  className={styles.buttonn}
                  onClick={Logout}
                >
                  Выйти
                </button>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                    margin: "20px 0 10px 0",
                  }}
                >
                  <h2 className={styles.balanceH2}>Баланс:</h2>
                  <span className={styles.balance}>8 996 $</span>
                </div>
                <StatGroup>
                  <Stat marginRight={10}>
                    <StatLabel>Доходы</StatLabel>
                    <StatNumber>4,670$</StatNumber>
                    <StatHelpText>
                      <StatArrow type="increase" />
                      23.36%
                    </StatHelpText>
                  </Stat>
                  <Stat>
                    <StatLabel>Расходы</StatLabel>
                    <StatNumber>450$</StatNumber>
                    <StatHelpText>
                      <StatArrow type="decrease" />
                      9.05%
                    </StatHelpText>
                  </Stat>
                </StatGroup>
              </div>
            </div>
          </div>
          <section className={styles.expensesOverview}>
            <div className={styles.expensesHeader}>
              <p className={styles.expensesTitle}>Расходы</p>
              <p className={styles.dateRange}>01 Ст. - 01 Октября , 2022</p>
            </div>
            <div className={styles.graph}>
              <ResponsiveContainer width="100%" height={100}>
                <BarChart width={150} height={40} data={data}>
                  <Bar dataKey="uv" onMouseOver={onMouseOver}>
                    {data.map((entry, index) => (
                      <Cell
                        cursor="pointer"
                        fill={index === activeIndex ? "#2673e2" : "#019f29"}
                        key={`cell-${index}`}
                      />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>

            <div className={styles.expensesOverviewHeader}>
              <p className={styles.expensesOverviewTitle}>Сегодня</p>
              <button>
                <img
                  className={styles.expenseOption}
                  src={optionIcon}
                  alt="options"
                />
              </button>
            </div>

            <ul>
              {todayExpenses.map((expense) => (
                <li className={styles.expenseItem} key={expense.id}>
                  <div className={styles.expenseItemLeft}>
                    <div
                      style={{ backgroundColor: expense.iconBackgroundColor }}
                      className={styles.expenseItemDiv}
                    >
                      <img src={cartIcon} alt={expense.expense} />
                    </div>
                    <div className={styles.expenseItemDetails}>
                      <p className={styles.expenseItemTitle}>
                        {expense.expense}
                      </p>
                      <p className={styles.expenseItemTime}>
                        {expense.time} • {expense.location}
                      </p>
                    </div>
                  </div>
                  <p className={styles.expenseItemPrice}>
                    {expense.price.toFixed(2)}
                  </p>
                </li>
              ))}
            </ul>

            <div className={styles.expensesOverviewHeader}>
              <p className={styles.expensesOverviewTitle}>
                Пон. 23 Сентября 2022
              </p>
              <button>
                <img
                  className={styles.expenseOption}
                  src={optionIcon}
                  alt="options"
                />
              </button>
            </div>

            <ul>
              {previousExpenses.map((expense) => (
                <li className={styles.expenseItem} key={expense.id}>
                  <div className={styles.expenseItemLeft}>
                    <div
                      style={{ backgroundColor: expense.iconBackgroundColor }}
                      className={styles.expenseItemDiv}
                    >
                      <img src={cartIcon} alt={expense.expense} />
                    </div>
                    <div className={styles.expenseItemDetails}>
                      <p className={styles.expenseItemTitle}>
                        {expense.expense}
                      </p>
                      <p className={styles.expenseItemTime}>
                        {expense.time} • {expense.location}
                      </p>
                    </div>
                  </div>
                  <p className={styles.expenseItemPrice}>
                    {expense.price.toFixed(2)}
                  </p>
                </li>
              ))}
            </ul>
          </section>

          <section className={styles.moneyOverview}>
            <p className={styles.moneyOverviewTitle}>Категории расходов:</p>

            <ul>
              {spendCategories.map((category) => (
                <li key={category.id}>
                  <div className={styles.spendCategory}>
                    <p className={styles.spendCategoryName}>
                      {category.category}
                    </p>
                    <p className={styles.spendCategoryPrice}>
                      {category.price.toFixed(2)}
                    </p>
                  </div>
                  <div className={styles.spendCategoryBar}>
                    <div
                      style={{
                        width: `${
                          (category.price /
                            spendCategories.reduce(
                              (acc, current) => acc + current.price,
                              0
                            )) *
                          100
                        }%`,
                      }}
                      className={styles.spendCategoryColoredBar}
                    ></div>
                  </div>
                </li>
              ))}
            </ul>

            <div className={styles.saveMoneyDiv}>
              <img className={styles.boxes} src={boxes} alt="boxes" />
              <img className={styles.plant} src={plant} alt="plant" />
              <p className={styles.saveMoneyTitle}>Сэкономь свои деньги.</p>
              <p className={styles.saveMoneyInfo}>
                Ежедневные советы, где и как можно сэкономить.
              </p>
              <button className={styles.button} type="button">
                Подробнее
              </button>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
