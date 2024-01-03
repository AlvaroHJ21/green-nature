import Button from '../../../atoms/button';

export default function Slider1() {
  return (
    <div>
      <img
        src="https://demo.goodlayers.com/greennature/wp-content/uploads/2015/10/slider-1.jpg"
        alt=""
        className="w-full h-screen max-h-[900px] object-cover"
      />
      
      <div className="absolute inset-0">
        <div className="container h-full flex flex-col gap-4 justify-center items-start">
          <h1 className="text-8xl text-white">
            <div className="text-5xl">Together</div>
            <div className="font-thin">We can heal</div>
            <div className="font-bold">The Earth</div>
          </h1>
          <Button>Learn More</Button>
        </div>
      </div>
    </div>
  );
}
