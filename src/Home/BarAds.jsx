// import React, { useEffect } from "react"
// import Glide from "@glidejs/glide"

// export default function CarouselLogo() {
//   useEffect(() => {
//     const slider = new Glide(".glide-09", {
//       type: "carousel",
//       autoplay: 1,
//       animationDuration: 4500,
//       animationTimingFunc: "linear",
//       perView: 3,
//       classes: {
//         nav: {
//           active: "[&>*]:bg-wuiSlate-700",
//         },
//       },
//       breakpoints: {
//         1024: {
//           perView: 2,
//         },
//         640: {
//           perView: 1,
//           gap: 36,
//         },
//       },
//     }).mount()

//     return () => {
//       slider.destroy()
//     }
//   }, [])

//   return (
//     <>
//       {/*<!-- Component: Testimonial carousel --> */}
//       <div className="glide-09 relative w-full">
//         {/* <!-- Slides --> */}
//         <div data-glide-el="track">
        //   <ul className="whitespace-no-wrap flex-no-wrap [backface-visibility: hidden] [transform-style: preserve-3d] [touch-action: pan-Y] [will-change: transform] relative flex w-full overflow-hidden p-0">
        //     <li>
        //       <img
        //         src="https://expertexpro.com/upload/medialibrary/c08/Gucci.jpg"
        //         className="m-auto h-20 max-h-full w-auto max-w-full"
        //       />
        //     </li>
        //     <li>
        //       <img
        //         src="https://www.couponstoday.org/wp-content/uploads/2021/09/%D8%B9%D8%B1%D9%88%D8%B6-%D8%A7%D8%AA%D8%B4-%D8%A7%D9%86%D8%AF-%D8%A7%D9%85-%D8%A7%D9%84%D8%B3%D8%B9%D9%88%D8%AF%D9%8A%D9%87-%D8%B5%D9%8A%D9%81-2021-1-456x300.png"
        //         className="m-auto h-20 max-h-full w-auto max-w-full"
        //       />
        //     </li>
        //     <li>
        //       <img
        //         src="https://magltk.com/wp-content/uploads/2017/02/9-%E2%80%93-Zara.webp"
        //         className="m-auto h-20 max-h-full w-auto max-w-full"
        //       />
        //     </li>
        //     <li>
        //       <img
        //         src="https://yenisafak.news/wp-content/uploads/2023/09/%D9%84%D9%88%D8%BA%D9%88-%D9%85%D8%A7%D8%B1%D9%83%D8%A9-%D8%A8%D9%88%D9%86%D8%A8%D9%88%D9%8A%D9%86%D8%AA-%D9%84%D9%85%D9%84%D8%A7%D8%A8%D8%B3-%D8%A7%D9%84%D8%A7%D8%B7%D9%81%D8%A7%D9%84-%D9%85%D8%A7%D8%B1%D9%83%D8%A7%D8%AA-%D9%85%D9%84%D8%A7%D8%A8%D8%B3-%D8%A7%D9%84%D8%A3%D8%A7%D8%B7%D9%81%D8%A7%D9%84-%D8%A7%D9%84%D9%81%D8%B1%D9%86%D8%B3%D9%8A%D8%A9.png"
        //         className="m-auto h-20 max-h-full w-auto max-w-full"
        //       />
        //     </li>
        //     <li>
        //       <img
        //         src="https://topinarabic.s3.amazonaws.com/2019/09/%D8%AA%D9%88%D8%A8-20-%D8%A7%D9%81%D8%B6%D9%84-%D9%85%D8%A7%D8%B1%D9%83%D8%A7%D8%AA-%D8%B9%D8%A7%D9%84%D9%85%D9%8A%D8%A9-15-300x278.jpg"
        //         className="m-auto h-20 max-h-full w-auto max-w-full"
        //       />
        //     </li>
        //     <li>
        //       <img
        //         src="https://storyy.cc/wp-content/uploads/2018/07/3778.jpeg"
        //         className="m-auto h-20 max-h-full w-auto max-w-full"
        //       />
        //     </li>
        //   </ul>
//         </div>
//       </div>
//       {/*<!-- End Testimonial carousel --> */}
//     </>
//   )
// }


import React, { useEffect } from "react";
import Glide from "@glidejs/glide";
import '../App.css';


export default function CarouselLogo() {
  useEffect(() => {
    const slider = new Glide(".glide-09", {
      type: "carousel",
      autoplay: 1,
      animationDuration: 4500,
      animationTimingFunc: "linear",
      perView: 3,
      classes: {
        nav: {
          active: "[&>*]:bg-wuiSlate-700",
        },
      },
      breakpoints: {
        1024: {
          perView: 2,
        },
        640: {
          perView: 1,
          gap: 36,
        },
      },
    }).mount();

    return () => {
      slider.destroy();
    }
  }, []);

  return (
    <>
      {/*<!-- Component: Testimonial carousel --> */}
      <div id="myCarouselSection" className="glide-09 relative h-full" style={{ height: '150px', overflowY: 'hidden' , overflowX: 'hidden' }}>
        {/* <!-- Slides --> */}
        <div data-glide-el="track">
        <ul className="whitespace-no-wrap flex-no-wrap [backface-visibility: hidden] [transform-style: preserve-3d] [touch-action: pan-Y] [will-change: transform] relative flex w-full overflow-hidden p-0">
            <li>
              <img
                src="https://expertexpro.com/upload/medialibrary/c08/Gucci.jpg"
                className="m-auto h-20 max-h-full w-auto max-w-full"
              />
            </li>
            <li>
              <img
                src="https://www.couponstoday.org/wp-content/uploads/2021/09/%D8%B9%D8%B1%D9%88%D8%B6-%D8%A7%D8%AA%D8%B4-%D8%A7%D9%86%D8%AF-%D8%A7%D9%85-%D8%A7%D9%84%D8%B3%D8%B9%D9%88%D8%AF%D9%8A%D9%87-%D8%B5%D9%8A%D9%81-2021-1-456x300.png"
                className="m-auto h-20 max-h-full w-auto max-w-full"
              />
            </li>
            <li>
              <img
                src="https://magltk.com/wp-content/uploads/2017/02/9-%E2%80%93-Zara.webp"
                className="m-auto h-20 max-h-full w-auto max-w-full"
              />
            </li>
            <li>
              <img
                src="https://yenisafak.news/wp-content/uploads/2023/09/%D9%84%D9%88%D8%BA%D9%88-%D9%85%D8%A7%D8%B1%D9%83%D8%A9-%D8%A8%D9%88%D9%86%D8%A8%D9%88%D9%8A%D9%86%D8%AA-%D9%84%D9%85%D9%84%D8%A7%D8%A8%D8%B3-%D8%A7%D9%84%D8%A7%D8%B7%D9%81%D8%A7%D9%84-%D9%85%D8%A7%D8%B1%D9%83%D8%A7%D8%AA-%D9%85%D9%84%D8%A7%D8%A8%D8%B3-%D8%A7%D9%84%D8%A3%D8%A7%D8%B7%D9%81%D8%A7%D9%84-%D8%A7%D9%84%D9%81%D8%B1%D9%86%D8%B3%D9%8A%D8%A9.png"
                className="m-auto h-20 max-h-full w-auto max-w-full"
              />
            </li>
            <li>
              <img
                src="https://topinarabic.s3.amazonaws.com/2019/09/%D8%AA%D9%88%D8%A8-20-%D8%A7%D9%81%D8%B6%D9%84-%D9%85%D8%A7%D8%B1%D9%83%D8%A7%D8%AA-%D8%B9%D8%A7%D9%84%D9%85%D9%8A%D8%A9-15-300x278.jpg"
                className="m-auto h-20 max-h-full w-auto max-w-full"
              />
            </li>
            <li>
              <img
                src="https://storyy.cc/wp-content/uploads/2018/07/3778.jpeg"
                className="m-auto h-20 max-h-full w-auto max-w-full"
              />
            </li>
          </ul>
        </div>
      </div>
      {/*<!-- End Testimonial carousel --> */}
    </>
  )
}
