export default function Projects() {
  return (
    <section id="projects" className="py-10">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold mb-4 text-center">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border p-4">
            <h3 className="font-bold">Project 1</h3>
            <p>Description of the project goes here.</p>
          </div>
          <div className="border p-4">
            <h3 className="font-bold">Project 2</h3>
            <p>Description of the project goes here.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

