const HeroSection = () => {
  return (
    <div className="flex justify-center items-center gap-4 px-10 py-20">
        <div className="hero-content flex-1 space-y-2">
            <span className="text-sm bg-green-200 p-2 rounded-2xl inline-block">শিক্ষকদের জন্য স্মার্ট জেনারেটর</span>
            <h2 className="text-secondary font-bold text-4xl">বাংলা ওয়ার্কশিট জেনারেটর</h2>
            <p>ছোট্ট সোনামণিদের বর্ণমালা ও ভাষা শেখা হোক আরও সহজ আর আনন্দের! ‘লেখাপড়া’র সাহায্যে শিক্ষক ও অভিভাবকেরা এখন মাত্র কয়েক মিনিটে প্রি-কেজি এবং কিন্ডারগার্টেনের বাচ্চাদের জন্য দারুণ সব কাস্টম বাংলা ওয়ার্কশিট তৈরি করতে পারবেন, একদম তাদের মনের মতো করে।</p>
        </div>
        <div className="hero-banner flex-1 hidden justify-center md:block">
            <img src="https://placehold.co/600x400" alt="" srcset="" />
        </div>
    </div>
  )
}

export default HeroSection