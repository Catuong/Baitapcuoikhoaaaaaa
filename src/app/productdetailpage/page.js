export const metadata = {
    title: "About - LIKELION",
    description: "Generated by create next app",
  };
import Image from "next/image";
import { Lora } from "next/font/google";
const lora = Lora({
    subsets: ["latin"],
    weight: ["400", "500", "600"],
  });
  
  export default function About() {
    return <div className="mx-auto grid max-w-7xl p-8"> 
                <div className=" flex gap-3">
                <div className="flex gap-2">
                <h3 className="text-lg">Home</h3>
                <Image src="/muiten.png" alt="" width={20} height={20} />
                </div>
                <div className="flex gap-2">
                <h3 className="text-lg">Shop</h3>
                <Image src="/muiten.png" alt="" width={20} height={20} />
                </div>
                <div className="flex gap-2">
                <h3 className="text-lg">Men</h3>
                <Image src="/muiten.png" alt="" width={20} height={20} />
                </div>
                <div className="flex gap-2">
                <h3 className="text-lg">T-shirt</h3>
                <Image src="/muiten.png" alt="" width={20} height={20} />
                </div>
                </div>
                <div>
                <div className="mx-auto grid p-8">
                        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-8">
                            <div className=" flex gap-2 md:col-span-1 lg:col-span-5">
                                <div className="">
                                <Image src="/tshirt.png" alt="" width={200} height={200} />
                                <Image src="/2.png" alt="" width={200} height={200} />
                                <Image src="/3.png" alt="" width={200} height={200} />
                                </div>
                                <div className="">
                                    <Image src="/tshirt.png" alt="" width={600} height={600} />
                                </div>
                            </div>
                            
                            <div className="flex flex-col pt-6 sm:col-span-1 sm:px-6 sm:pt-0 lg:col-span-3 lg:pt-16">
                                <div className="">
                                <h3 className="mb-3 text-black-500 dark:text-black-500 text-3xl font-semibold sm:text-4xl">ONE LIFE GRAPHIC T-SHIRT</h3>
                                <Image  className="py-3 sm:py-3" src="/rate.png" alt="" width={200} height={80} />
                                <div className="flex gap-3">
                                            <Image src="/Frame12.png" alt="" width={100} height={80} />
                                            <Image src="/Frame3.png" alt="" width={100} height={80} />    
                                </div>
                                <div className="d-flex justify-content-between align-items-center py-3 sm:py-3 ">
                                    <p>This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.</p>
                                </div>
                            </div>
                                
                            <div className="mt-2 mb-2 ">
                                            <div className="text-uppercase pt-4 d-block fw-bolder">
                                                <span className="text-muted">Select Colors</span>
                                                <div className="mt-4 d-flex justify-content-start flex-wrap align-items-start">
                                                <Image src="/Frame 77.png" alt="" width={150} height={80} />    
                                                </div>
                                            </div>
                                            <div className="pt-4 d-block fw-bolder">
                                                <span className="text-muted">Choose Size</span>
                                                <div className="mt-4 flex gap-3 ">
                                                    <Image src="/Small.png" alt="" width={90} height={50} />    
                                                    <Image src="/medium.png" alt="" width={90} height={50} />    
                                                    <Image src="/large.png" alt="" width={90} height={50} />    
                                                    <Image src="/x-large.png" alt="" width={90} height={50} />    
                                                </div>
                                                <div className="mt-4 flex gap-3">
                                                    <Image src="/number.png" alt="" width={180} height={50} />    

                                                    <button class=" w-full rounded-full text-white ring-offset-2 focus:ring bg-gray-800 px-9 py-2.5 font-medium text-sm text-center">Add to Cart</button>
                

                                                </div>
                                            </div>
                                        </div>
                            
                            </div>

                        </div>
                </div>
                 </div>   
                 <div className="text-gray-800 dark:text-gray-50 text-xl font-semibold sm:text-2xl flex space-x-2  ">
                  <h5>Product Details</h5>
                  <h5>Rating & Reviews</h5>
                  <h5>FAQs</h5>
                    </div> 
                    <div className="flex items-center flex-col w-full my-4 md:my-8 mx-auto">
                        <div className="my-4 md:my-8 lg:mt-10 mx-auto text-3xl">
                            <div className="">
                                <div className="grid grid-cols-1 gap-8 sm:grid-cols-1 lg:grid-cols-2">
                                <Image src="/review.png" alt="" width={700} height={700} />    
                                <Image src="/review.png" alt="" width={700} height={700} />    
                                <Image src="/review.png" alt="" width={700} height={700} />    
                                <Image src="/review.png" alt="" width={700} height={700} />    
                                <Image src="/review.png" alt="" width={700} height={700} />    
                                <Image src="/review.png" alt="" width={700} height={700} />    
                                  
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="text-center">
      <button className="bg-white border text-black py-4 px-12  font-medium text-sm rounded-full ">Load More Review</button>
                    </div>
                    
                    <div className=" m-auto mt-4 xl:px-14 md:px-12 px-8 py-14 sm:py-20">
 <h2 className="text-gray-800 text-3xl font-extrabold sm:text-4xl max-w-xl xl:mx-auto xl:text-center">YOU MIGHT ALSO LIKE</h2>
 <div className="mt-12">
 <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
  <div className="card">
   <span>
    <Image src="/solike.png" alt="" width={600} height={600} />
   </span>
    <div className="flex flex-col p-5"> 
    <h3 className="text-lg text-black-100 font-semibold">Polo with Contrast Trims</h3>
    <div>
    <Image src="/rate.png" alt="" width={150} height={33} />
    </div>
    <p className="text-xl text-black-100 font-semibold">$212</p>
      </div>
  </div>
        
  <div className="card">
   <span>
    <Image src="/solike2.png" alt="" width={600} height={600} />
   </span>
    <div className="flex flex-col p-5"> 
    <h3 className="text-lg text-black-100 font-semibold">Gradient Graphic T-shirt</h3>
    <div>
    <Image src="/rate.png" alt="" width={150} height={33} />
    </div>
    <p className="text-xl text-black-100 font-semibold">$145</p>
      </div>
  </div>

  <div className="card">
   <span>
    <Image src="/solike3.png" alt="" width={600} height={600} />
   </span>
    <div className="flex flex-col p-5"> 
    <h3 className="text-lg text-black-100 font-semibold">Polo with Tipping Details</h3>
    <div>
    <Image src="/rate.png" alt="" width={150} height={33} />
    </div>
    <p className="text-xl text-black-100 font-semibold">$80</p>
      </div>
  </div>

  <div className="card">
   <span>
    <Image src="/solike4.png" alt="" width={600} height={600} />
   </span>
    <div className="flex flex-col p-5"> 
    <h3 className="text-lg text-black-100 font-semibold">Black Striped T-shirt</h3>
    <div>
    <Image src="/rate.png" alt="" width={150} height={33} />
    </div>
    <p className="text-xl text-black-100 font-semibold">$210</p>
      </div>
  </div>
</div>
   </div>
    </div>
    </div>;
  }
  