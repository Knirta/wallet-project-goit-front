import { useSelector } from 'react-redux'
import TableStats from './TableStats'
import PieChart from './PieChart'
import s from './diagramm.module.scss'

const data = [
  { name: 'Основные расходы', value: 8700.0 },
  { name: 'Продукты', value: 3800.74 },
  { name: 'Машина', value: 1500.0 },
  { name: 'Забота о себе', value: 800.0 },
  { name: 'Забота о детях', value: 2208.5 },
  { name: 'Товары для дома', value: 300 },
  { name: 'Образование', value: 3400.0 },
  { name: 'Досуг', value: 1230.0 },
  { name: 'Другие расходы', value: 610.09 },
]
const sumIncome = [
  { type: 'Расходы:', money: 5000.0 },
  { type: 'Доходы:', money: 10000.0 },
]

const colors = [
  '#FED057',
  '#FFD8D0',
  '#FD9498',
  '#C5BAFF',
  '#6E78E8',
  '#4A56E2',
  '#81E1FF',
  '#24CCA7',
  '#00AD84',
]

export const DiagramTab = () => {
  const balance = useSelector((state) => state.auth.user?.balance)

  return (
    <>
      <div className={s.statsSheet}>
        {data !== undefined ? (
          <>
            <PieChart balance={balance} data={data} colors={colors} />
            <TableStats colors={colors} />
          </>
        ) : (
          <span className="contact-message">You have no transactions yet </span>
        )}
      </div>
    </>
  )
}

export default DiagramTab
