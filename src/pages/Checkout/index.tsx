import Card from '../../components/Card'

const Checkout = () => (
  <div className="container">
    <Card title='Dados da cobrança'>
      <div>
          <div>
              <label htmlFor='fullName'>Nome completo</label>
              <input id='fullName' type="text" />
          </div>
          <div>
              <label htmlFor='email' >E-mail</label>
              <input id='email' type="email" />
          </div>
          <div>
              <label htmlFor='cpf'>CPF</label>
              <input id='cpf' type="text" />
          </div>
      </div>
    </Card>
  </div>
)

export default Checkout
