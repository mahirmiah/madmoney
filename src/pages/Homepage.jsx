// import { BudgetsProvider } from "../contexts/BudgetsContext"
import {Navbar, Button, Stack,Alert, } from "react-bootstrap"
import ChatBot from "../components/ChatBot"
import Container from "react-bootstrap/Container"
import AddBudgetModal from "../components/AddBudgetModal"
import AddExpenseModal from "../components/AddExpenseModal"
import ViewExpensesModal from "../components/ViewExpensesModal"
import BudgetCard from "../components/BudgetCard"
import UncategorizedBudgetCard from "../components/UncategorizedBudgetCard"
import TotalBudgetCard from "../components/TotalBudgetCard"
import { useState, } from "react"
import { UNCATEGORIZED_BUDGET_ID, useBudgets } from "../contexts/BudgetsContext"
import { getAuth,  } from 'firebase/auth'
import {useNavigate,} from 'react-router-dom'
import Toast from 'react-bootstrap/Toast'
import NavBarCustom from "../components/NavBarCustom"
import IntroToast from "../components/IntroToast"




function Homepage() {
  const [showAddBudgetModal, setShowAddBudgetModal] = useState(false)
  const [showAddExpenseModal, setShowAddExpenseModal] = useState(false)
  const [viewExpensesModalBudgetId, setViewExpensesModalBudgetId] = useState()
  const [addExpenseModalBudgetId, setAddExpenseModalBudgetId] = useState()
  const { budgets, getBudgetExpenses } = useBudgets()


  const auth=getAuth()
  const [formData,setFormData] = useState({
    name:auth.currentUser.displayName,
    email:auth.currentUser.email,
  })

  const { name, email } = formData

  const navigate = useNavigate()
  const onLogout = () => {
    auth.signOut()
    navigate('/sign-in')
  } 


  function openAddExpenseModal(budgetId) {
    setShowAddExpenseModal(true)
    setAddExpenseModalBudgetId(budgetId)
  } 

  
  return (
    <> 
 <NavBarCustom></NavBarCustom>
 

  {[
   
    'secondary',
   
  ].map((variant) => (
    <Alert key={variant} variant={variant}>
     <div align='center'>
     Welcome back, {name}

     </div>
    </Alert>
  ))}

      <Container className="my-4">
        
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: "1rem",
            alignItems: "flex-start",
          }}
        >
          {budgets.map(budget => {
            const amount = getBudgetExpenses(budget.id).reduce(
              (total, expense) => total + expense.amount,
              0
            )
            return (
              <BudgetCard
                key={budget.id}
                name={budget.name}
                amount={amount}
                max={budget.max}
                onAddExpenseClick={() => openAddExpenseModal(budget.id)}
                onViewExpensesClick={() =>
                  setViewExpensesModalBudgetId(budget.id)
                }
              />
            )
          })}
          <UncategorizedBudgetCard
            onAddExpenseClick={openAddExpenseModal}
            onViewExpensesClick={() =>
              setViewExpensesModalBudgetId(UNCATEGORIZED_BUDGET_ID)
            }
          />
          <TotalBudgetCard />
        </div>
      </Container>
      <AddBudgetModal
        show={showAddBudgetModal}
        handleClose={() => setShowAddBudgetModal(false)}
      />
      <AddExpenseModal
        show={showAddExpenseModal}
        defaultBudgetId={addExpenseModalBudgetId}
        handleClose={() => setShowAddExpenseModal(false)}
      />
      <ViewExpensesModal
        budgetId={viewExpensesModalBudgetId}
        handleClose={() => setViewExpensesModalBudgetId()}
      />
    {/* <ChatBot></ChatBot> */}
    <IntroToast></IntroToast>
        
    <Navbar bg="grey" variant="light" fixed="bottom" className=" mt-5">
       <Stack direction='horizontal' gap={2} className=" mx-auto" > 
          <Button variant="primary"  onClick={() => setShowAddBudgetModal(true)}> Add Budget </Button>
          <Button variant="secondary"  onClick={openAddExpenseModal}> Add an Expense </Button>
        </Stack>
    </Navbar> 

  
    
  

    </>
  )
}

export default Homepage
