import {
    SwipeableList,
    SwipeableListItem,
    SwipeAction,
    TrailingActions,
  } from 'react-swipeable-list';
import 'react-swipeable-list/dist/styles.css';
import { useBudget } from '../hooks/useBudget';

import { FaMugHot } from 'react-icons/fa';
import { FaMoneyBill } from 'react-icons/fa';
import { FaHouse } from 'react-icons/fa6';
import { FaBicycle } from 'react-icons/fa';
import { FaShirt } from 'react-icons/fa6';
import { FaHeart } from 'react-icons/fa';
import { FaFaceSmile } from 'react-icons/fa6';
import { FaGhost } from 'react-icons/fa';

type ExpenseItemProps = {
    id: string
    expenseName: string
    amount: number
    category: string
    date: string
}

const ExpenseItem = ({id, expenseName, amount, category, date}: ExpenseItemProps) => {
    const {dispatch} = useBudget()
     
    const trailingActions = () => (
      <TrailingActions>
        <SwipeAction
          destructive={true}
          onClick={() => dispatch({type: 'delete-item', payload: {id: id}})}
        >
          Delete
        </SwipeAction>
      </TrailingActions>
      )

      const handleIcons = () => {
        if(category === 'Feeding'){
          return (<FaMugHot />)
        } 
        if(category === 'Accounts and payments'){
          return (<FaMoneyBill />)
        }
        if(category === 'House'){
          return (<FaHouse />)
        }
        if(category === 'Transport'){
          return (<FaBicycle />)
        }
        if(category === 'Clothes'){
          return (<FaShirt />)
        }
        if(category === 'Health and hygiene'){
          return (<FaHeart />)
        }
        if(category === 'Fun'){
          return (<FaFaceSmile />)
        }
        if(category === 'Other expenses'){
          return (<FaGhost />)
        }
      }


  return (
    <SwipeableList>
        <SwipeableListItem
            trailingActions={trailingActions()}
        >
            <div className="mt-5 w-full border-b-2 pb-5">
                <div className="flex justify-between items-center">
                    <div className="flex items-center ">
                        <figure className="text-white w-8 h-8 mr-3 bg-orange-400 rounded-full flex justify-center items-center">
                            {handleIcons()}
                        </figure>
                        <div>
                            <p className="text-lg font-bold ">{expenseName}</p>
                            <p className='text-sm text-gray-500'>{date}</p>
                            <p className="font-semibold text-sm">{category}</p>
                        </div>
                    </div>
                    <div>
                        <p className="font-bold text-xl">${amount}</p>
                    </div>
                </div>
            </div>
        </SwipeableListItem>
        </SwipeableList>
  )
}

export default ExpenseItem