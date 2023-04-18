import Container from './container'
import { EXAMPLE_PATH } from '../lib/constants'

const Footer = () => {
  return (
    <footer className="bg-neutral-50 border-t border-neutral-200">
      <Container>
        <div className="py-12 items-center text-center">
          <b>Paul Chen</b>
          <br />
          Email: <a className="text-blue-500" href="mailto:chenpaul.pc@gmail.com">chenpaul.pc@gmail.com</a>
          <br />
          GitHub: <a className="text-blue-500" href="https://github.com/876pol">https://github.com/876pol</a>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
