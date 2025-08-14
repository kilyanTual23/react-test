// @ts-nocheck

import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Check, Sparkles, Star, ShieldCheck, Leaf, Package, FlaskConical, Waves, CalendarClock, MapPin, LineChart, PhoneCall, Mail, CircleDollarSign, Clock3, Thermometer, Grape } from "lucide-react";
import { Button } from "./components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./components/ui/card";
import { Badge } from "./components/ui/badge";
import { Input } from "./components/ui/input";
import { Textarea } from "./components/ui/textarea";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "./components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./components/ui/tabs";

// --- Helper components ---
const Section = ({ id, className = "", children }) => (
  <section id={id} className={`mx-auto w-full max-w-7xl px-6 md:px-10 ${className}`}>{children}</section>
);

const Bullet = ({ children }) => (
  <div className="flex items-start gap-3"><Check className="mt-1 h-5 w-5" /><p>{children}</p></div>
);

const Stat = ({ label, value, sub }) => (
  <div className="rounded-2xl border p-6 text-center shadow-sm">
    <div className="text-3xl font-semibold tracking-tight">{value}</div>
    <div className="mt-1 text-sm text-muted-foreground">{label}</div>
    {sub && <div className="mt-2 text-xs text-muted-foreground/70">{sub}</div>}
  </div>
);

// --- Main Page ---
export default function LandingWine() {
  const [open, setOpen] = useState(false);
  const [months, setMonths] = useState(6);
  const monthly = 1200;
  const total = useMemo(() => months * monthly, [months]);

  return (
    <div className="min-h-screen scroll-smooth bg-gradient-to-b from-rose-50 via-white to-white text-slate-900">
      {/* Sticky top bar */}
      <div className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <Section className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.4 }} className="grid h-10 w-10 place-items-center rounded-xl bg-rose-100">
              <Grape className="h-5 w-5" />
            </motion.div>
            <div className="font-semibold">CrushLab</div>
            <Badge variant="secondary" className="ml-2 hidden md:inline-flex">SF Bay Area</Badge>
          </div>
          <div className="flex items-center gap-3">
            <a href="#curriculum" className="hidden text-sm text-muted-foreground hover:text-foreground md:inline-block">Curriculum</a>
            <a href="#gear" className="hidden text-sm text-muted-foreground hover:text-foreground md:inline-block">Gear</a>
            <a href="#faq" className="hidden text-sm text-muted-foreground hover:text-foreground md:inline-block">FAQ</a>
            <Button size="sm" className="rounded-xl" onClick={() => setOpen(true)}>
              Start 6‑Month Journey
            </Button>
          </div>
        </Section>
      </div>

      {/* Hero */}
      <Section className="pt-16">
        <div className="grid items-center gap-10 md:grid-cols-2 md:gap-16">
          <div>
            <Badge className="mb-4 gap-2 rounded-full px-3 py-1 text-sm"><Sparkles className="h-4 w-4" /> Premium Winemaking Coaching</Badge>
            <h1 className="text-balance text-4xl font-semibold tracking-tight md:text-6xl">
              Make brilliant wine at home—with pro gear & a mentor.
            </h1>
            <p className="mt-4 text-lg text-muted-foreground md:text-xl">
              A membership for Bay Area wine geeks who crave both <span className="font-medium text-foreground">art</span> and <span className="font-medium text-foreground">analytics</span>. Rent expert‑curated equipment and work 1:1 with an award‑winning coach. $200/month. 6‑month path from crush to glass.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Button size="lg" className="h-12 rounded-xl px-6" onClick={() => setOpen(true)}>Join for $200/mo</Button>
              <a href="#proof" className="h-12 rounded-xl px-6 text-sm font-semibold leading-[3rem] text-rose-700 hover:underline">See results</a>
            </div>
            <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-3">
              <Stat label="6‑month guided track" value={<span className="flex items-center justify-center gap-1"><CalendarClock className="h-6 w-6"/>6 months</span>} />
              <Stat label="Included gear value" value="$1,800+" sub="Fermenter, press, sensors & more" />
              <Stat label="Member satisfaction" value={<span className="flex items-center justify-center gap-1"><Star className="h-6 w-6"/>4.9/5</span>} sub="From verified Bay Area members" />
            </div>
            <div className="mt-4 flex items-center gap-3 text-sm text-muted-foreground">
              <ShieldCheck className="h-4 w-4" />
              <span>Pause anytime after 6 months • Pickup & delivery across SF Bay Area • Spill‑safe gear swap</span>
            </div>
          </div>

          {/* Hero image substitute */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl border bg-gradient-to-br from-rose-100 via-rose-50 to-white p-6 shadow-xl"
          >
            <div className="absolute inset-0 pointer-events-none">
              <svg viewBox="0 0 600 700" className="h-full w-full opacity-80">
                <defs>
                  <linearGradient id="g" x1="0" x2="1" y1="0" y2="1">
                    <stop offset="0%" stopColor="#ffe4e6"/>
                    <stop offset="100%" stopColor="#ffffff"/>
                  </linearGradient>
                </defs>
                <g fill="url(#g)">
                  <ellipse cx="80" cy="120" rx="80" ry="120" />
                  <ellipse cx="250" cy="90" rx="50" ry="70" />
                  <ellipse cx="380" cy="350" rx="140" ry="200" />
                  <ellipse cx="520" cy="200" rx="60" ry="90" />
                </g>
              </svg>
            </div>

            <div className="relative grid h-full place-items-end">
              <Card className="w-full max-w-md rounded-2xl border-rose-100/80 bg-white/90 backdrop-blur">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2"><Package className="h-5 w-5"/> What you get monthly</CardTitle>
                  <CardDescription>High‑end gear + hands‑on coaching.</CardDescription>
                </CardHeader>
                <CardContent className="grid gap-3 text-sm">
                  <div className="flex items-start gap-3"><Thermometer className="mt-0.5 h-4 w-4"/><p>Temperature‑controlled stainless fermenter (30L) with digital probe</p></div>
                  <div className="flex items-start gap-3"><Waves className="mt-0.5 h-4 w-4"/><p>Inert gas system & transfer kit for oxygen‑safe racking</p></div>
                  <div className="flex items-start gap-3"><FlaskConical className="mt-0.5 h-4 w-4"/><p>Lab kit: hydrometer, pH/TA meter, SO₂ test (AO) + nutrients & yeast</p></div>
                  <div className="flex items-start gap-3"><Leaf className="mt-0.5 h-4 w-4"/><p>Curated grapes or juice from Sonoma/Napa partners (in season)</p></div>
                  <div className="flex items-start gap-3"><CalendarClock className="mt-0.5 h-4 w-4"/><p>2× 45‑min coaching sessions (remote or in‑person)</p></div>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Cred bar */}
      <Section className="mt-12">
        <div className="grid grid-cols-2 items-center gap-4 rounded-2xl border p-4 text-xs text-muted-foreground md:grid-cols-4">
          <div className="flex items-center gap-2"><MapPin className="h-4 w-4"/>SF • East Bay • South Bay • Peninsula</div>
          <div className="flex items-center gap-2"><ShieldCheck className="h-4 w-4"/>Damage coverage on rentals</div>
          <div className="flex items-center gap-2"><LineChart className="h-4 w-4"/>Data‑driven fermentation control</div>
          <div className="flex items-center gap-2"><Leaf className="h-4 w-4"/>Sustainable, re‑usable kit</div>
        </div>
      </Section>

      {/* Curriculum */}
      <Section id="curriculum" className="mt-16">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-pretty text-3xl font-semibold tracking-tight md:text-4xl">Your 6‑month journey</h2>
          <p className="mt-3 text-muted-foreground">From first crush to first pour—structured to fit a busy tech schedule.</p>
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {[
            { m: "Month 1", t: "Crush & Primary", d: "Yeast selection, nutrient strategy, temp profiling. Safety & sanitation." },
            { m: "Month 2", t: "Secondary & Racking", d: "O₂ management, MLF decision tree, gravity & pH tracking." },
            { m: "Month 3", t: "Stabilize & Clarify", d: "SO₂ calibration, cold‑crash, fining trials with lab kit." },
            { m: "Month 4", t: "Maturation", d: "Oak integration options, tannin balance, reductive risks." },
            { m: "Month 5", t: "Blend & Polish", d: "Bench trials, micro‑adjustments, filtration choices." },
            { m: "Month 6", t: "Bottle & Share", d: "Bottling day, closure choices, label design & storage." },
          ].map((step, i) => (
            <Card key={i} className="rounded-2xl">
              <CardHeader>
                <CardDescription>{step.m}</CardDescription>
                <CardTitle className="text-xl">{step.t}</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">{step.d}</CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* Gear */}
      <Section id="gear" className="mt-20">
        <div className="grid items-start gap-8 md:grid-cols-2">
          <div>
            <h3 className="text-2xl font-semibold tracking-tight md:text-3xl">Pro‑grade gear, without the ownership hassle</h3>
            <p className="mt-3 text-muted-foreground">We source the exact tools boutique wineries rely on—then maintain, sanitize, and deliver them to your door when you need them.</p>
            <div className="mt-6 grid gap-3">
              <Bullet>30L temp‑controlled fermenter with digital logging</Bullet>
              <Bullet>Transfer kit with closed‑loop racking and CO₂ blanket</Bullet>
              <Bullet>Lab testing kit (pH, TA, SO₂) + hydrometer & refractometer</Bullet>
              <Bullet>Fining agents, yeast, nutrients, sanitizer & tubing restock</Bullet>
              <Bullet>Optional add‑ons: 225L barrel share, micro‑ox, plate filter</Bullet>
            </div>
            <div className="mt-6 flex items-center gap-3 text-sm text-muted-foreground">
              <ShieldCheck className="h-4 w-4"/>All rentals include damage coverage and pro cleaning between uses.
            </div>
          </div>
          <Card className="rounded-3xl border-rose-100/70 bg-gradient-to-b from-white to-rose-50/40">
            <CardHeader>
              <CardTitle className="flex items-center gap-2"><Star className="h-5 w-5"/> Member Perks</CardTitle>
              <CardDescription>Designed for makers who obsess over the details.</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4 text-sm">
              <div className="flex items-start gap-3"><LineChart className="mt-0.5 h-4 w-4"/><p>Fermentation analytics dashboard with your sensor data</p></div>
              <div className="flex items-start gap-3"><CalendarClock className="mt-0.5 h-4 w-4"/><p>Flexible session scheduling (evenings & weekends)</p></div>
              <div className="flex items-start gap-3"><ShieldCheck className="mt-0.5 h-4 w-4"/><p>Quality guarantee: if a batch goes wrong, we credit your month</p></div>
              <div className="flex items-start gap-3"><MapPin className="mt-0.5 h-4 w-4"/><p>Bay Area pickup & delivery, or visit our Oakland workspace</p></div>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* Offer & Pricing */}
      <Section className="mt-20">
        <div className="grid items-center gap-8 md:grid-cols-2">
          <Card className="order-2 rounded-3xl md:order-1">
            <CardHeader>
              <CardTitle className="text-3xl">$200<span className="text-base font-medium text-muted-foreground">/month</span></CardTitle>
              <CardDescription>6‑month guided program (then month‑to‑month)</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-3 text-sm">
              <Bullet>Everything in <span className="font-medium">Gear</span> + 2× monthly coaching</Bullet>
              <Bullet>Priority grape sourcing during harvest</Bullet>
              <Bullet>Member‑only crush days in Sonoma & Napa</Bullet>
              <Bullet>Pause/cancel anytime after month 6</Bullet>
              <Bullet>No deposit. Delivery included in most Bay Area ZIPs.</Bullet>
              <div className="mt-4 rounded-xl bg-rose-50 p-4 text-rose-900">
                <div className="text-sm font-semibold">Launch bonus</div>
                <div className="text-sm">Sign up for 6 months today and get a complimentary <span className="font-medium">Oak & Tannin Masterclass</span> + <span className="font-medium">free bottling day kit</span>.</div>
              </div>
            </CardContent>
          </Card>

          <div className="order-1 md:order-2">
            <h3 className="text-pretty text-2xl font-semibold tracking-tight md:text-3xl">Join the 6‑month cohort</h3>
            <p className="mt-3 text-muted-foreground">Reserve your spot now. We keep cohorts small to ensure 1:1 attention and top‑tier fruit allocation.</p>
            <div className="mt-6 flex flex-wrap items-end gap-4">
              <div className="w-full max-w-sm">
                <label className="mb-1 block text-sm font-medium">Commitment</label>
                <Tabs defaultValue="6">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="3" onClick={() => setMonths(3)}>3 mo</TabsTrigger>
                    <TabsTrigger value="6" onClick={() => setMonths(6)}>6 mo</TabsTrigger>
                    <TabsTrigger value="12" onClick={() => setMonths(12)}>12 mo</TabsTrigger>
                  </TabsList>
                </Tabs>
                <div className="mt-2 text-sm text-muted-foreground">Recommended: <span className="font-medium text-foreground">6 months</span> (full crush → bottle arc)</div>
              </div>
              <div className="rounded-2xl border p-4 text-sm">
                <div className="text-muted-foreground">Total today*</div>
                <div className="text-2xl font-semibold">${total.toLocaleString()}</div>
                <div className="text-xs text-muted-foreground">*Billed monthly (${monthly}/mo). Cancel after commitment.</div>
              </div>
            </div>
            <div className="mt-6 flex gap-3">
              <Button className="rounded-xl" size="lg" onClick={() => setOpen(true)}>Start for ${monthly}/mo</Button>
              <a href="#faq" className="self-center text-sm font-semibold text-rose-700 hover:underline">Questions? Read FAQ</a>
            </div>
          </div>
        </div>
      </Section>

      {/* Proof */}
      <Section id="proof" className="mt-20">
        <div className="mx-auto max-w-3xl text-center">
          <h3 className="text-2xl font-semibold tracking-tight md:text-3xl">Proof it works</h3>
          <p className="mt-3 text-muted-foreground">Members routinely hit clean ferments, balanced profiles, and show‑off bottlings—even on their first vintage.</p>
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {[
            { title: "Pinot Noir, Sonoma Coast", note: "Elegant red fruit, 13.2% ABV, TA 5.9 g/L", score: "93 club panel" },
            { title: "Cabernet Sauvignon, Oak Knoll", note: "Structured tannins, cassis & cedar", score: "Gold amateur comp" },
            { title: "Chardonnay, Carneros", note: "Native ferment, partial MLF, fine lees", score: "Top 5 tasting" },
          ].map((w, i) => (
            <Card key={i} className="rounded-2xl">
              <CardHeader>
                <CardTitle className="text-lg">{w.title}</CardTitle>
                <CardDescription>{w.note}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2 text-sm"><Star className="h-4 w-4"/> {w.score}</div>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {["I finally understand SO₂.", "The dashboard made temp control trivial.", "Coaching paid for itself on day one."]
            .map((q, i) => (
              <Card key={i} className="rounded-2xl">
                <CardContent className="pt-6 text-sm italic">“{q}”<div className="mt-3 not-italic text-xs text-muted-foreground">— Bay Area Member</div></CardContent>
              </Card>
          ))}
        </div>
      </Section>

      {/* Comparison */}
      <Section className="mt-20">
        <div className="mx-auto max-w-3xl text-center">
          <h3 className="text-2xl font-semibold tracking-tight md:text-3xl">Why CrushLab beats classes & DIY</h3>
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <Card className="rounded-2xl">
            <CardHeader>
              <CardTitle>Traditional Class</CardTitle>
              <CardDescription>Fixed schedule • Shared gear</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2 text-sm text-muted-foreground">
              <div>✔ Fun group energy</div>
              <div>✖ Little 1:1 time</div>
              <div>✖ No take‑home gear</div>
            </CardContent>
          </Card>
          <Card className="rounded-2xl border-rose-200">
            <CardHeader>
              <Badge className="mb-2 w-fit">Best for Results</Badge>
              <CardTitle>CrushLab Membership</CardTitle>
              <CardDescription>Gear + mentorship + data</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2 text-sm">
              <div className="flex items-start gap-2"><Check className="mt-0.5 h-4 w-4"/>Personalized plan & 1:1 coaching</div>
              <div className="flex items-start gap-2"><Check className="mt-0.5 h-4 w-4"/>Pro gear delivered when needed</div>
              <div className="flex items-start gap-2"><Check className="mt-0.5 h-4 w-4"/>Analytics for repeatable quality</div>
            </CardContent>
          </Card>
          <Card className="rounded-2xl">
            <CardHeader>
              <CardTitle>DIY Buying</CardTitle>
              <CardDescription>Expensive • Risky first batches</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2 text-sm text-muted-foreground">
              <div>✔ Full control</div>
              <div>✖ $1,500+ in gear upfront</div>
              <div>✖ No expert to call</div>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* CTA Banner */}
      <Section className="mt-20">
        <div className="relative overflow-hidden rounded-3xl border bg-gradient-to-r from-rose-100 via-white to-rose-50 p-8 md:p-10">
          <div className="max-w-2xl">
            <h4 className="text-pretty text-2xl font-semibold tracking-tight">Ready to craft your best bottle?</h4>
            <p className="mt-2 text-muted-foreground">Lock your place in the next cohort. Most members bottle within six months—and keep improving every vintage.</p>
            <div className="mt-4 flex gap-3">
              <Button className="rounded-xl" size="lg" onClick={() => setOpen(true)}>Join for $200/mo</Button>
              <Dialog open={open} onOpenChange={setOpen}>
                <DialogTrigger asChild>
                  <Button variant="secondary" className="rounded-xl" size="lg">Talk to a coach</Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-lg">
                  <DialogHeader>
                    <DialogTitle>Book a 10‑min call</DialogTitle>
                    <DialogDescription>We’ll confirm fit, walk you through the curriculum, and reserve your gear.</DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-3">
                    <div className="grid gap-2">
                      <label className="text-sm font-medium">Name</label>
                      <Input placeholder="Your full name" />
                    </div>
                    <div className="grid gap-2">
                      <label className="text-sm font-medium">Email</label>
                      <Input type="email" placeholder="you@company.com" />
                    </div>
                    <div className="grid gap-2">
                      <label className="text-sm font-medium">What’s your winemaking experience?</label>
                      <Textarea placeholder="First vintage? Prior batches? Favorite varietals?" />
                    </div>
                    <Button className="mt-2 w-full rounded-xl">Request a call</Button>
                    <p className="text-center text-xs text-muted-foreground">Prefer SMS? Text us at (415) 555‑0133.</p>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </div>
          <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-rose-200/40 blur-3xl"/>
        </div>
      </Section>

      {/* FAQ */}
      <Section id="faq" className="mt-20">
        <div className="mx-auto max-w-3xl">
          <h4 className="text-2xl font-semibold tracking-tight md:text-3xl">FAQ</h4>
          <div className="mt-6 grid gap-6">
            <Card className="rounded-2xl">
              <CardHeader>
                <CardTitle className="text-lg">Is wine/juice included?</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">During harvest, members get access to partner growers in Sonoma & Napa at member pricing. Off‑season, we source premium frozen must or high‑quality juice. We handle logistics.</CardContent>
            </Card>
            <Card className="rounded-2xl">
              <CardHeader>
                <CardTitle className="text-lg">Do I need space?</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">A corner of a garage, laundry room, or patio is enough. Fermenters are compact and sealed; we provide spill‑safe mats and odor control tips.</CardContent>
            </Card>
            <Card className="rounded-2xl">
              <CardHeader>
                <CardTitle className="text-lg">What if my batch goes sideways?</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">We’ll triage quickly. If a batch is unsalvageable despite following our protocols, we credit your month and reboot you with fresh fruit/juice.</CardContent>
            </Card>
            <Card className="rounded-2xl">
              <CardHeader>
                <CardTitle className="text-lg">Can I pause?</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">Yes—after your 6‑month commitment, pause or cancel any time. We’ll collect the gear and store your profile for next vintage.</CardContent>
            </Card>
          </div>
        </div>
      </Section>

      {/* Footer */}
      <footer className="mt-24 border-t">
        <Section className="flex flex-col items-center gap-6 py-12 md:flex-row md:items-start md:justify-between">
          <div className="max-w-md">
            <div className="flex items-center gap-2 text-lg font-semibold"><Grape className="h-5 w-5"/> CrushLab</div>
            <p className="mt-2 text-sm text-muted-foreground">A Bay Area membership for serious hobbyists who want winery‑level results at home.</p>
            <div className="mt-3 flex items-center gap-4 text-xs text-muted-foreground">
              <div className="flex items-center gap-1"><MapPin className="h-3 w-3"/> Oakland, CA</div>
              <div className="flex items-center gap-1"><PhoneCall className="h-3 w-3"/> (415) 555‑0133</div>
              <div className="flex items-center gap-1"><Mail className="h-3 w-3"/> hello@crushlab.co</div>
            </div>
          </div>
          <div className="grid gap-2 text-sm text-muted-foreground">
            <a href="#curriculum" className="hover:text-foreground">Curriculum</a>
            <a href="#gear" className="hover:text-foreground">Gear</a>
            <a href="#faq" className="hover:text-foreground">FAQ</a>
            <a href="#" className="hover:text-foreground">Terms</a>
          </div>
          <div className="rounded-2xl border p-4 text-center text-xs text-muted-foreground">
            <div className="flex items-center justify-center gap-1"><ShieldCheck className="h-3.5 w-3.5"/> 30‑day satisfaction promise</div>
            <div className="mt-1">If you don’t love month one, we’ll refund it.</div>
          </div>
        </Section>
      </footer>

      {/* Floating sticky CTA */}
      <div className="fixed inset-x-0 bottom-0 z-40 border-t bg-white/90 p-3 backdrop-blur md:hidden">
        <div className="mx-auto flex max-w-3xl items-center justify-between gap-3">
          <div className="text-sm"><span className="font-semibold">$200/mo</span> • 6‑month guided program</div>
          <Button size="sm" className="rounded-xl" onClick={() => setOpen(true)}>Join</Button>
        </div>
      </div>

      {/* Primary checkout dialog */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-lg">
          <DialogHeader>
            <DialogTitle>Reserve your spot</DialogTitle>
            <DialogDescription>6‑month cohort • ${monthly}/mo billed monthly • Cancel anytime after 6 months</DialogDescription>
          </DialogHeader>
          <div className="grid gap-3">
            <div className="grid gap-2">
              <label className="text-sm font-medium">Full name</label>
              <Input placeholder="Avery Johnson" />
            </div>
            <div className="grid gap-2">
              <label className="text-sm font-medium">Work email</label>
              <Input type="email" placeholder="avery@company.com" />
            </div>
            <div className="grid gap-2">
              <label className="text-sm font-medium">ZIP code (for delivery)</label>
              <Input inputMode="numeric" placeholder="94107" />
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div className="grid gap-2">
                <label className="text-sm font-medium">Commitment</label>
                <Input value={`${months} months`} readOnly />
              </div>
              <div className="grid gap-2">
                <label className="text-sm font-medium">Monthly rate</label>
                <Input value={`$${monthly}`} readOnly />
              </div>
            </div>
            <Button className="mt-1 w-full rounded-xl">Start for ${monthly}/mo</Button>
            <p className="text-center text-xs text-muted-foreground">By continuing, you agree to the Terms. We’ll confirm availability by email in 1 business day.</p>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
