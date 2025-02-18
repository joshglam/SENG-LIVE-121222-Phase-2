import ProjectListItem from "./ProjectListItem";

const ProjectList = ({ projects }) => {
  const [search, setSearch] = useState("")

  function handleChange(event) {
    setSearch(event.target.value)
  }

  const filteredProjects = projects.filter(project => {
    // needs to return true or false
    return project.name.includes(search)
  })



  const projectListItems = filteredProjects.map((project) => (
    <ProjectListItem key={project.id} {...project} />
  ));


  return (
    <section>
      <h2>Projects</h2>

      <div className="filter">
        <button>All</button>
        <button>Phase 5</button>
        <button>Phase 4</button>
        <button>Phase 3</button>
        <button>Phase 2</button>
        <button>Phase 1</button>
      </div>
      <input type="text" placeholder="Search..."/>

      <ul className="cards">{projectListItems}</ul>
    </section>
  );
};

export default ProjectList;
