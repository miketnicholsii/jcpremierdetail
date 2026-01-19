import { Helmet } from "react-helmet-async";
import Layout from "@/components/layout/Layout";
import SectionHeading from "@/components/ui/SectionHeading";

const Terms = () => (
  <Layout>
    <Helmet>
      <title>Terms of Service | JC Premier Detail</title>
      <meta
        name="description"
        content="Review the JC Premier Detail terms of service for scheduling, payments, and service expectations."
      />
    </Helmet>

    <section className="section-padding">
      <div className="container-custom">
        <SectionHeading
          badge="Terms"
          title="Terms of Service"
          description="Guidelines and expectations for JC Premier Detail services."
        />

        <div className="mt-10 space-y-6 text-muted-foreground">
          <p>
            By booking or receiving services from JC Premier Detail, you agree to the following terms and conditions.
            These terms help ensure clear expectations and a consistent experience for every client.
          </p>

          <div className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">Scheduling & Appointments</h2>
            <p>
              Appointments are scheduled in advance and are subject to availability. If you need to reschedule, please
              contact us as early as possible so we can accommodate your request.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">Service Scope</h2>
            <p>
              Services are performed based on the package selected and the condition of the vehicle at the time of
              service. We will review expectations with you before work begins.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">Payments</h2>
            <p>
              Payment is due upon completion of services unless otherwise agreed in writing. Pricing may vary based on
              vehicle size, condition, and requested add-ons.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">Customer Responsibilities</h2>
            <p>
              Please remove personal belongings from the vehicle before drop-off. JC Premier Detail is not responsible
              for valuables left in the vehicle.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">Contact</h2>
            <p>
              If you have any questions about these terms, please contact us before booking to ensure full clarity.
            </p>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default Terms;
