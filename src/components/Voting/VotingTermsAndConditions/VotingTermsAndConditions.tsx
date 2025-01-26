interface Term {
    title: string;
    description: string;
  }
  
  const terms: Term[] = [
    {
      title: "1. Eligibility to Vote",
      description:
        "Only active subscribers who have successfully paid the monthly subscription fee are eligible to participate in the voting process.",
    },
    {
      title: "2. Voting Period",
      description:
        "follow our instagram to get notified on when sneakers are open to vote",
    },
    {
      title: "3. Voting Process",
      description:
        "Subscribers can log into their accounts to access the voting page and select their favorite sneaker from the given options.",
    },
    {
      title: "4. Selection of the Winner",
      description:
        "At the end of the voting period, the admin will review the votes and manually select the winner based on the majority vote.",
    },
    {
      title: "5. Delivery of the Winning Sneaker",
      description:
        "The winning sneaker will be announced on the website within 7 days after the voting period ends.",
    },
  ];
  
  export default function VotingTermsAndConditions() {
    return (
      <section className="py-[120px]  px-4 md:px-0">
        <div className="container mx-auto px-0">
          <div className="text-start mb-6">
            <h2 className="text-xl md:text-2xl font-medium mb-4 text-default">
              Voting Terms and Conditions
            </h2>
          </div>
          <div className=" space-y-6">
            {terms.map((term, index) => (
              <div key={index} className="text-gray">
                <h3 className="font-semibold text-lg text-default">{term.title} : <span className="text-[16px] text-gray font-normal">{term.description}</span></h3>
                
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  