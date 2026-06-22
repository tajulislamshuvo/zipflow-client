import {
  FileText,
  Package,
  Truck,
  CheckCircle,
  ShieldCheck,
  MapPinned,
  BellRing,
  Headphones,
} from "lucide-react";

const Pricing = () => {
  return (
    <div className="my-8 sm:rounded-2xl p-3 bg-white px-4 py-6 sm:px-7 sm:py-7 md:px-10 md:lg-10 lg:px-15 lg:py-15 space-y-6">
      {/* Hero */}
      <section className="py-24 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <span className="badge badge-primary badge-outline mb-4">
            Transparent Pricing
          </span>

          <h1 className="text-5xl font-bold mb-6">
            Simple & Affordable
            <span className="text-[#ACC857]"> Delivery Pricing</span>
          </h1>

          <p className="text-base-content/70 text-lg">
            No hidden charges. Pay only based on parcel type, weight and
            destination.
          </p>
        </div>
      </section>
      {/* Pricing Cards */}
      <section className="pb-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Document */}
            <div className="card bg-base-200 shadow-lg hover:-translate-y-2 transition-all duration-300 rounded-2xl">
              <div className="card-body">
                <FileText size={42} className="text-primary mb-3" />

                <h2 className="card-title text-2xl">Document</h2>

                <p className="text-base-content/60">
                  Any weight document delivery.
                </p>

                <div className="divider"></div>

                <div>
                  <p className="text-sm text-base-content/60">Within City</p>
                  <h3 className="text-4xl font-bold">৳60</h3>
                </div>

                <div>
                  <p className="text-sm text-base-content/60">Outside City</p>
                  <h3 className="text-3xl font-semibold">৳80</h3>
                </div>
              </div>
            </div>

            {/* Non Document */}
            <div className="card bg-primary text-gray-800 shadow-xl scale-105 rounded-2xl">
              <div className="card-body">
                <Package size={42} />

                <div className="badge badge-neutral">Most Popular</div>

                <h2 className="card-title text-2xl">Non-Document</h2>

                <p>Parcel up to 3kg.</p>

                <div className="divider"></div>

                <div>
                  <p className="opacity-80">Within City</p>

                  <h3 className="text-4xl font-bold">৳110</h3>
                </div>

                <div>
                  <p className="opacity-80">Outside City</p>

                  <h3 className="text-3xl font-semibold">৳150</h3>
                </div>
              </div>
            </div>

            {/* Heavy Parcel */}
            <div className="card bg-base-200 shadow-lg hover:-translate-y-2 transition-all duration-300 rounded-2xl">
              <div className="card-body">
                <Truck size={42} className="text-primary mb-3" />

                <h2 className="card-title text-2xl">Heavy Parcel</h2>

                <p className="text-base-content/60">More than 3kg.</p>

                <div className="divider"></div>

                <div>
                  <p className="text-sm text-base-content/60">Within City</p>

                  <h3 className="font-bold text-xl">৳110 + ৳40/kg</h3>
                </div>

                <div>
                  <p className="text-sm text-base-content/60">Outside City</p>

                  <h3 className="font-bold text-xl">৳150 + ৳40/kg + ৳40</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Examples
      <section className="py-24 bg-base-200">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold">Pricing Examples</h2>

            <p className="text-base-content/60 mt-3">
              See how pricing works for heavier parcels.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-base-100 rounded-3xl p-8">
              <h3 className="font-bold text-xl mb-3">4kg Parcel</h3>

              <p>
                Within City:
                <span className="font-bold"> ৳150</span>
              </p>

              <p>
                Outside City:
                <span className="font-bold"> ৳230</span>
              </p>
            </div>

            <div className="bg-base-100 rounded-3xl p-8">
              <h3 className="font-bold text-xl mb-3">6kg Parcel</h3>

              <p>
                Within City:
                <span className="font-bold"> ৳230</span>
              </p>

              <p>
                Outside City:
                <span className="font-bold"> ৳310</span>
              </p>
            </div>

            <div className="bg-base-100 rounded-3xl p-8">
              <h3 className="font-bold text-xl mb-3">10kg Parcel</h3>

              <p>
                Within City:
                <span className="font-bold"> ৳390</span>
              </p>

              <p>
                Outside City:
                <span className="font-bold"> ৳470</span>
              </p>
            </div>
          </div>
        </div>
      </section> */}
      {/* Included Features */}
      <section className="py-24 bg-base-200 rounded-2xl">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary font-semibold">
              INCLUDED WITH EVERY SHIPMENT
            </span>

            <h2 className="text-4xl lg:text-5xl font-bold mt-3">
              More Than Just Delivery
            </h2>

            <p className="mt-4 text-base-content/70 text-lg">
              Every parcel sent through ZipFlow comes with premium delivery
              features designed to keep your shipment safe, visible, and on
              time.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="group bg-base-100 rounded-3xl p-8 border border-base-300 hover:border-primary/30 hover:shadow-xl transition-all duration-300">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                <MapPinned className="text-primary" size={28} />
              </div>

              <h3 className="text-2xl font-bold mb-3">Live Parcel Tracking</h3>

              <p className="text-base-content/70 leading-relaxed">
                Track your parcel's journey in real time from pickup to
                successful delivery without making a single phone call.
              </p>
            </div>

            <div className="group bg-base-100 rounded-3xl p-8 border border-base-300 hover:border-primary/30 hover:shadow-xl transition-all duration-300">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                <ShieldCheck className="text-primary" size={28} />
              </div>

              <h3 className="text-2xl font-bold mb-3">
                Secure Parcel Handling
              </h3>

              <p className="text-base-content/70 leading-relaxed">
                Every shipment is handled with care through verified riders and
                a monitored delivery process.
              </p>
            </div>

            <div className="group bg-base-100 rounded-3xl p-8 border border-base-300 hover:border-primary/30 hover:shadow-xl transition-all duration-300">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                <BellRing className="text-primary" size={28} />
              </div>

              <h3 className="text-2xl font-bold mb-3">
                Instant Delivery Updates
              </h3>

              <p className="text-base-content/70 leading-relaxed">
                Stay informed with status notifications for pickup, transit
                progress, and successful delivery confirmation.
              </p>
            </div>

            <div className="group bg-base-100 rounded-3xl p-8 border border-base-300 hover:border-primary/30 hover:shadow-xl transition-all duration-300">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                <Headphones className="text-primary" size={28} />
              </div>

              <h3 className="text-2xl font-bold mb-3">Dedicated Support</h3>

              <p className="text-base-content/70 leading-relaxed">
                Our support team is available to assist with delivery questions,
                tracking issues, and parcel concerns.
              </p>
            </div>
          </div>
        </div>
      </section>{" "}
    </div>
  );
};

export default Pricing;
