"use client"

import Plan from "@/app/components/Plan";

interface PlansClientProps {}

const PlansClient: React.FC<PlansClientProps> = ({}) => {
  return (
    <div className="h-full gap-2 p-2 overflow-scroll plan-grid">
      <Plan
        title="Indigo Max"
        price={85}
        reducedPrice={90}
        description="All Indigo benefits + unlimited premium data on a 5G plan that can't slow you down based on how much data you use"
        features={[
          "All the great benefits of shown above",
          "Taxes & fees included",
          "Unlimited premium data",
          "Netflix on Us (1-screen)",
          "40GB high-speed mobile hotspot"
        ]}
      />

      <Plan
        title="Indigo"
        price={70}
        reducedPrice={75}
        description="Enjoy all our unlimited phone plan benefits, plus more great stuff, like added entertainment and travel perks"
        features={[
          "All the great benefits of shown above",
          "Taxes & fees included",
          "100GB premium data",
          "5GB high-speed mobile hotspot",
          "Unlimited 5G & 4G LTE/100GB premium data",
        ]}
      />

      <Plan
        title="Essentials"
        price={60}
        reducedPrice={65}
        description="Get an unlimited phone plan with all the essential benefits you need including 5G access"
        features={[
          "All the great benefits of shown above",
          "50GB premium data",
          "Unlimited 3G mobile hotspot data incl.",
          "Unlimited 5G & 4G LTE with 50GB Premium Data",
          "No annual service contract required",
        ]}
        taxed={true}
      />
    </div>
  );
};

export default PlansClient;
