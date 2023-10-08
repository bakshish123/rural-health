import React from "react";
import img from "../assets/footer-clouds.jpg";
import img2 from "../assets/footer-mockup.webp";

const SkySection = () => {
  const backgroundImageStyle = {
    backgroundImage: `url(${img})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  };
  return (
    <div
      style={backgroundImageStyle}
      className="shadow-sm h-screen w-screen border-2 border-gray-100 rounded-xl"
    >
      <div className="flex flex-row">
        <div className="">
          <h1 className="text-5xl text-gray-700 font-bold ml-28 mt-20">
            Upgrade to a <br /> better Health <br /> experience
          </h1>
          <p className="text-2xl text-gray-600 ml-28 mt-10">
            Sign Up and start Using Rural Health Connect on <br /> the Web or
            your Android and iOS devices.
          </p>
        </div>
        <div className="">
          <img
            src="https://assets.aboutamazon.com/dims4/default/0305b38/2147483647/strip/true/crop/1919x1080+1+0/resize/1320x743!/quality/90/?url=https%3A%2F%2Famazon-blogs-brightspot.s3.amazonaws.com%2F21%2Fd3%2F171c031b4871a367060f2b974a59%2Fhealth-hero-1.jpg"
            className="mt-24 ml-28 h-[20rem] rounded-3xl shadow-2xl"
            alt=""
          />
        </div>
      </div>
      <div className="">
        <div>
          <p className="text-xl font-light ml-20 mt-10 text-gray-700">
            Rural Health Connect is a health platform to <br /> help you keep
            track of all your <br />
            health issues in a single place.
          </p>
        </div>
        <div className="flex ml-20 mt-10 gap-3">
          <a
            href="https://www.instagram.com/hdfcsky"
            target="_blank"
            rel="noreferrer"
            className="hover:border-teal-700 cursor-pointer p-3 rounded-full border-2 border-neutral-black/8 hover:border-primary-hover smooth-transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
            >
              <g clipPath="url(#Instagram_svg__a)">
                <path
                  fill="#001B33"
                  fillOpacity="0.8"
                  fillRule="evenodd"
                  d="M12 2.16c3.206 0 3.586.015 4.847.071 1.172.052 1.805.249 2.226.413a3.71 3.71 0 0 1 1.379.895c.421.422.68.82.895 1.378.164.422.36 1.06.412 2.227.057 1.265.07 1.645.07 4.847 0 3.206-.013 3.586-.07 4.846-.051 1.172-.248 1.805-.412 2.227a3.714 3.714 0 0 1-.895 1.378 3.69 3.69 0 0 1-1.379.895c-.421.165-1.059.361-2.226.413-1.266.056-1.645.07-4.847.07-3.206 0-3.586-.014-4.847-.07-1.172-.052-1.805-.248-2.226-.413a3.71 3.71 0 0 1-1.379-.895 3.691 3.691 0 0 1-.895-1.378c-.164-.422-.36-1.06-.412-2.227-.057-1.265-.07-1.645-.07-4.846 0-3.207.013-3.586.07-4.847.051-1.172.248-1.805.412-2.227.216-.558.478-.96.895-1.378.422-.422.82-.68 1.379-.895.421-.164 1.059-.361 2.226-.413 1.261-.056 1.64-.07 4.847-.07ZM12 0C8.742 0 8.334.014 7.055.07 5.78.127 4.903.333 4.144.628a5.857 5.857 0 0 0-2.128 1.388A5.88 5.88 0 0 0 .628 4.139C.333 4.903.127 5.775.07 7.05.014 8.334 0 8.742 0 12s.014 3.666.07 4.945c.057 1.275.263 2.152.558 2.911.31.792.717 1.463 1.388 2.128a5.866 5.866 0 0 0 2.123 1.383c.764.296 1.636.502 2.911.558 1.28.056 1.688.07 4.945.07 3.258 0 3.666-.014 4.946-.07 1.275-.056 2.151-.262 2.91-.558a5.866 5.866 0 0 0 2.124-1.383 5.866 5.866 0 0 0 1.383-2.123c.295-.764.501-1.636.558-2.911.056-1.28.07-1.688.07-4.945 0-3.258-.014-3.666-.07-4.946-.057-1.275-.263-2.151-.558-2.91a5.62 5.62 0 0 0-1.374-2.133A5.866 5.866 0 0 0 19.861.633C19.097.338 18.225.13 16.95.075 15.666.015 15.258 0 12 0Zm0 5.836A6.166 6.166 0 0 0 5.836 12 6.166 6.166 0 0 0 12 18.164 6.166 6.166 0 0 0 18.164 12 6.166 6.166 0 0 0 12 5.836Zm0 10.162A3.999 3.999 0 1 1 12.001 8 3.999 3.999 0 0 1 12 15.998Zm6.408-8.967a1.44 1.44 0 1 0 0-2.879 1.44 1.44 0 0 0 0 2.88Z"
                  clipRule="evenodd"
                ></path>
              </g>
              <defs>
                <clipPath id="Instagram_svg__a">
                  <path fill="#fff" d="M0 0h24v24H0z"></path>
                </clipPath>
              </defs>
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/company/hdfc-sky/"
            target="_blank"
            rel="noreferrer"
            className="hover:border-teal-700 cursor-pointer p-3 rounded-full border-2 border-neutral-black/8 hover:border-primary-hover smooth-transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
            >
              <g clipPath="url(#LinkedIn_svg__a)">
                <path
                  fill="#001B33"
                  fillOpacity="0.8"
                  d="M22.223 0H1.772C.792 0 0 .773 0 1.73v20.536C0 23.222.792 24 1.772 24h20.451c.98 0 1.777-.778 1.777-1.73V1.73C24 .773 23.203 0 22.223 0ZM7.12 20.452H3.558V8.995H7.12v11.457ZM5.34 7.434a2.064 2.064 0 1 1 0-4.125 2.063 2.063 0 0 1 0 4.125Zm15.112 13.018h-3.558v-5.57c0-1.326-.024-3.037-1.852-3.037-1.851 0-2.133 1.449-2.133 2.944v5.663H9.356V8.995h3.413v1.566h.047c.473-.9 1.636-1.852 3.365-1.852 3.605 0 4.27 2.372 4.27 5.457v6.286Z"
                ></path>
              </g>
              <defs>
                <clipPath id="LinkedIn_svg__a">
                  <path fill="#fff" d="M0 0h24v24H0z"></path>
                </clipPath>
              </defs>
            </svg>
          </a>
          <a
            href="https://twitter.com/hdfcsky"
            target="_blank"
            rel="noreferrer"
            className="hover:border-teal-700 cursor-pointer p-3 rounded-full border-2 border-neutral-black/8 hover:border-primary-hover smooth-transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
            >
              <path
                fill="#001B33"
                fillOpacity="0.8"
                d="M7.55 21.75c9.055 0 14.008-7.503 14.008-14.008 0-.211-.004-.427-.014-.638A10 10 0 0 0 24 4.555c-.898.4-1.85.66-2.826.774a4.95 4.95 0 0 0 2.165-2.723A9.897 9.897 0 0 1 20.213 3.8a4.93 4.93 0 0 0-8.394 4.49A13.985 13.985 0 0 1 1.673 3.15a4.93 4.93 0 0 0 1.523 6.57 4.93 4.93 0 0 1-2.23-.614v.06a4.922 4.922 0 0 0 3.95 4.829 4.895 4.895 0 0 1-2.221.084 4.934 4.934 0 0 0 4.597 3.422A9.875 9.875 0 0 1 0 19.538a13.969 13.969 0 0 0 7.55 2.212Z"
              ></path>
            </svg>
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=100089751670710"
            target="_blank"
            rel="noreferrer"
            className="hover:border-teal-700 cursor-pointer p-3 rounded-full border-2 border-neutral-black/8 hover:border-primary-hover smooth-transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
            >
              <g clipPath="url(#Facebook_svg__a)">
                <path
                  fill="#001B33"
                  fillOpacity="0.8"
                  d="M24 12c0-6.627-5.373-12-12-12S0 5.373 0 12c0 5.99 4.388 10.954 10.125 11.854V15.47H7.078V12h3.047V9.356c0-3.007 1.792-4.668 4.533-4.668 1.312 0 2.686.234 2.686.234v2.953H15.83c-1.491 0-1.956.925-1.956 1.875V12h3.328l-.532 3.469h-2.796v8.385C19.612 22.954 24 17.99 24 12Z"
                ></path>
              </g>
              <defs>
                <clipPath id="Facebook_svg__a">
                  <path fill="#fff" d="M0 0h24v24H0z"></path>
                </clipPath>
              </defs>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default SkySection;
