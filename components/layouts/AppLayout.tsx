import Nav from '../nav';

export default function AppLayout({children}) {
  return (
    <>
      <Nav />
      {children}
    </>
  )
}