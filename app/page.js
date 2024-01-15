import Image from "next/image";
import Counter from '../components/Counter'
import FullWidthButton from '../components/Button/FullWidthButton'
import Explore from '../components/Explore'
import Testimonial from '../components/Testimonial';
import ArticleCard from '../components/Card/ArticleCard';


export default function Home() {
  return (
<>
<h1 className='text-primaryColor'>
  Hello World
</h1>
<Counter/>
<h1 className='text-primaryColor'>
  Hello World
</h1>
<FullWidthButton/>
<h1 className='text-primaryColor'>
  Hello World
</h1>
<Explore/>
{/* <Testimonial/>
<h1 className='text-primaryColor'>
  Hello World
</h1>
<ArticleCard/> */}

</>
  );
}
