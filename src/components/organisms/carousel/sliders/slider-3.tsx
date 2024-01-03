export default function Slider3() {
  return (
    <div>
      <img
        src="https://demo.goodlayers.com/greennature/wp-content/uploads/2015/10/slider-3.jpg"
        alt=""
        className="w-full h-screen max-h-[900px] object-cover"
      />
      <div className="absolute inset-0">
        <div className="container h-full flex flex-col gap-4 justify-center items-center">
          <div className="text-7xl font-bold">MAKE THIS WORLD</div>
          <div className="text-5xl font-thin p-4 text-white bg-black bg-opacity-50">
            The Better Place
          </div>
        </div>
      </div>
    </div>
  );
}
