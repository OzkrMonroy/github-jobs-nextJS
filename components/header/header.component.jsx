import Link from 'next/link'

const Header = () => {
  return (
    <div className="mb-8 pt-2">
      <Link href="/">
        <a>
          <h1 className="font-bold text-4xl md:text-5xl inline-block">Github<span className="font-light"> Jobs</span></h1>
        </a>
      </Link>
    </div>
  );
}
 
export default Header;