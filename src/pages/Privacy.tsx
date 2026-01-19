import { Helmet } from "react-helmet-async";
import Layout from "@/components/layout/Layout";
import SectionHeading from "@/components/ui/SectionHeading";

const Privacy = () => (
  <Layout>
    <Helmet>
      <title>Privacy Policy | JC Premier Detail</title>
      <meta
        name="description"
        content="Read the JC Premier Detail privacy policy covering information collection, use, and protection."
      />
    </Helmet>

    <section className="section-padding">
      <div className="container-custom">
        <SectionHeading
          badge="Privacy"
          title="Privacy Policy"
          description="How we collect, use, and safeguard your information."
        />

        <div className="mt-10 space-y-6 text-muted-foreground">
          <p>
            JC Premier Detail respects your privacy and is committed to protecting the personal information you share
            with us. This policy explains what we collect, how we use it, and the choices you have.
          </p>

          <div className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">Information We Collect</h2>
            <p>
              We collect information you provide when you request an estimate, book a service, or contact us. This may
              include your name, phone number, email address, vehicle details, and service preferences.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">How We Use Your Information</h2>
            <p>
              We use your information to respond to inquiries, schedule services, provide updates, and improve the
              customer experience. We do not sell or rent your personal information.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">Information Sharing</h2>
            <p>
              We may share information with trusted service providers who help us operate our business, such as
              scheduling or communications tools. These partners are required to keep your information secure.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">Your Choices</h2>
            <p>
              You may request access to, correction of, or deletion of your personal information by contacting us. We
              will respond promptly to reasonable requests.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">Contact</h2>
            <p>
              If you have questions about this policy, please reach out via the contact methods listed on our Contact
              page.
            </p>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default Privacy;
