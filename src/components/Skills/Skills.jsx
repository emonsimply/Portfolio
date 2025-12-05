const Skills = () => {
  const frontend = ["HTML", "CSS", "Tailwind", "JavaScript", "React"];
  const tools = ["Git", "GitHub", "VS Code", "Figma", "Firebase"];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-900">Skills</h2>

        <div className="grid md:grid-cols-2 gap-10 mt-12">
          <SkillCard title="Frontend" items={frontend} />
          <SkillCard title="Tools" items={tools} />
        </div>
      </div>
    </section>
  );
};

const SkillCard = ({ title, items }) => (
  <div className="bg-white shadow rounded-lg p-6">
    <h3 className="text-xl font-semibold mb-4">{title}</h3>
    <div className="flex flex-wrap gap-3">
      {items.map((s, i) => (
        <span
          key={i}
          className="bg-indigo-100 text-indigo-600 px-4 py-2 rounded-full text-sm"
        >
          {s}
        </span>
      ))}
    </div>
  </div>
);

export default Skills;
