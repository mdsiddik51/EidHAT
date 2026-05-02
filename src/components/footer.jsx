const Footer = () => {
  return (
    <div className="w-11/12 mx-auto  bg-[#14532D] p-8 rounded-md">
      <div className="flex flex-col md:flex-row justify-between gap-6">
        <section>
          <div>
            <span className="text-4xl md:text-5xl font-bold pb-7 bg-gradient-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent">
              EIDHAT
            </span>
            <p className="font-medium text-xl md:text-2xl pt-2 text-black ">
              Qurbani Animal Marketplace
            </p>
          </div>
        </section>

        {/* =========Contact section ================== */}
        <section >
          <div>
            <h2 className="font-medium text-xl md:text-2xl">Contact info</h2>
            <p>Phone : +01787******</p>
            <p>Phone : +01942******</p>
            <p>Email : email@eidhat.com</p>
          </div>
        </section>
      </div>

      <div className="grid grid-cols-1 w-10/12 mx-auto sm:grid-cols-2 md:grid-cols-3 gap-10 pt-4 items-start text-left">
        {/* =========about section========= */}
        <div className="space-y-2">
          <p className="text-2xl md:text-3xl">About us</p>
          <p className="font-medium text-black/30">
            A trusted platform to find healthy and verified animals for Qurbani
            across Bangladesh. We connect buyers with farmers and dealers to
            ensure fair price and quality livestock.
          </p>
        </div>

        {/* ===========address ======== */}
        <div className="space-y-2 grid sm:justify-items-start md:justify-center">
          <p className="text-2xl md:text-3xl">Address</p>
          <p>
            House 24, <br /> Road 10, <br /> Mirpur-10, <br /> Dhaka 1216
          </p>
        </div>

        {/* =========social Links ============ */}
        <div className="space-y-2 grid Md:justify-end">
          <p className="text-2xl md:text-3xl">Social links</p>
          <ul className="space-y-1">
            <li>
              <a href="">Fackbook</a>
            </li>
            <li>
              <a href="">Instagram</a>
            </li>
            <li>
              <a href="">Whatsapp</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
