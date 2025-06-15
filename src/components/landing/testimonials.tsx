
import { Card } from "@/components/ui/card";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Marketing Director, FashionBrand",
      content: "Aura has completely transformed our content strategy. We're now able to find relevant content in minutes instead of hours. The AI suggestions are spot on!",
      avatar: "SJ"
    },
    {
      name: "Michael Chen",
      role: "Growth Lead, TechStartup",
      content: "As a SaaS company, we need to stay on top of industry trends. Aura helps us monitor competitor content and organize inspiration for our own campaigns.",
      avatar: "MC"
    },
    {
      name: "Olivia Rodriguez",
      role: "Content Creator",
      content: "I use Aura daily to find trending content ideas. The analytics help me understand what's working in my niche, and the board feature keeps everything organized.",
      avatar: "OR"
    }
  ];

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-gray-50">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center justify-center px-3 py-1 mb-4 text-sm rounded-full bg-aura-primary/10 text-aura-primary">
            Testimonials
          </div>
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl mb-4">
            Loved by teams and creators
          </h2>
          <p className="text-gray-600">
            See how Aura is helping brands and creators discover and leverage social content.
          </p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-6 border bg-white">
              <div className="flex items-start mb-4">
                <div className="h-10 w-10 rounded-full bg-aura-primary/20 text-aura-primary flex items-center justify-center mr-4">
                  <span className="font-medium">{testimonial.avatar}</span>
                </div>
                <div>
                  <h3 className="font-medium">{testimonial.name}</h3>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
              <p className="italic text-gray-700">"{testimonial.content}"</p>
              <div className="mt-4 flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg 
                    key={i} 
                    className="h-5 w-5 text-yellow-400" 
                    fill="currentColor" 
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                ))}
              </div>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-gray-500 mb-4">Trusted by marketing teams at companies like</p>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {[
              'TopBrand Inc.',
              'EcomStore',
              'AppCompany',
              'CreativeAgency',
              'TechSolutions'
            ].map((company) => (
              <div key={company} className="text-gray-400 font-medium">
                {company}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
