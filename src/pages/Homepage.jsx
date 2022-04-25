
import {Nav,Navbar, Button, Stack } from "react-bootstrap"
import Container from "react-bootstrap/Container"
import AddBudgetModal from "../components/AddBudgetModal"
import AddExpenseModal from "../components/AddExpenseModal"
import ViewExpensesModal from "../components/ViewExpensesModal"
import BudgetCard from "../components/BudgetCard"
import UncategorizedBudgetCard from "../components/UncategorizedBudgetCard"
import TotalBudgetCard from "../components/TotalBudgetCard"
import { useState,useEffect } from "react"
import { UNCATEGORIZED_BUDGET_ID, useBudgets } from "../contexts/BudgetsContext"
// import { BudgetsProvider } from "../contexts/BudgetsContext"
import { getAuth, updateProfile } from 'firebase/auth'
import {useNavigate,Link} from 'react-router-dom'



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
   
    <Navbar bg="dark" variant="dark" >
    <Container>
      <Navbar.Brand href="#home">
        <img
          alt=""
          src="logo.svg"
          width="30"
          height="30"
          className="d-inline-block align-top"
        />{' '}
      madmoney
      </Navbar.Brand>
      <Nav className="ms-auto">
      <Nav.Link href="#connect">Connect</Nav.Link>
      <Nav.Link href="#help">Help</Nav.Link>
      <Button type='button' className='logOut' onClick={onLogout}>Log Out </Button>
      
    </Nav>
    </Container>
  </Navbar>
<Container className="mt-3"> Welcome back, {name}</Container>

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
    
        
    <Navbar bg="dark" variant="dark" fixed="bottom" className=" mt-5">
       <Stack direction='horizontal' gap={2} className=" mx-auto" > 
          <Button variant="primary"  onClick={() => setShowAddBudgetModal(true)}> Add Budget </Button>
          <Button variant="danger"  onClick={openAddExpenseModal}> Add an Expense </Button>
        </Stack>
    </Navbar>
  


    </>
  )
}

export default Homepage
