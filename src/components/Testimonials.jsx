import Style from "../style/Categorie.module.css";

export default function Testimonials() {
  return (
    <div className={Style.CategorieBannerBg}>
      <div className="px-3 lg:px-14 py-14">
        <div className="text-center mb-8">
          <h1 className="text-lg text-red-500 uppercase">Our Testimonials</h1>
          <p className="text-3xl font-semibold text-gray-600">
            What they are saying about our courses
          </p>
        </div>
        <div></div>
      </div>
    </div>
  );
}
