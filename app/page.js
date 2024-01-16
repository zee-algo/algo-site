import Image from "next/image";
import Counter from '../components/Counter'
import FullWidthButton from '../components/Button/FullWidthButton'
import Explore from '../components/Explore'
import Testimonial from '../components/Testimonial';
import ArticleCard from '../components/Card/ArticleCard';
import GetInTouch from '../components/GetInTouch';


export default function Home() {
  return (
<>

<Counter/>



<Explore/>



<GetInTouch/>                      







{/* <Testimonial/>
<h1 className='text-primaryColor'>
  Hello World
</h1>
<ArticleCard/> */}

</>
  );
}
