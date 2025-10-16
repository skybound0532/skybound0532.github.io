import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      {/* hero */}
      <section
        className="relative flex gap-8 items-start mb-16 glass-strong rounded-[2rem] p-8 backdrop-blur-3xl"
        style={{ background: "rgba(255,255,255,0.02)" }}
      >
        {/* photo */}
        <div className="relative z-10 flex-shrink-0">
          <div className="w-32 h-32 relative rounded-full overflow-hidden border-1 border-white/30">
            <Image
              src="/pfp2.png"
              alt="Personal photo"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* details */}
        <div className="relative z-10 flex-grow">
          <h1 className="text-4xl font-bold mb-4 gradient-text">Eric Gu</h1>
          
          {/* linkedin and email */}
          <div className="flex gap-4 mb-4">
            <Link 
              href="https://www.linkedin.com/in/eric-t-gu/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <LinkedInIcon sx={{ fontSize: 32 }} />
            </Link>
            <Link 
              href="mailto:eric.gu@berkeley.edu"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <EmailIcon sx={{ fontSize: 32 }} />
            </Link>
          </div>

          {/* description */}
          <div className="text-base text-muted-foreground leading-relaxed mb-6 space-y-1">
            <p>Mechanical Engineering + Electrical Engineering & Computer Science</p>
            <p><em className="italic">University of California, Berkeley</em>, '28</p>
            <p>I enjoy all things mechatronics, including robots, drones, and 3D printers!</p>
          </div>

          {/* navigation buttons */}
          <div className="flex gap-4">
            <Button asChild variant="default" className="bg-primary/20 hover:bg-primary/30 border border-primary/30">
              <Link href="/projects">Projects</Link>
            </Button>
            <Button asChild variant="outline" className="glass border-white/30 hover:bg-primary/10 hover:text-foreground">
              <Link href="/cooking">Cooking</Link>
            </Button>
          </div>
        </div>
      </section>

      <Separator className="my-12 bg-gradient-to-r from-transparent via-primary/50 to-transparent border-0 h-px" />

      {/* activities */}
      <section>
        <h2 className="text-4xl font-bold mb-8 gradient-text">Activities</h2>
        
        <div className="space-y-8">
          {activities.map((exp, index) => (
            <div 
                key={index} 
                className="relative pl-8 border-l-2 border-primary/30 glass-strong rounded-[2rem] p-8 backdrop-blur-3xl"
                style={{ background: "rgba(255,255,255,0.02)" }}
              >
              {/* timeline-style dot */}
              {/*<div className="absolute left-[-9px] top-6 w-4 h-4 rounded-full bg-gradient-to-br from-primary to-secondary border-2 border-background shadow-lg" />*/}
              
              <div className="flex items-start justify-between gap-4 mb-3">
                <div>
                  <h3 className="text-2xl font-semibold gradient-text">{exp.title}</h3>
                  <p className="text-lg text-muted-foreground">{exp.role}</p>
                </div>
                <span className="text-base text-muted-foreground whitespace-nowrap">
                  {exp.date}
                </span>
              </div>
              
              {exp.description && (
                <p className="text-base leading-relaxed">{exp.description}</p>
              )}
              
              {exp.accomplishments && (
                <ul className="mt-3 space-y-1 text-sm text-muted-foreground">
                  {exp.accomplishments.map((accomplishment, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="text-primary">•</span>
                      <span>{accomplishment}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

type Activity = {
  title: string;
  role: string;
  date: string;
  description?: string;
  accomplishments?: string[];
};

const activities: Activity[] = [
  {
    title: "Unmanned Aerial Vehicles at Berkeley",
    role: "Lead Airframe Engineer",
    date: "Aug 2024 - Present",
    accomplishments: [
      "yada yada",
      "nada"
    ]
  },
  {
    title: "Theoretical and Applied Fluid Dynamics Laboratory",
    role: "Undergraduate Researcher",
    date: "May 2025 - Present",
    accomplishments: [
      "yada yada",
      "nada"
    ]
  },
  {
    title: "Space Enterprise at Berkeley",
    role: "Structures Team Member",
    date: "Aug 2024 - Present",
    accomplishments: [
      "yada yada",
      "nada"
    ]
  },
  {
    title: "Supernode Makerspace",
    role: "Student Fabrication Admin",
    date: "Dec 2024 - Present",
    accomplishments: [
      "yada yada",
      "nada"
    ]
  },
  {
    title: "Civil Air Patrol",
    role: "Grade of Cadet Major. Cadet Public Affairs Officer, Cadet Aerospace Education Officer, Cadet Commander",
    date: "Aug 2018 - Aug 2024",
    accomplishments: [
      "yada yada",
      "nada"
    ]
  },
  {
    title: "Naperville Central High School Science Olympiad",
    role: "Team Captain",
    date: "Aug 2022 - May 2024",
    accomplishments: [
      "yada yada",
      "nada"
    ]
  },
  {
    title: "CyberPatriot",
    role: "Team Captain",
    date: "Aug 2021 - May 2024",
    accomplishments: [
      "yada yada",
      "nada"
    ]
  },
  {
    title: "Boy Scouts of America",
    role: "Eagle Scout",
    date: "2016 - 2023",
    accomplishments: [
      "yada yada",
      "nada"
    ]
  },
];
