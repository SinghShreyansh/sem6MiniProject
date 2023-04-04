import React, { useState, useEffect } from "react";
import { signIn, useSession, getSession } from "next-auth/react";
import Admin from "layouts/Admin.js";
import FertilizerShop from "components/FertilizerShop";
import Link from "next/link";
import ShopNavbar from "components/Navbars/ShopNavbar";


export default function Shop() {
  // const { data: session, status } = useSession();
  // console.log(session);
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   const securePage = () => {
  //     if (status === "unauthenticated") {
  //       signIn();
  //     } else {
  //       setLoading(false);
  //     }
  //   };
  //   securePage();
  // });

  // if (loading) {
  //   return <h2 style={{ marginTop: 100, textAlign: "center" }}>LOADING...</h2>;
  // }

  const products = [
    {
      id: 1,
      name: 'Buffalo Milk',
      href: '#',
      imageSrc: 'https://static.wixstatic.com/media/1a2594_238ac51e79d143bb882f894011f5be29~mv2.jpg/v1/fill/w_963,h_953,al_c,q_85/1a2594_238ac51e79d143bb882f894011f5be29~mv2.webp',
      imageAlt: "",
      price: '65 ₹/liter',
    },
    {
      id: 2,
      name: 'Cow Milk',
      href: '#',
      imageSrc: 'https://static.wixstatic.com/media/1a2594_c3cefcbf24e745629745db782dbcaff8~mv2.png/v1/fill/w_1080,h_1080,al_c,q_90/1a2594_c3cefcbf24e745629745db782dbcaff8~mv2.webp',
      imageAlt: "",
      price: '50 ₹/liter',
    },
    {
      id: 3,
      name: 'Pure Desi Ghi',
      href: '#',
      imageSrc: 'https://static.wixstatic.com/media/1a2594_2a8f1a24a3f24f3794f396d251ffaf20~mv2.jpg/v1/fill/w_771,h_857,al_c,q_85/1a2594_2a8f1a24a3f24f3794f396d251ffaf20~mv2.webp',
      imageAlt: "",
      price: '375 ₹/liter',
    },
    {
      id: 4,
      name: 'Home made Curd',
      href: '#',
      imageSrc: 'https://images.hindustantimes.com/rf/image_size_640x362/HT/p2/2016/07/09/Pictures/_90b9dbd2-45c0-11e6-b0f4-7520104944f6.tif',
      imageAlt: "",
      price: '70 ₹/liter',
    },
    {
      id: 5,
      name: 'Paneer',
      href: '#',
      imageSrc: 'https://static.wixstatic.com/media/1a2594_84a37cb5a132411484a1071be2a79829~mv2.jpg/v1/fill/w_1072,h_874,al_c,q_85/1a2594_84a37cb5a132411484a1071be2a79829~mv2.webp',
      imageAlt: "",
      price: '369 ₹/kg',
    },
    // More products...
  ]

  return (
    // <Admin
    //   title="Nearby Dairy Shops Locator"
    //   headerText="Enter town name to find dairy shops near you"
    //   image={session.user.image}
    // >
    //   <div className="flex flex-wrap mt-4 justify-center">
    //     <div className="w-full mb-12 xl:mb-0 px-4">
    //       <FertilizerShop />
    //     </div>
    //   </div>
    // </Admin>
    <div className="bg-white">
      <ShopNavbar/>

      <div className="mx-auto max-w-2xl py-10 px-4 sm:px-6 lg:max-w-7xl lg:px-8">

        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div key={product.id} className="shadow sm:shadow-md md:shadow-lg lg:shadow-xl xl:shadow-2xl p-5 rounded group relative">
              <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href={product.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                    </a>
                  </h3>
                </div>
                <p className="text-sm font-medium text-gray-900">{product.price}</p>
              </div>
              <button class="mt-2 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                Add to cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// export async function getServerSideProps(context) {
//   const session = await getSession(context);
//   let userId = null;

//   return {
//     props: {
//       session,
//       userId,
//     },
//   };
// }
