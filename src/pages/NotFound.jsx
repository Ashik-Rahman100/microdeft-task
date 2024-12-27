import notfound from '../assets/notfound.svg'

export default function NotFound() {
  return (
    <div className='min-h-screen'>
      <img className='h-screen w-full' src={notfound} alt="" />
    </div>
  )
}
