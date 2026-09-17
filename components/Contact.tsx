import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Phone, Terminal, Shield, Wifi } from "lucide-react"

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-black/50 relative">
      <div className="absolute inset-0 cyber-grid opacity-10"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="mb-4 font-mono text-sm text-muted-foreground">
            <span className="text-primary">[SECURE CHANNEL]</span> ENCRYPTED COMMUNICATION
          </div>
          <h2 className="font-mono font-bold text-3xl md:text-4xl mb-4 matrix-text">ESTABLISH CONNECTION</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-mono">
            <span className="text-primary">&gt;</span> Initiate secure communication protocol for classified operations
            and collaboration requests.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h3 className="font-mono font-semibold text-2xl mb-6 text-primary flex items-center gap-2">
              <Terminal className="w-6 h-6" />
              SECURE CHANNELS
            </h3>
            <div className="space-y-6">
              <div className="flex items-center space-x-4 cyber-card p-4 rounded-lg">
                <Mail className="text-primary neon-glow" size={24} />
                <div>
                  <p className="font-mono font-medium text-primary">ENCRYPTED EMAIL</p>
                  <p className="text-muted-foreground font-mono text-sm">nodirbeknegmatov2008@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center space-x-4 cyber-card p-4 rounded-lg">
                <Phone className="text-primary neon-glow" size={24} />
                <div>
                  <p className="font-mono font-medium text-primary">SECURE LINE</p>
                  <p className="text-muted-foreground font-mono text-sm">+998 [77 100 40 84]</p>
                </div>
              </div>
              <div className="flex items-center space-x-4 cyber-card p-4 rounded-lg">
                <MapPin className="text-primary neon-glow" size={24} />
                <div>
                  <p className="font-mono font-medium text-primary">LOCATION</p>
                  <p className="text-muted-foreground font-mono text-sm">Toshkent, Uzbekistan</p>
                </div>
              </div>
              <div className="flex items-center space-x-4 cyber-card p-4 rounded-lg">
                <Wifi className="text-primary neon-glow" size={24} />
                <div>
                  <p className="font-mono font-medium text-primary">STATUS</p>
                  <p className="text-primary font-mono text-sm">
                    <span className="animate-pulse">●</span> ONLINE - READY FOR OPERATIONS
                  </p>
                </div>
              </div>
            </div>
          </div>

          <Card className="terminal-border hologram">
            <CardHeader>
              <CardTitle className="font-mono text-primary flex items-center gap-2">
                <Shield className="w-5 h-5" />
                INITIATE CONTACT PROTOCOL
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <Input
                    placeholder="FIRST NAME"
                    className="terminal-border bg-black/50 font-mono text-primary placeholder:text-muted-foreground"
                  />
                  <Input
                    placeholder="LAST NAME"
                    className="terminal-border bg-black/50 font-mono text-primary placeholder:text-muted-foreground"
                  />
                </div>
                <Input
                  placeholder="EMAIL ADDRESS"
                  type="email"
                  className="terminal-border bg-black/50 font-mono text-primary placeholder:text-muted-foreground"
                />
                <Input
                  placeholder="SECURITY CLEARANCE LEVEL"
                  className="terminal-border bg-black/50 font-mono text-primary placeholder:text-muted-foreground"
                />
                <Textarea
                  placeholder="ENCRYPTED MESSAGE..."
                  rows={5}
                  className="terminal-border bg-black/50 font-mono text-primary placeholder:text-muted-foreground"
                />
                <Button className="w-full terminal-border bg-transparent hover:bg-primary/20 text-primary neon-glow font-mono">
                  <Terminal className="w-4 h-4 mr-2" />
                  TRANSMIT MESSAGE
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
