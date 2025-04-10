// pages/terms-conditions.js
import Head from "next/head";
import Link from "next/link";

export default function TermsAndConditions() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl pt-20 mt-10">
      <Head>
        <title>Terms and Conditions | Vetrivelan Travels</title>
        <meta
          name="description"
          content="Terms and Conditions for Vetrivelan Travels services"
        />
      </Head>

      <main className="prose prose-lg">
        <h1 className="text-3xl font-bold mb-6">Terms and Conditions</h1>

 
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-3">1. Introduction</h2>
          <p>
            Welcome to Vetrivelan Travels (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;). These Terms
            and Conditions govern your use of our website
            (coimbatoretempotraveller.in) and the services we provide, including
            car and van rentals and tour package bookings.
          </p>
          <p>
            By accessing or using our website and services, you agree to be
            bound by these Terms and Conditions. If you do not agree to these
            terms, please do not use our website or services.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-3">
            2. Service Description
          </h2>
          <p>
            Vetrivelan Travels provides vehicle rental services, including cars
            and vans, as well as tour package bookings in and around Coimbatore.
            Our services include:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Vehicle rental for local and outstation travel</li>
            <li>Customized tour packages</li>
            <li>Airport and railway station transfers</li>
            <li>Corporate travel solutions</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-3">
            3. Booking and Reservations
          </h2>
          <p>
            <strong>3.1 Booking Process:</strong> Bookings can be made through
            our website, by email at vetrivelantravel@gmail.com, or by phone. A
            booking is confirmed only after receipt of confirmation from our
            end.
          </p>
          <p>
            <strong>3.2 Advance Payment:</strong> We may require an advance
            payment to secure your booking. The amount and payment method will
            be communicated during the booking process.
          </p>
          <p>
            <strong>3.3 Booking Information:</strong> You agree to provide
            accurate, current, and complete information during the booking
            process.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-3">
            4. Cancellation and Refund Policy
          </h2>
          <p>
            <strong>4.1 Cancellation by Customer:</strong>
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>
              Cancellations made 48 hours or more before the scheduled service:
              Full refund minus processing fees
            </li>
            <li>
              Cancellations made 24-48 hours before the scheduled service: 50%
              refund
            </li>
            <li>
              Cancellations made less than 24 hours before the scheduled
              service: No refund
            </li>
          </ul>
          <p>
            <strong>4.2 Cancellation by Vetrivelan Travels:</strong> In the rare
            event that we need to cancel a booking due to unforeseen
            circumstances, you will receive a full refund or the option to
            reschedule.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-3">
            5. Customer Responsibilities
          </h2>
          <p>
            <strong>5.1 Passenger Conduct:</strong> Customers must maintain
            appropriate conduct during the journey and comply with all safety
            instructions provided by our drivers.
          </p>
          <p>
            <strong>5.2 Personal Belongings:</strong> You are responsible for
            your personal belongings during the journey. We are not liable for
            any loss or damage to your personal items.
          </p>
          <p>
            <strong>5.3 Vehicle Care:</strong> You agree to use the vehicles
            with care and will be responsible for any damages caused by misuse
            or negligence.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-3">
            6. Our Responsibilities
          </h2>
          <p>
            <strong>6.1 Vehicle Condition:</strong> We commit to providing
            well-maintained and clean vehicles for your journey.
          </p>
          <p>
            <strong>6.2 Professional Service:</strong> Our drivers are
            professionally trained and will provide courteous service throughout
            your journey.
          </p>
          <p>
            <strong>6.3 Punctuality:</strong> We strive to maintain punctuality
            for all services, but cannot be held liable for delays caused by
            traffic, weather conditions, or other circumstances beyond our
            control.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-3">
            7. Limitation of Liability
          </h2>
          <p>
            To the maximum extent permitted by law, Vetrivelan Travels shall not
            be liable for any indirect, incidental, special, consequential, or
            punitive damages, or any loss of profits or revenues.
          </p>
          <p>
            Our total liability for any claims under these terms shall not
            exceed the amount paid by you for the specific service in question.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-3">8. Force Majeure</h2>
          <p>
            We shall not be liable for any failure or delay in performance due
            to circumstances beyond our reasonable control, including but not
            limited to acts of God, natural disasters, pandemic, civil unrest,
            strikes, or governmental actions.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-3">
            9. Modifications to Terms
          </h2>
          <p>
            We reserve the right to modify these Terms and Conditions at any
            time. Changes will be effective immediately upon posting on our
            website. Your continued use of our services after any changes
            indicates your acceptance of the modified terms.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-3">10. Governing Law</h2>
          <p>
            These Terms and Conditions are governed by the laws of India. Any
            disputes arising under these terms shall be subject to the exclusive
            jurisdiction of the courts in Coimbatore, Tamil Nadu.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-3">
            11. Contact Information
          </h2>
          <p>
            If you have any questions about these Terms and Conditions, please
            contact us at:
          </p>
          <p>Email: vetrivelantravel@gmail.com</p>
          <p>Phone number:9894692692</p>
        </section>

        <div className="mt-8 border-t pt-4">
          <Link
            href="/privacy"
            className="text-blue-600 hover:underline"
          >
            View our Privacy Policy
          </Link>
        </div>
      </main>
    </div>
  );
}
