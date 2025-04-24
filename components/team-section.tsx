import { teamData } from "@/data/team";
import { TeamCard } from "@/components/team-card";
import { TeamDepartment } from "@/data/team";

const TeamSection = () => (
  <div>
    {teamData.map((department: TeamDepartment) => (
      <div key={department.title} className="mb-12">
        <h3 className="text-xl font-semibold mb-4">{department.title}</h3>
        <div className="flex flex-wrap justify-center gap-x-12 gap-y-8">
          {department.members.map((member) => (
            <TeamCard key={member.name} {...member} />
          ))}
        </div>
      </div>
    ))}
  </div>
);

export default TeamSection;
