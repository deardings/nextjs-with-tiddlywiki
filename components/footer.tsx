import Container from './container'

const Footer = () => {
  return (
    <footer className="bg-neutral-50 border-t border-neutral-200">
      <Container>
        <div className='flex justify-center m-3 gap-10'>
          Copyright Arthur Glaubig. Der Rest ist eignetlich egal
        </div>
      </Container>
    </footer>
  )
}

export default Footer
