export default function WhatWeDoCard() {
  return (
    <>
      <div className="w-full p-6 shadow bg-white rounded">
        <div className="flex">
          <div class="rounded-full">
            {/* <img
              class="w-20 h-20 rounded-full"
              src="https://tecdn.b-cdn.net/img/new/standard/nature/184.jpg"
              alt=""
              width="100%"
              height="100%"
            /> */}
            <svg xmlns="http://www.w3.org/2000/svg" width="39" height="38" viewBox="0 0 39 38" fill="none"><path d="M20.2598 20.4419C20.4366 20.4419 20.6061 20.3731 20.7312 20.2506C20.8562 20.128 20.9264 19.9619 20.9264 19.7886V19.1353H18.2598V19.7886C18.2598 19.9619 18.33 20.128 18.455 20.2506C18.5801 20.3731 18.7496 20.4419 18.9264 20.4419H20.2598Z" fill="#1FDBA2"></path><path d="M22.2598 19.1354V19.7887C22.2598 20.3085 22.0491 20.807 21.674 21.1746C21.2989 21.5422 20.7902 21.7487 20.2598 21.7487H18.9264C18.396 21.7487 17.8873 21.5422 17.5122 21.1746C17.1371 20.807 16.9264 20.3085 16.9264 19.7887V19.1354H14.9264C14.6988 19.1332 14.4733 19.0925 14.2598 19.0151V22.402C14.2598 22.5753 14.33 22.7415 14.455 22.864C14.5801 22.9865 14.7496 23.0553 14.9264 23.0553H24.2598C24.4366 23.0553 24.6061 22.9865 24.7312 22.864C24.8562 22.7415 24.9264 22.5753 24.9264 22.402V19.0151C24.7129 19.0925 24.4874 19.1332 24.2598 19.1354H22.2598Z" fill="#1FDBA2"></path><path d="M21.5938 13.9087C21.5938 13.7354 21.5235 13.5693 21.3985 13.4467C21.2735 13.3242 21.1039 13.2554 20.9271 13.2554H18.2604C18.0836 13.2554 17.914 13.3242 17.789 13.4467C17.664 13.5693 17.5938 13.7354 17.5938 13.9087V14.562H21.5938V13.9087Z" fill="#1FDBA2"></path><path d="M19.5925 10.6416C17.8783 10.6416 16.2027 11.1397 14.7775 12.073C13.3523 13.0062 12.2415 14.3327 11.5855 15.8847C10.9295 17.4366 10.7579 19.1444 11.0923 20.7919C11.4267 22.4394 12.2521 23.9528 13.4642 25.1406C14.6762 26.3284 16.2205 27.1374 17.9017 27.4651C19.5828 27.7928 21.3254 27.6246 22.909 26.9818C24.4927 26.3389 25.8462 25.2503 26.7985 23.8536C27.7508 22.4569 28.2591 20.8148 28.2591 19.1349C28.2565 16.8832 27.3425 14.7244 25.7178 13.1321C24.093 11.5399 21.8902 10.6442 19.5925 10.6416ZM26.2591 22.4016C26.2591 22.9214 26.0484 23.42 25.6733 23.7875C25.2983 24.1551 24.7896 24.3616 24.2591 24.3616H14.9258C14.3954 24.3616 13.8866 24.1551 13.5116 23.7875C13.1365 23.42 12.9258 22.9214 12.9258 22.4016V16.5216C12.9258 16.0018 13.1365 15.5032 13.5116 15.1357C13.8866 14.7681 14.3954 14.5616 14.9258 14.5616H16.2591V13.9083C16.2591 13.3884 16.4698 12.8899 16.8449 12.5223C17.22 12.1548 17.7287 11.9483 18.2591 11.9483H20.9258C21.4562 11.9483 21.9649 12.1548 22.34 12.5223C22.7151 12.8899 22.9258 13.3884 22.9258 13.9083V14.5616H24.2591C24.7896 14.5616 25.2983 14.7681 25.6733 15.1357C26.0484 15.5032 26.2591 16.0018 26.2591 16.5216V22.4016Z" fill="#1FDBA2"></path><path d="M24.2598 15.8687H14.9264C14.5582 15.8687 14.2598 16.1612 14.2598 16.522V17.1753C14.2598 17.5361 14.5582 17.8287 14.9264 17.8287H24.2598C24.628 17.8287 24.9264 17.5361 24.9264 17.1753V16.522C24.9264 16.1612 24.628 15.8687 24.2598 15.8687Z" fill="#1FDBA2"></path><path d="M29.2826 11.2514C29.2919 11.2356 29.2967 11.2177 29.2967 11.1995C29.2967 11.1813 29.2919 11.1634 29.2826 11.1476C28.8162 10.6047 28.3032 10.102 27.7493 9.64489C27.7333 9.63334 27.7143 9.62641 27.6945 9.62491C27.6747 9.62341 27.6549 9.62739 27.6373 9.6364L26.6519 10.0487C26.5483 10.0916 26.4353 10.1081 26.3234 10.0967C26.2115 10.0852 26.1043 10.0462 26.0119 9.98332C24.7036 9.09873 23.2179 8.49739 21.6539 8.21932C21.5432 8.1993 21.4395 8.15213 21.3524 8.08221C21.2654 8.0123 21.1978 7.92191 21.1559 7.81948L20.7559 6.83948C20.7492 6.8221 20.7383 6.80656 20.7241 6.79417C20.71 6.78178 20.693 6.7729 20.6746 6.76827C19.9563 6.70485 19.2336 6.70485 18.5153 6.76827C18.4949 6.77211 18.476 6.78105 18.4602 6.79422C18.4444 6.80738 18.4324 6.82433 18.4253 6.8434L18.0253 7.82013C17.9835 7.92256 17.9159 8.01295 17.8288 8.08287C17.7417 8.15278 17.638 8.19995 17.5273 8.21997C15.9638 8.49978 14.4791 9.10268 13.1719 9.98855C13.0796 10.0515 12.9724 10.0905 12.8605 10.1019C12.7486 10.1133 12.6356 10.0968 12.5319 10.0539L11.5479 9.64228C11.5318 9.63323 11.5135 9.62846 11.4949 9.62846C11.4764 9.62846 11.4581 9.63323 11.4419 9.64228C10.8881 10.0995 10.3752 10.6022 9.90861 11.1449C9.89666 11.1606 9.88944 11.1793 9.88779 11.1988C9.88614 11.2184 9.89012 11.2379 9.89928 11.2554L10.3199 12.221C10.3637 12.3225 10.3806 12.4333 10.3689 12.543C10.3573 12.6527 10.3175 12.7576 10.2533 12.8482C9.35064 14.1304 8.73702 15.5863 8.45328 17.119C8.43285 17.2275 8.38472 17.3292 8.31338 17.4145C8.24204 17.4998 8.1498 17.5661 8.04528 17.6071L7.04528 17.9991C7.02755 18.0057 7.01169 18.0164 6.99905 18.0303C6.98641 18.0441 6.97734 18.0608 6.97261 18.0788C6.90757 18.7827 6.90757 19.491 6.97261 20.1949C6.97654 20.2149 6.98566 20.2335 6.99909 20.2489C7.01253 20.2644 7.02982 20.2762 7.04928 20.2831L8.04595 20.6751C8.15047 20.7161 8.2427 20.7823 8.31405 20.8677C8.38539 20.953 8.43352 21.0547 8.45395 21.1632C8.74021 22.694 9.35562 24.1476 10.2593 25.4275C10.3235 25.518 10.3633 25.623 10.3749 25.7327C10.3866 25.8423 10.3697 25.9531 10.3259 26.0547L9.90595 27.019C9.89683 27.0347 9.89204 27.0525 9.89204 27.0706C9.89204 27.0887 9.89683 27.1065 9.90595 27.1222C10.3724 27.665 10.8854 28.1678 11.4393 28.6249C11.4552 28.6367 11.4742 28.6437 11.494 28.6452C11.5139 28.6467 11.5337 28.6426 11.5513 28.6334L12.5366 28.2211C12.6195 28.1868 12.7086 28.169 12.7986 28.1689C12.9337 28.169 13.0655 28.2093 13.1766 28.2845C14.485 29.1691 15.9706 29.7704 17.5346 30.0485C17.6453 30.0685 17.749 30.1157 17.8361 30.1856C17.9232 30.2555 17.9908 30.3459 18.0326 30.4483L18.4326 31.4283C18.4394 31.4457 18.4503 31.4612 18.4644 31.4736C18.4786 31.486 18.4956 31.4949 18.5139 31.4995C19.2325 31.563 19.9554 31.563 20.6739 31.4995C20.6941 31.4957 20.7129 31.4868 20.7285 31.4737C20.7442 31.4607 20.7561 31.4439 20.7633 31.4251L21.1633 30.4451C21.2051 30.3426 21.2727 30.2522 21.3598 30.1823C21.4468 30.1124 21.5506 30.0652 21.6613 30.0452C23.2231 29.7666 24.7066 29.1655 26.0133 28.2819C26.1057 28.2189 26.2128 28.18 26.3247 28.1685C26.4366 28.1571 26.5496 28.1736 26.6533 28.2165L27.6373 28.6281C27.6533 28.6377 27.6716 28.6427 27.6903 28.6427C27.709 28.6427 27.7273 28.6377 27.7433 28.6281C28.2974 28.1713 28.8104 27.6685 29.2766 27.1255C29.2888 27.1099 29.2961 27.0912 29.2978 27.0716C29.2995 27.052 29.2953 27.0324 29.2859 27.0151L28.8653 26.0494C28.8215 25.9479 28.8046 25.8371 28.8163 25.7274C28.8279 25.6178 28.8677 25.5128 28.9319 25.4222C29.8346 24.14 30.4482 22.6841 30.7319 21.1514C30.7524 21.0429 30.8005 20.9413 30.8718 20.8559C30.9432 20.7706 31.0354 20.7043 31.1399 20.6634L32.1399 20.2714C32.1577 20.2647 32.1735 20.254 32.1862 20.2402C32.1988 20.2263 32.2079 20.2097 32.2126 20.1917C32.2777 19.4877 32.2777 18.7794 32.2126 18.0755V18.0683C32.2076 18.0498 32.1981 18.0327 32.1848 18.0186C32.1716 18.0045 32.155 17.9938 32.1366 17.9873L31.1399 17.5953C31.0354 17.5543 30.9432 17.4881 30.8718 17.4027C30.8005 17.3174 30.7524 17.2158 30.7319 17.1073C30.4455 15.5764 29.8298 14.1227 28.9259 12.843C28.8617 12.7524 28.8219 12.6474 28.8103 12.5378C28.7986 12.4281 28.8155 12.3173 28.8593 12.2158L29.2826 11.2514ZM29.5926 19.1352C29.5926 21.0735 29.0061 22.9682 27.9073 24.5798C26.8085 26.1914 25.2467 27.4475 23.4194 28.1892C21.5922 28.931 19.5815 29.125 17.6417 28.7469C15.7019 28.3688 13.9201 27.4354 12.5215 26.0649C11.123 24.6943 10.1706 22.9481 9.78476 21.0471C9.39891 19.1461 9.59694 17.1756 10.3538 15.3849C11.1107 13.5942 12.3924 12.0636 14.0369 10.9868C15.6814 9.90997 17.6148 9.33521 19.5926 9.33521C22.2439 9.33815 24.7857 10.3716 26.6604 12.2088C28.5351 14.046 29.5896 16.537 29.5926 19.1352Z" fill="#1FDBA2"></path><path d="M19.5941 0.84181C17.5713 0.839403 15.5617 1.15981 13.6441 1.79045C13.4831 1.84401 13.3485 1.95483 13.2669 2.10097C13.1853 2.24711 13.1626 2.41794 13.2034 2.57968C13.2249 2.6656 13.2647 2.74612 13.32 2.81602C13.3754 2.88591 13.4451 2.94362 13.5247 2.9854C13.6088 3.0303 13.7015 3.05751 13.7969 3.06527C13.8923 3.07304 13.9883 3.06118 14.0787 3.03048C17.6618 1.84959 21.5406 1.84932 25.1238 3.02972C28.707 4.21011 31.798 6.50641 33.9257 9.56854C36.0534 12.6307 37.1009 16.2906 36.9086 19.9905C36.7164 23.6903 35.2948 27.227 32.8607 30.0615C32.8012 30.1308 32.7276 30.1872 32.6446 30.2271C32.5616 30.267 32.4711 30.2896 32.3787 30.2934C32.2864 30.2979 32.1941 30.2832 32.1079 30.2504C32.0218 30.2175 31.9437 30.1672 31.8787 30.1026L31.4587 29.691L30.9487 32.8368L34.1587 32.337L33.7721 31.9581C33.653 31.8414 33.5835 31.6848 33.5774 31.5198C33.5713 31.3549 33.6292 31.1938 33.7394 31.0689C36.072 28.4156 37.5782 25.1617 38.079 21.694C38.5797 18.2262 38.054 14.6905 36.5642 11.5071C35.0745 8.32361 32.6833 5.62627 29.675 3.73564C26.6668 1.84502 23.1678 0.840615 19.5941 0.84181Z" fill="#1FDBA2"></path><path d="M19.5929 37.4286C21.6156 37.431 23.6252 37.1106 25.5429 36.48C25.7038 36.4264 25.8384 36.3156 25.92 36.1695C26.0016 36.0233 26.0243 35.8525 25.9835 35.6908C25.962 35.6048 25.9223 35.5243 25.8669 35.4544C25.8115 35.3845 25.7418 35.3268 25.6622 35.285C25.5782 35.2401 25.4855 35.2129 25.3901 35.2052C25.2947 35.1974 25.1987 35.2093 25.1082 35.24C21.5252 36.4209 17.6464 36.4211 14.0632 35.2407C10.4799 34.0603 7.38889 31.764 5.26123 28.7019C3.13356 25.6398 2.08602 21.9798 2.27829 18.28C2.47057 14.5801 3.89211 11.0434 6.32621 8.20895C6.38575 8.13966 6.45935 8.08325 6.54233 8.04333C6.62531 8.0034 6.71585 7.98082 6.80821 7.97702C6.9006 7.97219 6.99297 7.98671 7.07919 8.01961C7.1654 8.0525 7.24348 8.10302 7.30821 8.16779L7.72821 8.57939L8.23821 5.43359L5.02821 5.93339L5.41488 6.31233C5.53393 6.42908 5.60348 6.58568 5.60954 6.75063C5.6156 6.91558 5.55772 7.07667 5.44754 7.20151C3.11492 9.85486 1.60872 13.1088 1.10796 16.5765C0.607201 20.0442 1.13294 23.5799 2.6227 26.7634C4.11246 29.9468 6.50359 32.6442 9.51188 34.5348C12.5202 36.4254 16.0191 37.4298 19.5929 37.4286Z" fill="#1FDBA2"></path></svg>
          </div>
          <div className="pl-5">
            <h2 className="text-secondryColor text-16px font-semibold leading-5 capitalize text-nowrap mb-3">
              Business Process Automation
            </h2>
            <p className="text-secondryColor text-12px font-normal mb-2">
              Optimize your projects with AlgoRepublic's dedicated development
              team, providing focused expertise and seamless collaboration for
              innovation-driven results.
            </p>
            <p className="text-right text-11px capitalize font-normal">
              Read More
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
