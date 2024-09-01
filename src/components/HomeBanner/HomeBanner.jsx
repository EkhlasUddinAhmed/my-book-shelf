import bannerImage from "../../assets/images/cpc.jpg";
const HomeBanner = () => {
  return (
    <div className="grid grid-cols-3 bg-slate-300">
      <div className="col-span-2 grid grid-cols-1 gap-4 space-y-4 place-content-center">
        <h1 className="text-6xl font-bold w-1/2">
          Books for freshen up your bookshelf{" "}
        </h1>
        <button className="btn btn-accent text-white w-1/2">
          View The List
        </button>
      </div>
      <div className="col-span-1">
        <img src={bannerImage} alt="" width="90%" height="400" />
      </div>
    </div>
  );
};

export default HomeBanner;
