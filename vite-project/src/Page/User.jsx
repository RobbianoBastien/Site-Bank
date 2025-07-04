import './User.scss'
import Userdata from '../Component/UserData'
import Username from '../Component/UserName'
import Account from '../Component/Account' 
 

function User() {
    return(
        <main class="main bg-dark">
          <Userdata/>
          <Username/>
      <h2 class="sr-only">Accounts</h2>
        <Account
          title="Argent Bank Checking (x8349)"
          amount="$2,082.79"
          description="Available Balance"
        />
      <Account
          title="Argent Bank Savings (x6712)"
          amount="$10,928.42"
          description="Available Balance"
      />
      <Account
          title="Argent Bank Credit Card (x8349)"
          amount="$184.30"
          description="Current Balance"
      />
    </main>
    )
}

export default User