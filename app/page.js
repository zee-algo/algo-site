import Image from "next/image";
import Counter from '../components/Counter'
import FullWidthButton from '../components/Button/FullWidthButton'
import Explore from '../components/Explore'
import Testimonial from '../components/Testimonial';
import ArticleCard from '../components/Card/ArticleCard';
import GetInTouch from '../components/GetInTouch';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';


export default function Home() {
  return (
<>
<h1>
  hello
</h1>

<NavBar/>

<h1>
  Hello World
</h1>
<Counter/>



<Explore/>

<Testimonial/>



<GetInTouch/>       
<Footer/>               







{/* <Testimonial/>
<h1 className='text-primaryColor'>
  Hello World
</h1>
<ArticleCard/> */}

</>
  );
}
