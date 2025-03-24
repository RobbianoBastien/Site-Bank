import './Home.scss'
import Hero from '../Component/Hero'
import Feature from '../Component/Feature'
import iconMoney from '../assets/image/icon-money.png'
import iconChat from '../assets/image/icon-chat.png'
import iconSecurity from '../assets/image/icon-security.png'

function home() {
    return(<div>
        <Hero />
      <section className="features">
        <h2 className="sr-only">Features</h2>
        <Feature img={iconChat} 
        title="you are our #1 priority" 
        description="Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes." 
        />
        <Feature img={iconMoney} 
        title="More savings means higher rates" 
        description="The more you save with us, the higher your interest rate will be!" 
        />
       <Feature img={iconSecurity} 
        title="Security you can trust" 
        description="we use top of the line encryption to make sure your data and money is always safe." 
        />
      </section>
    </div>

    )
}

export default home