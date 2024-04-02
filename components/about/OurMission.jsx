const OurMission = () => {
  return (
    <section>
      <div className="container py-16">
        <div className="flex justify-between flex-col md:flex-row md:gap-20 gap-3">
          {/* TITLE */}
          <div>
            <p className="text-gray-700">Believe</p>
            <h3 className="text-3xl font-semibold text-primary">OUR MISSION</h3>
          </div>

          {/* TEXT */}
          <div className="max-w-2xl">
            <p className="font-medium text-gray-500 text-xs sm:text-sm">
              Our mission has remained largely unchanged over the century and a half the company has
              operated: to quickly provide affordable insurance solutions for our customers that
              support the communities and families they represent.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurMission;
