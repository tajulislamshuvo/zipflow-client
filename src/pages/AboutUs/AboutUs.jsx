import {
  Package,
  Truck,
  ShieldCheck,
  MapPinned,
  Target,
  Eye,
  HeartHandshake,
  Sparkles,
} from "lucide-react";
import { Link } from "react-router";

const AboutUs = () => {
  return (
    <div className="my-8 sm:rounded-2xl p-3 bg-white px-4 py-6 sm:px-7 sm:py-7 md:px-10 md:lg-10 lg:px-15 lg:py-15 space-y-6">
      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <span className="badge badge-primary badge-outline mb-5">
            About ZipFlow
          </span>

          <h1 className="text-5xl md:text-6xl font-bold max-w-4xl mx-auto leading-tight">
            Delivering Parcels with
            <span className="text-[#ACC857]"> Speed, Trust & Precision</span>
          </h1>

          <p className="mt-6 text-base-content/70 max-w-3xl mx-auto text-lg">
            ZipFlow is a modern logistics platform built to simplify parcel
            delivery. We connect businesses, riders, and customers through a
            seamless delivery network powered by technology and reliability.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-14">
            <div className="p-6 rounded-2xl bg-base-200">
              <h3 className="text-3xl font-bold">50K+</h3>
              <p className="text-base-content/60">Parcels Delivered</p>
            </div>

            <div className="p-6 rounded-2xl bg-base-200">
              <h3 className="text-3xl font-bold">64+</h3>
              <p className="text-base-content/60">Districts Covered</p>
            </div>

            <div className="p-6 rounded-2xl bg-base-200">
              <h3 className="text-3xl font-bold">500+</h3>
              <p className="text-base-content/60">Active Riders</p>
            </div>

            <div className="p-6 rounded-2xl bg-base-200">
              <h3 className="text-3xl font-bold">99%</h3>
              <p className="text-base-content/60">Success Rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 bg-base-200 rounded-2xl">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d"
              alt="ZipFlow Logistics"
              className="rounded-3xl shadow-xl w-full"
            />
          </div>

          <div>
            <h2 className="text-4xl font-bold mb-6">Our Story</h2>

            <p className="text-base-content/70 leading-relaxed mb-4">
              ZipFlow started with a simple goal: make parcel delivery easier,
              faster, and more transparent. Traditional logistics often suffer
              from delays, poor communication, and lack of visibility.
            </p>

            <p className="text-base-content/70 leading-relaxed">
              We built ZipFlow to bridge that gap by providing real-time
              tracking, efficient rider management, and a customer-first
              delivery experience.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Vision */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 rounded-3xl border">
              <Target className="text-primary mb-4" size={40} />
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>

              <p className="text-base-content/70">
                To create a reliable delivery ecosystem where businesses and
                customers can send parcels confidently through technology-driven
                logistics solutions.
              </p>
            </div>

            <div className="p-8 rounded-3xl border">
              <Eye className="text-primary mb-4" size={40} />
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>

              <p className="text-base-content/70">
                To become the most trusted and efficient parcel delivery network
                by empowering riders and ensuring exceptional customer
                experiences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="py-24 bg-base-200 rounded-2xl">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold">Why Choose ZipFlow</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-8 rounded-3xl bg-base-100">
              <Truck size={40} className="text-primary mb-4" />
              <h3 className="font-bold text-xl mb-3">Fast Delivery</h3>
              <p className="text-base-content/70">
                Optimized routes ensure faster parcel movement.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-base-100">
              <Package size={40} className="text-primary mb-4" />
              <h3 className="font-bold text-xl mb-3">Real-Time Tracking</h3>
              <p className="text-base-content/70">
                Know exactly where your parcel is at any time.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-base-100">
              <ShieldCheck size={40} className="text-primary mb-4" />
              <h3 className="font-bold text-xl mb-3">Secure Handling</h3>
              <p className="text-base-content/70">
                Safety and protection throughout the delivery process.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-base-100">
              <MapPinned size={40} className="text-primary mb-4" />
              <h3 className="font-bold text-xl mb-3">Wide Coverage</h3>
              <p className="text-base-content/70">
                Delivering across cities and remote locations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold">Our Core Values</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-8 border rounded-3xl">
              <HeartHandshake className="text-primary mb-4" size={38} />
              <h3 className="font-bold text-xl mb-3">Customer First</h3>
              <p className="text-base-content/70">
                Every decision begins with customer satisfaction.
              </p>
            </div>

            <div className="p-8 border rounded-3xl">
              <ShieldCheck className="text-primary mb-4" size={38} />
              <h3 className="font-bold text-xl mb-3">Reliability</h3>
              <p className="text-base-content/70">
                Delivering what we promise consistently.
              </p>
            </div>

            <div className="p-8 border rounded-3xl">
              <Sparkles className="text-primary mb-4" size={38} />
              <h3 className="font-bold text-xl mb-3">Innovation</h3>
              <p className="text-base-content/70">
                Leveraging technology to improve logistics.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-primary  rounded-2xl text-gray-900">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-5">
            Join the Future of Smart Delivery
          </h2>

          <p className="mb-8 text-lg text-gray-800 opacity-90">
            Whether you're sending a package or growing a business, ZipFlow is
            here to deliver excellence every step of the way.
          </p>

          <Link to="/send-parcel" className="btn btn-neutral btn-lg">
            Get Started
          </Link>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
