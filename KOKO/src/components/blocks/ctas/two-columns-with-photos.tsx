"use client"

import { Button } from "@/components/ui/button"
import { ShoppingBag, Store } from "lucide-react"

export default function TwoColumnsWithPhotos() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Ready to Order Column */}
          <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-orange-50 to-orange-100">
            <div className="relative aspect-[4/3] overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
              <img 
                src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&h=600&fit=crop&crop=center&auto=format&q=80"
                alt="Fresh delicious food spread from Koko"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 flex items-end">
                <div className="p-6 md:p-8 text-white">
                  <h3 className="text-2xl md:text-3xl font-bold mb-3 text-white">
                    Ready to Order?
                  </h3>
                  <p className="text-lg md:text-xl mb-6 text-white/90">
                    Experience fresh, flavorful meals delivered straight to your door. Order online for quick pickup or convenient delivery.
                  </p>
                  <Button 
                    size="lg" 
                    className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-3 font-medium"
                  >
                    <ShoppingBag className="mr-2 h-5 w-5" />
                    Order Online Now
                  </Button>
                </div>
              </div>
            </div>
            <div className="p-6 md:p-8">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-primary mb-1">15min</div>
                  <div className="text-sm text-muted-foreground">Prep Time</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary mb-1">Fresh</div>
                  <div className="text-sm text-muted-foreground">Daily Made</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary mb-1">24/7</div>
                  <div className="text-sm text-muted-foreground">Ordering</div>
                </div>
              </div>
            </div>
          </div>

          {/* Ready to Invest Column */}
          <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100">
            <div className="relative aspect-[4/3] overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
              <img 
                src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&h=600&fit=crop&crop=center&auto=format&q=80"
                alt="Modern Koko restaurant exterior showcasing franchise opportunity"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 flex items-end">
                <div className="p-6 md:p-8 text-white">
                  <h3 className="text-2xl md:text-3xl font-bold mb-3 text-white">
                    Ready to Invest?
                  </h3>
                  <p className="text-lg md:text-xl mb-6 text-white/90">
                    Join a growing brand with proven success. Build your future with our comprehensive franchise support system.
                  </p>
                  <Button 
                    size="lg" 
                    className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-3 font-medium"
                  >
                    <Store className="mr-2 h-5 w-5" />
                    Franchise Inquiry
                  </Button>
                </div>
              </div>
            </div>
            <div className="p-6 md:p-8">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-primary mb-1">95%</div>
                  <div className="text-sm text-muted-foreground">Success Rate</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary mb-1">$150K</div>
                  <div className="text-sm text-muted-foreground">Avg. Revenue</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary mb-1">30+</div>
                  <div className="text-sm text-muted-foreground">Locations</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}