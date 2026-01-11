import banner from '../../assets/banner.jpg'

const Banner = () => {
  return (
    <div className="bg-[#9538E2] flex flex-col justify-center items-center px-30 py-10 gap-7">
      {/* text */}
        <div className="text-center text-white space-y-7 ">
        <h1 className="text-5xl font-bold">Upgrade Your Tech Accessorize with Gadget Heaven Accessories</h1>
        <p className="font-light">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
        <button className="btn text-[#9538E2] cursor-pointer rounded-3xl">Shop Now</button>
      </div>
      {/* image */}
      <div className='w-3/5 bg-transparent border-2 border-white rounded-3xl p-3 top-10'>
        <img className='border rounded-3xl' src={banner} alt="" />
      </div>
      </div>
  );
};

export default Banner;
